import PatientFuctions from "../Components/PatientFuctions";
import PatientCard from "../Components/PatientCard";
import axios from "axios";
import { useState } from "react";

function PatientPortal() {
  const usuarioJSON = localStorage.getItem('patient');
  const paciente = JSON.parse(usuarioJSON);
  const [motivos_consulta, setMotivos_consulta] = useState([])
  const actualizarUSer = async() => {
    axios.get(`https://urgencias-servidor-project.vercel.app/Patient/getPatientById/${paciente._id}`).then((res) => {
      console.log("request sended succesly", res.data);
      const usuarioJSON = JSON.stringify(res.data.paciente);
      localStorage.setItem('patient', usuarioJSON);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);  
    });
  }
  const createUrgency = async() => {
    try {
      axios
          .post("https://urgencias-servidor-project.vercel.app/Emergency/createEmergency", {
            pacienteId: paciente._id,
            motivos_consulta,
          })
          .then((res) => {
            console.log("request sended succesly", res.data.emergencia);
            actualizarUSer()
          })
          .catch((err) => {
            console.log(err);  
          });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className=" block h-500-px mt-72">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80")`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <PatientCard paciente={paciente}/>
            <div className="mt-10 py-10 border-t border-blueGray-200">
              {paciente.emergencia_asignada == null ? "" : <div className="rounded-xl bg-slate-800 shadow-lg h-screen w-3/2 mx-12">
                <div className="text-white  text-center">
                  <div className="text-white font-medium text-lg pt-4">
                    ID de Urgencia: 5ca1abb6ce037511f000628e
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
                      B1
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
                            Backend Developer
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Tratamiento
                          </dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            margotfoster@example.com
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
                                      Loratadina
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
              </div>}
              
              <PatientFuctions paciente={paciente} motivos_consulta={motivos_consulta}
setMotivos_consulta={setMotivos_consulta} createUrgency={createUrgency} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PatientPortal;
