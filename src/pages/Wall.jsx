/* eslint-disable react-hooks/exhaustive-deps */
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
  const [find, setFind] = useState("");
  const getEmail = localStorage.getItem("email");
  const [show, setShow] = useState(mainCharacter);
  const [title, setTitle] = useState("Personajes Principales");
  const [textButton, setTextButton] = useState("Todos los personajes");
  const [status, setStatus] = useState("Characters");
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState();
  useEffect(() => {
    setCurrentUser({ email: getEmail });
    setStatus("Characters");
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
  }, [getEmail]);

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

  //   function filterLocation(param) {
  //     const getLocations = location
  //       .flat()
  //       .filter((location) => location.dimension === param);
  //       return getLocations;
  //   }

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
 
  return (
    <div>
      <nav className="flex justify-between items-center w-full border-b-2 border-b-green-500 h-18 bg-green-500 bg-opacity-5">
        <div className="group flex items-center justify-start px-5 py-5 w-50 h-20 text-white">
          <img
            className=" h-12 w-12 mr-4 -ml-4 rounded-full"
            src={userImage}
            alt=""
          />
          <div className="ltr:ml-3 rtl:mr-3 mr-3">
            <p className="text-sm font-medium text-slate-300 group-hover:text-white">
              {"Hola " + showName + "!"}
            </p>
            <p className="text-sm font-medium text-neutral-900 group-hover:text-slate-300">
              ¿Qué buscarás hoy?
            </p>
          </div>
        </div>
        <div className="col-span-2 justify-center items-center -sm:col-start-1 -sm:col-end-3">
          <label htmlFor="findText">
            <div className="flex justify-around rounded-xl items-center border-2 px-4 h-10  border-gray-300 ml-4">
              <div className="flex items-center w-6 border-r-2  border-gray-300 h-10 -ml-2 ">
                <BsSearch />
              </div>

              <input
                type="text"
                placeholder="Busca lo que quieras..."
                value={find || ""}
                onChange={(e) => setFind(e.target.value)}
                className="container bg-neutral-600 w-80 -sm:w-80 sm:w-80 md:w-96 lg:w-96 xl:w-96 2xl:w-96 h-9 hover:h-10 hover:border-2 focus:border-0 p-3"
              ></input>
            </div>
          </label>
        </div>
        <div className="self-center items-end">
          <FiLogOut
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              setCurrentUser(null);
              window.location.reload();
            }}
          />
        </div>
      </nav>
      <main>
        <div className="flex justify-center items-center gap-6 mt-5 mb-5">
          <Button
            onClick={handleShowLocations}
            children="Locaciones"
            className="p-2 rounded-lg bg-cyan-500 text-neutral-900 text-sm font-semibold"
          />
          <Button
            onClick={handleChangeCharacters}
            children={textButton}
            className="p-2 rounded-lg bg-cyan-500 text-neutral-900 text-sm font-semibold"
          />
          <Button
            onClick={handleShowSeason}
            children="Episodios"
            className="p-2 rounded-lg bg-cyan-500 text-neutral-900 text-sm font-semibold"
          />
        </div>

        <h1 className="text-center text-4xl">{title}</h1>
        <div className="mt-10 mb-10 flex flex-wrap items-center justify-around px-5 gap-8">
          {isOpen && <ModalDetail info={info} onClose={openModal} />}
          {status === "Characters"
            ? show.flat().map((character) => {
                console.log(character);
                return (
                  <ul key={character.id + character.url}>
                    <Card
                      onClick={openModal}
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
            ? show.flat().map((character) => {
                return (
                  <ul key={"seasons" + character.id + character.season}>
                    <Card
                      name={character.name}
                      episodes={character.episodes.length}
                    />
                  </ul>
                );
              })
            : null}
        </div>
      </main>
    </div>
  );
}
