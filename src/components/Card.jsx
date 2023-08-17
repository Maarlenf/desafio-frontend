/* eslint-disable react/prop-types */
export const Card = ({ image, name, status, residents, type, onClick, episodes, air_date, characters }) => {
  return (
    <div className="flex flex-col justify-evenly items-center border-2 border-green-500 w-60 h-60 rounded-xl p-4 text-white bg-green-500 bg-opacity-5 hover:shadow-2xl hover:shadow-cyan-500" onClick={onClick}> 
      {image ? (
        <div className="flex flex-col justify-center items-center">
          <img
            src={image}
            alt={"image of " + name}
            className="w-32 h-32 rounded-full"
          />
          <h1 className="text-2xl font-bold mt-2">{name}</h1>
          <p className="text-sm mt-5">{'Status: '+ status}</p>
        </div>
      ) : residents ? (
        <div className="flex flex-col justify-evenly items-center">
          <h5 className="text-2xl text-center font-bold">{name}</h5>
          <p className="text-sm mt-10">{'Cantidad de residentes: '}
          <span className='text-white'>{residents}</span>
          </p>
          <p className="text-sm mt-6">{'TIpo de dimension: ' + type}</p>
        </div>
      ) : episodes ? (
        <div className="flex flex-col justify-evenly items-center">
        <h1 className="text-2xl text-center font-bold">{name}</h1>
        <p className="text-sm mt-10">{'Cantidad de capítulos: '}
        <span className='text-white'>{episodes}</span>
        </p>
      </div>
      ) : air_date ? (
        <div className="flex flex-col justify-evenly h-80 items-start">
        <h1 className="text-2xl text-center font-bold">
        {name}
        </h1>

        <p className="text-sm mt-3 text-start ">{"Se estreno:  " + air_date}</p>
        <p className="text-sm mt-3 ">{"Cantidad de personajes que aparecen en el episodio: " + characters}</p>
      </div>
      ) : null}
    </div>
  );
};
