import React, { useEffect } from 'react'
import SideBar from '../Components/Sidebar'
import ProfileSection from '../Components/ProfileSection'
import ProfileInformation from '../Components/ProfileInformation'
import CardPatient from '../Components/CardPatient'
import axios from 'axios'

function Portal() {
  // Recupera el objeto de usuario del localStorage
  const usuarioJSON = localStorage.getItem('doctor');
  const doctor = JSON.parse(usuarioJSON);

  const getIfnormationUser = async() => {
    try {
      await axios
      .get(
        `https://urgencias-servidor-project.vercel.app/User/getUserById/${doctor._id}`
      )
      .then((res) => {
        console.log("Se encontro: ", res.data)
        const usuarioJSON = JSON.stringify(res.data.user);
          localStorage.setItem('doctor', usuarioJSON);
      })
      .catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log("error error")
    }
  }
  useEffect(async() => {
    getIfnormationUser()
  })
  return (<>
    <SideBar/>
    <div className='sm:ml-44 mt-16 sm:mr-12'>
      {/* Header Section */}
      <h2 className='ml-8 my-4 text-5xl font-semibold'>Panel Doctor 1</h2>
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