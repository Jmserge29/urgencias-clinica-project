import React from 'react'
import SideBar from '../Components/Sidebar'
import ProfileSection from '../Components/ProfileSection'
import ProfileInformation from '../Components/ProfileInformation'
import CardPatient from '../Components/CardPatient'
function Portal() {
  // Recupera el objeto de usuario del localStorage
  const usuarioJSON = localStorage.getItem('doctor');
  const doctor = JSON.parse(usuarioJSON);
  return (<>
    <SideBar/>
    <div className='sm:ml-44 mt-16 sm:mr-12'>
      {/* Header Section */}
      <h2 className='ml-8 my-4 text-5xl font-semibold'>Panel Doctor </h2>
      <hr className='border-2 border-rose-500' />
      <div className='mt-5 grid grid-cols-6'>
        <ProfileSection doctor={doctor}/>
        <ProfileInformation doctor={doctor}/>
        
      </div>
      <h2 className='ml-8 mt-12 text-xl font-semibold'>Emergencias Asignadas</h2>
        <div className='grid grid-cols-4 px-2  mb-32'>
          {doctor.emergencias_asignadas.map((data, i) => {
            return(
              <div key={data._id}>
                <CardPatient urgencia={data}/>
              </div>
            )
          })}
        </div>
    </div>
    </>
  )
}

export default Portal