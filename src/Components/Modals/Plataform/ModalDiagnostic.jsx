import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition, RadioGroup, Listbox } from "@headlessui/react";
import {  ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from "axios";

const plans = [
  {
    name: "Admitir",
    ram: "El paciente será remitido directamente a los servicios de urgencias por su grado de complejidad",
  },
  {
    name: "Dar de Alta con Tratamiento",
    ram: "El paciente será dado de alta con su respecto tratamiento luego de una previa revisión",
  },
  {
    name: "Dar de Alta con Cita Prioritaria",
    ram: "El paciente será dado de alta con cita prioritaria ya que su motivo de consulta no supone una urgencia",
  },
];

function ModalDiagnostic({ isOpen, closeModal, user, urgency }) {
  const [selected, setSelected] = useState(plans[0]);
  const [listMedicines, setListMedicines] = useState([])
  const [apiMedicines, setapiMedicines] = useState([])
  

  const dataMedicines = async() => {
    try {
      await axios.get("https://urgencias-servidor-project.vercel.app/Medicine/getMedicines").then((res) => {
        console.log(res.data)
        setapiMedicines(res.data)
      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
      console.log("Error de peticion")
    }
  }

  const addMedicine = (medicine) => {
    console.log(medicine)
    const medicineIndex = listMedicines.findIndex(
      (selectedMedicine) => selectedMedicine._id === medicine._id
    );

    if (medicineIndex !== -1) {
      // Si ya está, quítala del estado
      const nuevasMedicinasSeleccionadas = [...listMedicines];
      nuevasMedicinasSeleccionadas.splice(medicineIndex, 1);
      setListMedicines(nuevasMedicinasSeleccionadas);
    } else {
      // Si no está, agrégala al estado
      setListMedicines([...listMedicines, medicine]);
    }
  console.log("Emergencias seleccionadas son: ", listMedicines);
  }

  useEffect(() => {
    dataMedicines()
  }, [])

  return (
    <>
      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 mx-36" onClose={closeModal}>
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
                <Dialog.Panel className="w-1/2 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <h4 className=" font-bold text-3xl text-gray-800 mb-5">
                      Módulo de atencion Paciente
                    </h4>
                    <hr className=" border-2 border-gray-900" />
                    {/* Information User */}
                    <div className="grid grid-cols-5 my-3">
                      <div className=" col-span-3 grid grid-cols-3">
                        <div className=" col-span-1 flex items-center justify-center text-center">
                          <img
                            className="h-36 w-36 bg-cover rounded-full bg-slate-600"
                            src="https://primicia.com.ve/wp-content/uploads/2022/07/Anuel-640x524.jpeg"
                            alt="User"
                          />
                        </div>
                        <div className=" col-span-2 my-8 ml-4">
                          <h2 className="mb-3 font-bold text-2xl font-mono">
                            {user.nombre} {user.apellido}
                          </h2>
                          El paciente identificado con el número de cédula de ciudadanía {user.identificacion}, registrado en la EPS {user.eps}, con número de contacto {user.telefono} se encuentra en sala de urgencias presentando los siguientes sintomas: 
                        </div>
                        <div className=" col-span-5">
                          <h2 className=" text-center mb-3 font-bold text-lg font-mono">
                            Motivos de consulta
                          </h2>
                          <p className=" text-justify">
                            {urgency.motivos_consulta}
                          </p>
                        </div>
                      </div>
                      <div className=" col-span-2">
                        <div className=" rounded-lg shadow-sm bg-rose-400/90 py-5 mx-4">
                          <h4 className="text-lg font-semibold text-white flex justify-center">
                            Historial Clínico
                          </h4>
                            {user.historialMedico.map((data, i) => {
                              return(
                                <div key={i} className="bg-white h-20 rounded-xl mx-8 my-4 px-2">
                                  Historial Clinico
                                </div>
                              )
                            })}
                        </div>
                      </div>
                    </div>
                    {/* Clasification User */}
                    <div className="">
                      <h6 className=" text-center text-base font-medium mt-4 text-gray-800 ">
                        Determine la clasificación de la Urgencia :
                      </h6>
                      <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">
                          Server size
                        </RadioGroup.Label>
                        <div className="space-y-2 grid grid-cols-3 space-x-4">
                          {plans.map((plan, i) => (
                            <RadioGroup.Option
                              key={i}
                              value={plan}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? " col-span-1 ring-2 ring-white/60 ring-offset-2 ring-offset-rose-300"
                                    : ""
                                }
                  ${checked ? "bg-rose-600/90 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-3 py-2 shadow-md focus:outline-none`
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium  ${
                                            checked
                                              ? "text-white"
                                              : "text-gray-900"
                                          }`}
                                        >
                                          {plan.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                          as="span"
                                          className={`inline ${
                                            checked
                                              ? "text-sky-100"
                                              : "text-gray-500"
                                          }`}
                                        >
                                          <span className="mt-2">
                                            {plan.ram}
                                          </span>
                                        </RadioGroup.Description>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-white">
                                        <CheckIcon className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    {/* Method Tratamiento */}
                    <div className="mt-8 mx-12">
                      {selected == plans[1] ? (
                        <div>
                          <label className="text-base mt-6 font-medium">
                            Medicamentos *
                          </label>
                          <div className=" container mx-auto mb-5 grid grid-cols-5">
                            {apiMedicines.map((data, i) => {
                              return(
                                <div key={i} className={`rounded-lg my-2 cursor-pointer mx-2 py-2 px-3 shadow-lg ${listMedicines.find((e) => e._id === data._id) ? "bg-blue-400 text-white":""}`} onClick={() => addMedicine(data)}>
                                  <h4 className=" font-semibold text-lg">{data.nombre}</h4>
                                  <span className={` text-sm text-gray-400 ${listMedicines.find((e) => e._id === data._id) ? "text-white/80":""}`}>{data.categoria}</span>
                                </div>
                              )
                            })}
                          </div>

                          <label className="text-base mt-8 font-medium">
                            Tratamiento *
                          </label>
                          <textarea
                            rows="4"
                            className=" flex justify-center px-4 items-center w-full mt-3 py-2 rounded-lg text-sm"
                            placeholder="Recomendaciones y tratamiento para el paciente"
                            required
                          ></textarea>

                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="mt-4 text-center space-x-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-lg font-medium text-stone-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancelar
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-lg font-medium text-stone-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    >
                      Diagnosticar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ModalDiagnostic;
