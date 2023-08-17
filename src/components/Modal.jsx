/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FiX } from "react-icons/fi"
export function ModalDetail({onClose, info}){
    return (
      <>
       <div className="fixed inset-0 z-10">
                  <div
                      className="fixed inset-0 w-full h-full bg-black opacity-40"
                      onClick={onClose}
                  ></div>
                  <div className="flex items-center min-h-screen px-4 py-8">
                      <div className="relative w-full max-w-lg p-4 mx-auto flex flex-col justify-evenly items-center border-2 border-green-500 rounded-xl text-white bg-green-500 bg-opacity-5 hover:shadow-2xl hover:shadow-cyan-500">
                          <div className="mt-3 sm:flex">
                            <FiX className="w-5 h-5 text-green-500" />
                              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                  <img src={info.image} alt={"image of " + info.name}  />
                                  <h1 className="mt-2 text-lg leading-relaxed ">
                                  {info.name}
                                  </h1>
                                  <p>{info.status}</p>
                                  <p>{info.species}</p>
                                  <p>{info.gender}</p>
                                  <p>{info.origen}</p>                           
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </>
    )
  }
