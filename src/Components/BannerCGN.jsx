import React from 'react'

function BannerCGN() {
  return (
    <div className='px-64 mt-12 py-5 justify-center text-center'>
      <div className='grid sm:grid-cols-5 grid-cols-1 mb-5'>
        <div className=" col-span-1 sm:col-span-2 flex justify-center items-center">
          <img className='py-2' src="https://www.clinicageneraldelnorte.com/wp-content/uploads/2019/12/logcgn_128.png" alt="Logo" />
        </div>
        <div className=" col-span-1 sm:col-span-3 font-medium text-stone-700 text-base flex  items-center text-justify"><p><span className=' font-bold text-rose-600'>La Organización Clínica General del Norte</span> dispone de todos los servicios de Baja, Mediana y Alta complejidad. Así mismo, un equipo de salud altamente y con experiencia en todas las especialidades, permitiendo realizar diagnósticos y tratamientos seguros y de excelente calidad. <br /><br />En la <span className=' font-bold text-rose-600'>Organización Clínica General del Norte</span> contamos con profesionales de alto nivel, especializados en las diferentes áreas de la salud, altamente capacitados y humanizados en la prestación de servicios.</p></div>
      </div>
    </div>
  )
}

export default BannerCGN