import axios from 'axios'
import { useState } from 'react'
import ElementCardUser from './ElementCardUser'

function CardPatient({urgencia}) {
  const [urgency, setUrgency] = useState([])
  const loadEmergency = async() => {
    await axios.get(`https://urgencias-servidor-project.vercel.app/Emergency/getEmergencyById/${urgencia}`).then((res) => {
      setUrgency(res.data)
    })
  }
  loadEmergency()
  return (
    <>
          <article className="rounded-xl mt-8 bg-white p-3 h-96 mx-4 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img className='h-72 w-full bg-cover' src="https://img.freepik.com/fotos-premium/icono-interfaz-usuario-premium-representacion-3d-sobre-fondo-aislado_150525-2529.jpg?w=2000" alt="Background User Photo" />
          
        </div>
        <ElementCardUser paciente={urgency.paciente}/>
        <div>
            <span className=' mt-4 flex justify-center items-center rounded-2xl bg-indigo-500 px-3 py-2 font-semibold text-lg text-white'>{urgency.clasificacion}</span>
        </div>

      </a>
    </article>
    </>
  )
}

export default CardPatient