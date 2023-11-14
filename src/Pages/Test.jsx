import SideBar from '../Components/Sidebar'
import PatientCard from '../Components/Card/Portal/PatientCard'
import React, { useState, useEffect } from 'react';
import Isotope from 'isotope-layout';


export default function Test() {
  const [isotope, setIsotope] = useState(null);
  const [option, setOption] = useState(".emergency")
  useEffect(() => {
    // Inicializar Isotope después de que el componente se monta
    const iso = new Isotope('.medical-records', {
      itemSelector: '.record',
      layoutMode: 'fitRows',
    });
    setIsotope(iso);

    // Limpiar Isotope al desmontar el componente
    return () => {
      iso.destroy();
    };
  }, []);

  const filterRecords = (filter) => {
    setOption(filter)
    if (isotope) {
      isotope.arrange({ filter });
    }
  };

  const filters = [
  { label: 'Emergencias sin atender', filter: '.emergency' },
  { label: 'Admitidos a Urgencias', filter: '.admitted' },
  { label: 'Dado de Alta con Tratamiento', filter: '.discharged-treatment' },
  { label: 'Dado de Alta con Cita Prioritaria', filter: '.discharged-appointment' },
]
  return (
    <>
        <SideBar/>
    <div className='lg:ml-44 mx-4 mt-16 sm:mr-12'>
      {/* Header Section */}
      <h2 className='ml-8 my-4 text-5xl font-semibold text-center font-mono'> Pacientes En Urgencias </h2>
      <hr className='border-2 border-rose-500 my-8' />
      <div className="my-5 sm:mx-24 mx-auto flex justify-between h-16  rounded-xl grid-cols-4 bg-blue-200 px-2 space-x-2">
        {filters.map((category, i) => {
          return(
          <div key={i} onClick={() => filterRecords(`${category.filter}`)} className={`${option == category.filter ? `bg-white font-semibold rounded-xl text-blue-700` : `hover:rounded-xl font-medium hover:bg-blue-50 text-blue-700` } w-full my-2 py-4  flex justify-center items-center text-center cursor-pointer text-base `}>
            {category.label}
          </div>
        )})}
      </div>
        <div className='mx-32 text-center '>
          <PatientCard/>
        </div>

        <div>
      <div className="medical-records">
        {/* Aquí puedes mapear tus registros médicos */}
        <div className="record emergency">Emergencia sin atender</div>
        <div className="record admitted">Admitido a Urgencias</div>
        <div className="record discharged-treatment">Dado de Alta con Tratamiento</div>
        <div className="record discharged-appointment">Dado de Alta con Cita Prioritaria</div>
      </div>
    </div>
    </div>


    </>
  )
}
