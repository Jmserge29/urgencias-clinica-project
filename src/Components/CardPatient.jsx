import axios from 'axios'
import { useEffect, useState } from 'react'
import ElementCardUser from './ElementCardUser'
import ModalDiagnostic from './Modals/Plataform/ModalDiagnostic'

function CardPatient({urgencia}) {
  const [urgency, setUrgency] = useState([])
  let [isOpen, setIsOpen] = useState(false);
  const [userInformation, setuserInformation] = useState([])

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const loadEmergency = async() => {
    await axios.get(`https://urgencias-servidor-project.vercel.app/Emergency/getEmergencyById/${urgencia}`).then((res) => {
      setUrgency(res.data)
    }).catch((err) => {
      console.log("err here")
      console.log(err)
    })
  }
  useEffect(async() => {
    await loadEmergency()
  }, [])
  return (
    <>
    <article onClick={openModal} className="rounded-xl mt-16 bg-white p-3 h-96 mx-4 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img className=' h-64 w-full bg-cover' src="https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40" alt="Background User Photo" />
          
        </div>{urgency ? <ElementCardUser setuserInformation={setuserInformation} paciente={urgency.paciente}/> : "Loading"}
    
        <div>
            <span className=' mt-4 flex justify-center items-center rounded-2xl bg-indigo-500 px-3 py-2 font-semibold text-lg text-white'>{urgency.clasificacion}</span>
        </div>

      </a>
    </article>
    {/* <ModalDiagnostic urgency={urgency} user={userInformation} isOpen={isOpen} closeModal={closeModal}/> */}
    </>
  )
}

export default CardPatient