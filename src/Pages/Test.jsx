import SideBar from "../Components/Sidebar";
import PatientCard from "../Components/Card/Portal/PatientCard";
import React, { useState, useEffect } from "react";
import Isotope from "isotope-layout";
import axios from "axios";
import { QueueListIcon } from "@heroicons/react/24/solid";
import ModalEstructure from "../Components/Modals/Plataform/ModalEstructure";

export default function Test() {
  const [isotope, setIsotope] = useState(null);
  const [option, setOption] = useState(".emergency");
  const [emergenciasSeleccionadas, setEmergenciasSeleccionadas] = useState([]);
  const [data, setData] = useState([]); 
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
        <div className="medical-records text-center mx-32">
          {/* Aquí mapea los registros médicos */}
          <div className="record emergency">
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
            {altaConTratamiento.map((data, i) => {
              return <div key={i}>{data._id}</div>;
            })}
          </div>
          <div className="record discharged-appointment">
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
      <div onClick={() => openModal()} className="fixed bottom-8 hover:cursor-pointer right-12 shadow-lg text-rose-600 flex justify-center items-center h-20 w-20 rounded-full hover:scale-110 transition delay-150 duration-300 ease-in-out  ">
        <QueueListIcon className="h-20 p-3" />
      </div>
      <ModalEstructure closeModal={closeModal} isOpen={isOpen} emergenciasSeleccionadas={emergenciasSeleccionadas}/>
    </>
  );
}
