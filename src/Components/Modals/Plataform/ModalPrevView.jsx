import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function ModalPrevView({closeModalV, isOpenV}) {
  return (
    <>
          <Transition appear show={isOpenV} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalV}>
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
                    className="text-xl py-2 mb-4 text-center font-medium leading-6 text-gray-900"
                  >
                    ¿ Que tipo de estructura quieres aplicar ?
                  </Dialog.Title>
                  <div className="mt-2 my-8 bg-slate-900">
                    <div className=" rounded-xl my-3 flex justify-center items-center bg-cyan-500 cursor-pointer py-2 px-4 h-20 text-base text-white font-semibold">
                        Pilas
                    </div>
                    <div className=" rounded-xl my-3 flex justify-center items-center bg-blue-500 cursor-pointer py-2 px-4 h-20 text-base text-white font-semibold">
                        Colas
                    </div>
                    <div className=" rounded-xl my-3 flex justify-center items-center bg-indigo-500 cursor-pointer py-2 px-4 h-20 text-base text-white font-semibold">
                        Arbol Binario
                    </div>
                  </div>
                  <div className="mt-4 text-center space-x-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModalV}
                    >
                      Finalizar Visualización
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalPrevView