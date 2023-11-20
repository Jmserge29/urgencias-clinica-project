import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Pila from "../../../Estructures/Pila";
import Cola from "../../../Estructures/Cola";
import ArbolBinario from "../../../Estructures/ArbolBinario"
function ModalEstructure({ isOpen, closeModal, emergenciasSeleccionadas }) {
    const [estructure, setEstructure] = useState([])
    //Definiendo Estructuras
    const myPila = new Pila()
    const myCola = new Cola()
    const myArbol = new ArbolBinario()

    // Método para anadir elementos a la (PILA)
    const methodStackInsert = () => {
        // Se recorre el array de todas las emergencias y se almacena el ID de la emergenica en la PILA
        emergenciasSeleccionadas.map((emergencia) => {
            myPila.InsertarElemento(emergencia._id)
        })
        const array = myPila.ImprimirPila()
        setEstructure(array)
    }

    // Método para anadir elementos a la (COLA)
    const methodQueueInsert = () => {
        emergenciasSeleccionadas.map((emergencia) => {
            myCola.InsertarElemento(emergencia._id)
        })
        const array = myCola.ImprimirCola()
        setEstructure(array)
    }

    // Método para anadir elementos  (ARBOL)
    const methodArbolInsert = () => {
        myArbol.insert(4);
        myArbol.insert(2);
        myArbol.insert(6);
        myArbol.insert(1);
        myArbol.insert(3);
        myArbol.insert(5);
        myArbol.insert(7);
        myArbol.inorder();
        myArbol.preorder();
        myArbol.postorder();
    }

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
                    className="text-xl py-2 mb-4 text-center font-medium leading-6 text-gray-900"
                  >
                    ¿ Que tipo de estructura quieres aplicar ?
                  </Dialog.Title>
                  <div className="mt-2 my-8">
                    <span className=" font-medium text-center">Pacientes Seleccionados: ({emergenciasSeleccionadas.length})</span>
                    <div className="rounded-md mt-2 shadow-lg bg-slate-900 text-white w-full h-2/3 md:px-8 md:py-8">
                        <pre className="text-xs">
                        {emergenciasSeleccionadas? <>{JSON.stringify(emergenciasSeleccionadas,null,2)}</>:  "Cargando"}
                        </pre>
                    </div>
                  </div>
                  <div className="mt-2 my-8">
                    <div onClick={() => methodStackInsert()} className=" rounded-xl my-3 flex justify-center items-center bg-cyan-500 cursor-pointer py-2 px-4 h-20 text-base text-white font-semibold">
                        Pilas
                    </div>
                    <div onClick={() => methodQueueInsert()} className=" rounded-xl my-3 flex justify-center items-center bg-blue-500 cursor-pointer py-2 px-4 h-20 text-base text-white font-semibold">
                        Colas
                    </div>
                    <div onClick={()=> methodArbolInsert()} className=" rounded-xl my-3 flex justify-center items-center bg-indigo-500 cursor-pointer py-2 px-4 h-20 text-base text-white font-semibold">
                        Arbol Binario
                    </div>
                  </div>
                  <div className="mt-4 text-center space-x-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancelar
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Aplicar
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

export default ModalEstructure;
