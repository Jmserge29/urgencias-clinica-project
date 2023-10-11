import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

function ModalClasification({ closeModal, isOpen, setClasification, setDoctorId, changeStatus }) {
    const [doctores, setDoctores] = useState([])
    axios.get("https://urgencias-servidor-project.vercel.app/Doctor/getAllDoctors").then((res) => {
        setDoctores(res.data.doctores)
    }).catch((err) => {{
        console.log(err)
    }})
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Clasificar Urgencia
                  </Dialog.Title>
                  <div className="my-8 ml-3">
                    <button onClick={(e) => setClasification("A")} className=" shadow-2xl font-medium mx-4 rounded-2xl text-rose-700 bg-rose-300 hover:bg-rose-200 px-4 py-2">
                      A
                    </button>
                    <button onClick={(e) => setClasification("B1")} className=" shadow-2xl font-medium mx-4 rounded-2xl text-amber-700 bg-amber-300 hover:bg-amber-200 px-3 py-2">
                      B1
                    </button>
                    <button onClick={(e) => setClasification("B2")} className=" shadow-2xl font-medium mx-4 rounded-2xl text-indigo-700 bg-indigo-300 hover:bg-indigo-200 px-3 py-2">
                      B2
                    </button>
                    <button onClick={(e) => setClasification("C1")} className=" shadow-2xl font-medium mx-4 rounded-2xl text-teal-700 bg-teal-300 hover:bg-teal-200 px-3 py-2">
                      C1
                    </button>
                    <button onClick={(e) => setClasification("C2")} className=" shadow-2xl font-medium mx-4 rounded-2xl text-gray-700 bg-gray-300 hover:bg-gray-200 px-3 py-2">
                      C2
                    </button>
                  </div>
                  <div className="text-lg font-medium leading-6 text-gray-900">
                    Designar Doctor
                  </div>
                  <div className="mt-2">
                    <select
                      className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
                      onChange={(e) => setDoctorId(e.target.value)}
                      required
                    >
                        {doctores.map((data) => {
                            return(
                                <option value={data._id}>{data.nombre} {data.apellido}</option>
                            )
                        })}
                    </select>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                      onClick={changeStatus}
                    >
                      Asignar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ModalClasification;
