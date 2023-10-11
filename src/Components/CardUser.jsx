import React from 'react'

function CardUser({paciente}) {
  return (
    
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <div className="mt-8 flex flex-col items-center pb-10 px-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg bg-cover" src={paciente.picture} alt="Paciente"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">{paciente.nombre} {paciente.apellido}</h5>
        <button className='my-2 bg-indigo-500 px-4 py-2 text-white font-medium uppercase rounded-2xl'>{paciente.eps}</button>
        <span className="mt-4 text-base text-white font-semibold bg-stone-600 px-3 py-2 rounded-xl">{paciente.edad} Años</span>
        <span className="mt-4 text-sm text-stone-700 font-semibold ">Emergencia asignada : {paciente.emergencia_asignada}</span>
    </div>
</div>

  )
}

export default CardUser