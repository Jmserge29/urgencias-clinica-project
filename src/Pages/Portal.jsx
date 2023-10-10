import React from 'react'
import SideBar from '../Components/Sidebar'
import ProfileSection from '../Components/ProfileSection'
import ProfileInformation from '../Components/ProfileInformation'
import CardPatient from '../Components/CardPatient'
function Portal() {
  return (<>
    <SideBar/>
    <div className='sm:ml-44 mt-16 sm:mr-12'>
      {/* Header Section */}
      <h2 className='ml-8 my-4 text-5xl font-semibold'>Panel Doctor </h2>
      <hr className='border-2 border-rose-500' />
      <div className='mt-5 grid grid-cols-6'>
        <ProfileSection/>
        <ProfileInformation/>
        
      </div>
      <h2 className='ml-8 mt-12 text-xl font-semibold'>Emergencias Asignadas</h2>
        <div className='grid grid-cols-4 px-2  mb-32'>
          <CardPatient/>
          <CardPatient/>

        </div>
    </div>
    </>
  )
}

export default Portal