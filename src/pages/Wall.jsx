
/* eslint-disable react/no-children-prop */
import { getName } from "../lib/login";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/Form";
import { BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Card } from "../components/Card";
import { DataContext } from "../context/dataContext";
import { Button } from "../components/Button";
import { season } from "../lib/getData";
import { ModalDetail } from "../components/Modal";
export function Wall() {
  const {
    characters,
    setCharacters,
    location,
    setLocation,
    episodes,
    setEpisodes,
    mainCharacter,
    setMainCharacter,
  } = useContext(DataContext);
  const { setCurrentUser } = useContext(AuthContext);
  const [showName, setShowName] = useState("");
  const [userImage, setUserImage] = useState("");
  const getEmail = localStorage.getItem("email");
  const [show, setShow] = useState(mainCharacter);
  const [title, setTitle] = useState("Personajes Principales");
  const [textButton, setTextButton] = useState("Todos los personajes");
  const [status, setStatus] = useState("Characters");
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    setCurrentUser({ email: getEmail });
   
    getName().then((res) => {
      const getName = res.data.filter((user) => {
        return user.email === getEmail;
      });
      setShowName(getName[0].first_name);
      setUserImage(getName[0].avatar);
    });

    if (getEmail) {
      setTitle("Personajes Principales");
      setCharacters(characters);
      setEpisodes(episodes);
      setLocation(location);
      setMainCharacter(mainCharacter);
      setShow(mainCharacter);
      setStatus("Characters");
    }
    
  }, [getEmail, search]);

   useEffect(() => {
      getFind(search);
   }, [search]);

   const otherArray = show.flat();
  function getFind(param) {
  
    if (param) {
      console.log('busco')
      const filteredProducts = otherArray.filter((e) =>
        e.name.toLowerCase().includes(param.toLowerCase())
      );
      setShow(filteredProducts);
    }else if(search === null){
      setShow(otherArray);
    } else if(show.length === 0){
     setStatus("none");
    }
  }


  function handleCharacters() {
    setShow(characters);
    setTitle("Todos los personajes");
    setTextButton("Personajes Principales");
  }

  function handleMainCharacter() {
    setShow(mainCharacter);
    setTitle("Personajes Principales");
    setTextButton("Todos los personajes");
  }

  function handleChangeCharacters() {
    setStatus("Characters");
    if (show.length > 4) {
      handleMainCharacter();
    } else {
      handleCharacters();
    }
  }

  function handleShowLocations() {
    setStatus("Locations");
    setTitle("Locaciones");
    setTextButton("Personajes Principales");
    const getLocations = location.flat().filter((e) => e.dimension);
    setShow(getLocations);
  }

  function handleShowSeason() {
    setStatus("Seasons");
    setTitle("Temporadas");
    setTextButton("Personajes Principales");
    setShow(season);
  }

  function openModal(info) {
    setIsOpen(!isOpen);
    setInfo(info);
  }

  function handleFilterForSeason(season) {
    const episodesFiltered = episodes.flat().filter((e) => {
      let episodesFilter = e.episode.slice(0,3); 
      return episodesFilter === season;
    });
    setStatus("Episodes")
    setTitle("Temporada " + season);
    return setShow(episodesFiltered);
  }

  return (
    <div>
      <nav className="flex justify-between items-center w-full px-5 border-b-2 border-b-green-500 h-16 bg-green-500 bg-opacity-5 -sm:flex-col -sm:justify-start -sm:items-start -sm:h-36">
        <div className="group flex items-center justify-start px-5 py-5 w-50 h-20 text-white -sm:-ml-4 -sm:w-full sm:w-full sm:">
          <img
            className=" h-12 w-12 mr-4 -ml-4 rounded-full"
            src={userImage}
            alt=""
          />
          <div className="ltr:ml-3 rtl:mr-3 mr-3">
            <p className="text-sm font-medium text-slate-300 group-hover:text-white">
              {"Hola " + showName + "!"}
            </p>
            <p className="text-sm font-medium text-neutral-400 group-hover:text-slate-300">
              ¿Qué buscarás hoy?
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center -sm:w-60 -sm:self-start -sm:ml-4 sm:ml-36 sm:w-60">
          <label htmlFor="findText">
            <div className="flex justify-around rounded-xl items-center border-2 px-4 h-10  border-gray-300 ml-4 -sm:mr-0">
              <div className="flex items-center w-6 border-r-2  border-gray-300 h-10 -ml-2 ">
                <BsSearch />
              </div>

              <input
                type="text"
                placeholder="Busca lo que quieras..."
                value={search || ""}
                onChange={(e) => {setSearch(e.target.value)
                if(search === null){
                  getFind(search)
                }
                }}
                className="container bg-green-600 bg-opacity-5 w-80 -sm:w-72 sm:w-60 md:w-96 lg:w-96 xl:w-96 2xl:w-96 h-9 hover:h-10 hover:border-2 focus:border-0 p-3"
              ></input>
            </div>
          </label>
        </div>
        <div className="flex w-full flex-col mt-10 self-center justify-end items-center -sm:-mt-24 -sm:mr-0 -sm:items-end sm:mt-2 sm:items-end">
          <FiLogOut
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              setCurrentUser(null);
              window.location.reload();
            }}
            className="text-white peer ..."
          />
          <p className="z-40 invisible peer-hover:visible sm:-mr-4 bg-cyan-500 font-semibold rounded-lg p-1 text-neutral-600 text-sm">Cerrar sesión</p>
        </div>
      </nav>
      <main>
        <div className="flex justify-center items-center xl:gap-6 mt-5 mb-5 -sm:flex-col -sm:gap-2 sm:gap-2">
          <Button
            onClick={handleShowLocations}
            children="Locaciones"
            className="p-2 rounded-lg w-52 bg-cyan-500 text-neutral-600 xl:text-lg font-semibold hover:text-neutral-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 duration-300 -sm:text-base sm:text-base  "
          />
          <Button
            onClick={handleChangeCharacters}
            children={textButton}
            className="p-2 rounded-lg w-52 bg-cyan-500 text-neutral-600 xl:text-lg font-semibold hover:text-neutral-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 duration-300 -sm:text-base sm:text-base"
          />
          <Button
            onClick={handleShowSeason}
            children="Temporadas"
            className="p-2 rounded-lg w-52 bg-cyan-500 text-neutral-600 xl:text-lg  font-semibold hover:text-neutral-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 duration-300 -sm:text-base sm:text-base"
          />
        </div>

        <h1 className="text-center text-neutral-300 font-medium -sm:text-xl text-4xl sm:text-3xl">{title}</h1>
        <div className="mt-10 mb-10 flex flex-wrap items-center justify-around px-5 gap-8">
          {isOpen && (
            <ModalDetail info={info} status={status} onClose={openModal} />
          )}
          {status === "Characters"
            ? show.flat().map((character) => {
                return (
                  <ul key={character.id + character.url}>
                    <Card
                      onClick={() => openModal(character)}
                      image={character.image}
                      name={character.name}
                      status={character.status}
                    />
                  </ul>
                );
              })
            : status === "Locations"
            ? show.map((character) => {
                return (
                  <ul key={character.id + character.url}>
                    <Card
                      onClick={() => openModal(character)}
                      name={character.name}
                      residents={
                        character.residents.length
                          ? character.residents.length
                          : "undefined"
                      }
                      type={character.type}
                    />
                  </ul>
                );
              })
            : status === "Seasons"
            ? (show.flat().map((character) => {
                return (
                  <ul key={"seasons" + character.id + character.season}>
                    <Card
                      onClick={() => handleFilterForSeason(character.season)}
                      name={character.name}
                      episodes={character.episodes.length}
                    />
                  </ul>
                );
              }))
            : status === "Episodes" ? (
              show.flat().map((character) => {
                return (
                  <ul key={"seasons" + character.id + character.season}>
                    <Card
                      name={character.name}
                      air_date={character.air_date}
                      characters={character.characters.length}
                    />
                  </ul>
                );
              }
            )) : status === 'none' ? (
              <h1 className="text-lg text-neutral-600">Ups!, No se encontro ninguna coincidencia, serás redirigido a la pantalla principal</h1>
            ) : null}
        </div>
      </main>
    </div>
  );
}
