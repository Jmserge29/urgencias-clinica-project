import React, { useState } from 'react'

function EmergencyCard({emergency}) {
    const [urgency, setUrgency] = useState([])
    const loadEmergency = async() => {
      await axios.get(`https://urgencias-servidor-project.vercel.app/Emergency/getEmergencyById/${emergency}`).then((res) => {
        setUrgency(res.data)
      })
    }
    loadEmergency()
  return (
    <>
    <div className="rounded-xl bg-slate-800 shadow-lg h-screen w-3/2 mx-12">
                <div className="text-white  text-center">
                  <div className="text-white font-medium text-lg pt-4">
                    ID de Urgencia: {urgency._id}
                  </div>
                  <div className="text-white font-medium text-lg">
                    Fecha: Octubre 10 del 2023 8:30 AM
                  </div>
                  <div className="text-white font-medium py-2">
                    Estado:{" "}
                    <button className="mx-4 bg-white rounded-2xl text-black px-4 py-2">
                      Pendiente
                    </button>
                  </div>
                  <div className="text-white font-medium py-2 mb-6">
                    Clasificación:{" "}
                    <button className="mx-4 bg-indigo-500 rounded-2xl px-4 py-2">
                      {urgency.clasificacion}
                    </button>
                  </div>
                </div>
                <div className="h-3/2 bg-white rounded-2xl px-24 py-6 mx-12">
                  <div>
                    <div className="px-4 sm:px-0">
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Información de Urgencia
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        La información presentada es presentada por un médico especializado luego de realizar la consulta.
                      </p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                      <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Doctor Asignado
                          </dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Margot Foster
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Recomendaciones
                          </dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut atque ratione id, suscipit ipsam! Cumque, inventore! Placeat corrupti sit eligendi unde nostrum veniam? Dolores corporis nisi excepturi amet illo!
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Tratamiento
                          </dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi enim velit dolorem consequatur, doloremque deserunt a dolorum asperiores eveniet aut quo quaerat, repudiandae eum assumenda porro reprehenderit, qui aliquid.
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Sintomas
                          </dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt cillum culpa consequat.
                            Excepteur qui ipsum aliquip consequat sint. Sit id
                            mollit nulla mollit nostrud in ea officia proident.
                            Irure nostrud pariatur mollit ad adipisicing
                            reprehenderit deserunt qui eu.
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Medicamentos
                          </dt>
                          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul
                              role="list"
                              className="divide-y divide-gray-100 rounded-md border border-gray-200"
                            >
                              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                <div className="flex w-0 flex-1 items-center">
                                  <svg
                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                    />
                                  </svg>
                                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">
                                      Acetaminofen
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default EmergencyCard