/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FiX } from "react-icons/fi";
export function ModalDetail({ onClose, info, status }) {
  return (
    <>
      <div className="fixed inset-0 z-10">
        <div className="fixed inset-0 w-full h-full bg-black opacity-50"></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg h-full p-4 mx-auto flex flex-col justify-evenly items-center border-2 border-green-500 rounded-xl text-white bg-neutral-900 bg-opacity-90 hover:shadow-2xl hover:shadow-cyan-500">
            {status === "Characters" ? (
              <div className="mt-3 flex flex-col justify-center items-center w-full">
                <div className="flex w-full items-end justify-end ">
                  <FiX
                    size={25}
                    className="self-end text-green-500 mr-2 -mt-3"
                    onClick={onClose}
                  />
                </div>
                <div className="flex items-center justify-start w-full h-42 text-white -sm:w-72 ">
                  <img
                    className=" h-52 w-52 mr-4 ml-4 rounded-full -sm:h-36"
                    src={info.image}
                    alt=""
                  />
                  <div className="ltr:ml-3 rtl:mr-3 mr-3">
                    <h1 className="text-3xl font-medium text-slate-300 group-hover:text-white">
                      {info.name}
                    </h1>
                  </div>
                </div>
                <div className=" self-start mt-3 px-10">
                  <p className="text-xl font-medium text-neutral-400 group-hover:text-slate-300">
                    {"Género: " + info.gender}
                  </p>
                  <p className="text-xl font-medium text-neutral-400 group-hover:text-slate-300">
                    {"Status: " + info.status}
                  </p>
                  <p className="text-xl font-medium text-neutral-400 group-hover:text-slate-300">
                    {"Especie: " + info.species}
                  </p>

                  <p className="text-xl font-medium text-neutral-400 group-hover:text-slate-300">
                    {"Origen: " + info.origen}
                  </p>
                </div>
              </div>
            ) : status === "Locations" ? (
              <div className="mt-3 flex flex-col justify-center items-center w-full ">
                <div className="flex w-full items-end justify-end ">
                  <FiX
                    size={25}
                    className="self-end text-green-500 mr-3 -mt-3"
                    onClick={onClose}
                  />
                </div>
                <div className="flex items-center justify-start w-full h-42 text-white">
                  <div className="ltr:ml-3 rtl:mr-3 mr-3">
                    <h1 className="text-3xl font-medium text-slate-300 group-hover:text-white">
                      {info.name}
                    </h1>
                    <h4>{"Dimensión: " + info.dimension}</h4>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start w-full self-start mt-3">
                  <p className="text-xl font-medium text-neutral-400 group-hover:text-slate-300">
                    {"Tipo: " + info.type}
                  </p>

                  {info.residents.length > 0 ? (
                    <p className="text-xl font-medium text-neutral-400 group-hover:text-slate-300">
                      {"Cantidad de residentes: " + info.residents.length}
                    </p>
                  ) : (
                    <p className="text-xl font-medium text-neutral-400 group-hover:text-slate-300">
                      Cantidad de residentes: Sin información
                    </p>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
