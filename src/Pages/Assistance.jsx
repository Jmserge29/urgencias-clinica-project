import { useEffect, useState } from "react";
import SideBarAssitance from "../Components/SideBarAssitance";
import ModalClasification from "../Components/ModalClasification";
import axios from "axios";

function Assistance() {
  const [data, setData] = useState([]);
  const [lisPacientes, setLisPacientes] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  const [clasification, setClasification] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [emergencyId, setEmergencyId] = useState("");

  const changeStatus = async () => {
    try {
      console.log(emergencyId, doctorId, clasification);
      await axios
        .put(
          `https://urgencias-servidor-project.vercel.app/Emergency/updateEmergencyClasification/${emergencyId}`,
          {
            doctorId: doctorId,
            clasificacion: clasification,
          }
        )
        .then((res) => {
          // console.log("request sended succesly", res);
          getData();
          listEmergency();
        })
        .catch((err) => {
          // console.log(err);
        });
    } catch (error) {
      console.log("An error", error);
    }
  };
  const designed = (id) => {
    setEmergencyId(id);
    openModal();
  };
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const listEmergency = async () => {
    try {
      await axios
        .get(
          "https://urgencias-servidor-project.vercel.app/Emergency/getEmergencies"
        )
        .then((res) => {
          // console.log("request sended succesly", res);
          setLisPacientes(res.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    } catch (error) {
      console.log("Error in the request", error);
    }
  };

  const getData = async () => {
    try {
      await axios
        .get(
          "https://urgencias-servidor-project.vercel.app/Emergency/getAllUnattendedEmergencies"
        )
        .then((res) => {
          // console.log("request sended succesly", res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      Promise.all(
        data.map(async (info) => {
          await axios
            .get(
              `https://urgencias-servidor-project.vercel.app/Patient/getPatientById/${info.paciente}`
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              // console.log(err);
            });
        })
      );
    } catch (error) {
      console.log("Error in the request", error);
    }
  };

  useEffect(() => {
    getData();
    listEmergency();
  }, []);
  console.log("List Emergency", lisPacientes);

  return (
    <>
      <SideBarAssitance />
      <div className="sm:ml-44 sm:mt-12 sm:mr-32">
        <h2 className="font-bold text-4xl mb-8">Asistencia</h2>
        <hr className="border-2 border-rose-500" />
        <h3 className="text-4xl mt-12 font-semibold mb-8 text-stone-900">
          Tabla de Emergencias Sin Atender
        </h3>
        <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Motivos
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  Funcion
                </th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((dato, i) => {
                return (
                  <tr
                    key={dato._id}
                    className="bg-white border-b  hover:bg-teal-100"
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://labiode.com/wp-content/uploads/2022/01/Beny-Jr-trapero-espanol.jpg"
                        alt="Jese image"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Id paciente: {dato.paciente}
                        </div>
                        <div className="font-normal text-gray-500">
                          {dato.hora}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-base text-justify">
                      {dato.motivos_consulta}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center font-medium">
                        <div className="h-2.5 w-2.5  rounded-full bg-green-500 mr-2"></div>{" "}
                        {dato.estado}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600  hover:underline"
                        onClick={() => designed(dato._id)}
                      >
                        Clasificar
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h3 className="text-4xl mt-12 font-semibold mb-8 text-stone-900">
          Listado de Emergencias
        </h3>
        <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Motivos
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  Clasificación
                </th>
              </tr>
            </thead>
            <tbody className="">
              {lisPacientes.map((dato, i) => {
                return (
                  <tr
                    key={dato._id}
                    className="bg-white border-b  hover:bg-teal-100"
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://labiode.com/wp-content/uploads/2022/01/Beny-Jr-trapero-espanol.jpg"
                        alt="Jese image"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Id relacionado del paciente: {dato.paciente}
                        </div>
                        <div className="font-normal text-gray-500">
                          {dato.hora}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-base text-justify">
                      {dato.motivos_consulta}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center font-medium">
                        <div className="h-2.5 w-2.5  rounded-full bg-green-500 mr-2"></div>{" "}
                        {dato.estado}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center font-medium">
                        <button className=" rounded-2xl px-3 py-2 bg-indigo-500 text-white">
                          {dato.clasificacion}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ModalClasification
        isOpen={isOpen}
        setClasification={setClasification}
        setDoctorId={setDoctorId}
        closeModal={closeModal}
        changeStatus={changeStatus}
      />
    </>
  );
}

export default Assistance;
