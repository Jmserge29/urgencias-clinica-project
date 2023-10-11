import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState } from "react";

function ModalEmergency({ isOpen, closeModal, paciente, motivos_consulta,setMotivos_consulta, createUrgency }) {
  const [idUser, setIdUser] = useState(paciente._id)
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
                    Agregar Emergencia
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 py-4">
                      Describa sus sintomas de manera detallada y consiza. La información será de vital importancia para determinar el grado de complejidad y de atención para el médico en cuestión.
                    </p>
                  </div>
                  <div>
                    <input disabled
                      type="text"
                      value={idUser}
                      required
                      className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6"
                    />
                  </div>
                  <div className="my-2">
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" className="sr-only">
                          Sintomas
                        </label>
                        <textarea
                          value={motivos_consulta}
                          onChange={(e) => setMotivos_consulta(e.target.value)}
                          rows="4"
                          className="w-full px-0 py-2 focus:outline-none text-sm text-gray-900 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                          placeholder="Dolor de cabeza, malestar estomacal..."
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={createUrgency}
                    >
                      Enviar Emergencia
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

export default ModalEmergency;
