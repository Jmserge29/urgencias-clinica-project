import SideBar from "../Components/Sidebar";
import PatientCard from "../Components/Card/Portal/PatientCard";
import React, { useState, useEffect } from "react";
import Isotope from "isotope-layout";
import axios from "axios";
import { QueueListIcon } from "@heroicons/react/24/solid";

export default function Test() {
  const [isotope, setIsotope] = useState(null);
  const [option, setOption] = useState(".emergency");
  const [emergenciasSeleccionadas, setEmergenciasSeleccionadas] = useState([]);
  const [data, setData] = useState([]); // Supongamos que recibes la data como un estado

  const getEmergenciesData = async () => {
    try {
      await axios
        .get(
          "https://urgencias-servidor-project.vercel.app/Emergency/getEmergencies"
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log("An error in the request");
    }
  };

  useEffect(() => {
    getEmergenciesData();
    filterRecords(".emergency");

    // const emergencyData = [
    //   {
    //     _id: "1",
    //     doctorAsignado: null,
    //     paciente: "paciente_1",
    //     medicamentosRecetados: [],
    //     motivos_consulta: "Gripa",
    //     tratamiento: "",
    //     clasificacion: "Sin atender",
    //     hora: "Mon Nov 13 2023 23:30:08 GMT-0500 (hora estándar de Colombia)",
    //     createdAt: "2023-11-14T04:30:08.932Z",
    //     updatedAt: "2023-11-14T04:30:08.932Z",
    //     __v: 0,
    //   },
    //   {
    //     _id: "2",
    //     doctorAsignado: null,
    //     paciente: "paciente_2",
    //     medicamentosRecetados: [],
    //     motivos_consulta: "Dolor de espalda",
    //     tratamiento: "",
    //     clasificacion: "Admitido a Urgencias",
    //     hora: "Mon Nov 13 2023 23:45:08 GMT-0500 (hora estándar de Colombia)",
    //     createdAt: "2023-11-14T04:45:08.932Z",
    //     updatedAt: "2023-11-14T04:45:08.932Z",
    //     __v: 0,
    //   },
    //   {
    //     _id: "3",
    //     doctorAsignado: null,
    //     paciente: "paciente_3",
    //     medicamentosRecetados: [],
    //     motivos_consulta: "Amildalitis",
    //     tratamiento: "",
    //     clasificacion: "Dado de Alta con Cita Prioritaria",
    //     hora: "Mon Nov 13 2023 23:45:08 GMT-0500 (hora estándar de Colombia)",
    //     createdAt: "2023-11-14T04:45:08.932Z",
    //     updatedAt: "2023-11-14T04:45:08.932Z",
    //     __v: 0,
    //   },
    //   {
    //     _id: "4",
    //     doctorAsignado: null,
    //     paciente: "paciente_4",
    //     medicamentosRecetados: [],
    //     motivos_consulta:
    //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nobis corrupti, totam sint qui error asperiores beatae perferendis veritatis. Dolorum optio ex, doloremque suscipit cum quas numquam aut facilis possimus.",
    //     tratamiento: "",
    //     clasificacion: "Admitido a Urgencias",
    //     hora: "Mon Nov 13 2023 23:45:08 GMT-0500 (hora estándar de Colombia)",
    //     createdAt: "2023-11-14T04:45:08.932Z",
    //     updatedAt: "2023-11-14T04:45:08.932Z",
    //     __v: 0,
    //   },
    //   {
    //     _id: "5",
    //     doctorAsignado: null,
    //     paciente: "paciente_5",
    //     medicamentosRecetados: [],
    //     motivos_consulta: "Carillas",
    //     tratamiento: "",
    //     clasificacion: "Dado de Alta con Cita Prioritaria",
    //     hora: "Mon Nov 13 2023 23:45:08 GMT-0500 (hora estándar de Colombia)",
    //     createdAt: "2023-11-14T04:45:08.932Z",
    //     updatedAt: "2023-11-14T04:45:08.932Z",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6",
    //     doctorAsignado: null,
    //     paciente: "paciente_6",
    //     medicamentosRecetados: [],
    //     motivos_consulta: "Inflamacion de costillas",
    //     tratamiento: "",
    //     clasificacion: "Dado de Alta con Tratamiento",
    //     hora: "Mon Nov 13 2023 23:45:08 GMT-0500 (hora estándar de Colombia)",
    //     createdAt: "2023-11-14T04:45:08.932Z",
    //     updatedAt: "2023-11-14T04:45:08.932Z",
    //     __v: 0,
    //   },

    //   // ... otros objetos de emergencia
    // ];
  }, []);

  // Filtrar la data en diferentes arrays según la clasificación
  const sinAtender = data.filter(
    (item) => item.clasificacion === "Sin atender"
  );
  const admitidoUrgencias = data.filter(
    (item) => item.clasificacion === "Admitido a Urgencias"
  );
  const altaConTratamiento = data.filter(
    (item) => item.clasificacion === "Dado de Alta con Tratamiento"
  );
  const altaConCitaPrioritaria = data.filter(
    (item) => item.clasificacion === "Dado de Alta con Cita Prioritaria"
  );

  // Manejar clic en una emergencia
  const handleEmergenciaClick = (emergencia) => {
    // Verificar si la emergencia ya está en las seleccionadas
    const emergenciaIndex = emergenciasSeleccionadas.findIndex(
      (selectedEmergencia) => selectedEmergencia._id === emergencia._id
    );

    if (emergenciaIndex !== -1) {
      // Si ya está, quítala del estado
      const nuevasEmergenciasSeleccionadas = [...emergenciasSeleccionadas];
      nuevasEmergenciasSeleccionadas.splice(emergenciaIndex, 1);
      setEmergenciasSeleccionadas(nuevasEmergenciasSeleccionadas);
    } else {
      // Si no está, agrégala al estado
      setEmergenciasSeleccionadas([...emergenciasSeleccionadas, emergencia]);
    }
  };
  console.log("Emergencias seleccionadas son: ", emergenciasSeleccionadas);

  useEffect(() => {
    // Inicializar Isotope después de que el componente se monta
    const iso = new Isotope(".medical-records", {
      itemSelector: ".record",
      layoutMode: "fitRows",
    });
    setIsotope(iso);

    // Limpiar Isotope al desmontar el componente
    return () => {
      iso.destroy();
      filterRecords(".emergency");
    };
  }, []);

  const filterRecords = (filter) => {
    setOption(filter);
    if (isotope) {
      isotope.arrange({ filter });
    }
  };

  const filters = [
    { label: "Emergencias sin atender", filter: ".emergency" },
    { label: "Admitidos a Urgencias", filter: ".admitted" },
    { label: "Dado de Alta con Tratamiento", filter: ".discharged-treatment" },
    {
      label: "Dado de Alta con Cita Prioritaria",
      filter: ".discharged-appointment",
    },
  ];
  return (
    <>
      <SideBar />
      <div className="lg:ml-44 mx-4 mt-16 sm:mr-12">
        {/* Header Section */}
        <h2 className="ml-8 my-4 text-5xl font-semibold text-center font-mono">
          {" "}
          Pacientes En Urgencias{" "}
        </h2>
        <hr className="border-2 border-rose-500 my-8" />
        <div className="my-5 sm:mx-24 mx-auto flex justify-between h-16  rounded-xl grid-cols-4 bg-blue-200 px-2 space-x-2">
          {filters.map((category, i) => {
            return (
              <div
                key={i}
                onClick={() => filterRecords(`${category.filter}`)}
                className={`${
                  option == category.filter
                    ? `bg-white font-semibold rounded-xl text-blue-700`
                    : `hover:rounded-xl font-medium hover:bg-blue-50 text-blue-700`
                } w-full my-2 py-4  flex justify-center items-center text-center cursor-pointer text-base `}
              >
                {category.label}
              </div>
            );
          })}
        </div>
        {/* <div className="mx-32 text-center ">
          <PatientCard />
        </div> */}

        <div className="medical-records text-center mx-32">
          {/* Aquí puedes mapear tus registros médicos */}
          <div className="record emergency">
            Emergencia sin atender ({sinAtender.length})
            {sinAtender.map((data, i) => {
              return (
                <div key={i}>
                  <PatientCard
                    data={data}
                    array={emergenciasSeleccionadas}
                    fuctionClick={handleEmergenciaClick}
                  />
                </div>
              );
            })}
          </div>
          <div className="record admitted">
            Admitido a Urgencias ({admitidoUrgencias.length})
            {data ? (
              <>
                {admitidoUrgencias.map((data, i) => {
                  return (
                    <div key={i}>
                      <PatientCard
                        data={data}
                        array={emergenciasSeleccionadas}
                        fuctionClick={handleEmergenciaClick}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              "Cargando"
            )}
          </div>
          <div className="record discharged-treatment">
            Dado de Alta con Tratamiento ({altaConTratamiento.length})
            {altaConTratamiento.map((data, i) => {
              return <div key={i}>{data._id}</div>;
            })}
          </div>
          <div className="record discharged-appointment">
            Dado de Alta con Cita Prioritaria ({altaConCitaPrioritaria.length})
            {altaConCitaPrioritaria.map((data, i) => {
              return (
                <div key={i}>
                  <PatientCard
                    data={data}
                    array={emergenciasSeleccionadas}
                    fuctionClick={handleEmergenciaClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="fixed bottom-2 right-2 text-rose-600 h-14 w-14 rounded-full ">
        <QueueListIcon />
      </div>
    </>
  );
}
