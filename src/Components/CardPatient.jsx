import axios from 'axios'
import { useState } from 'react'
// import ElementCardUser from './ElementCardUser'
import ModalDiagnostic from './Modals/Plataform/ModalDiagnostic'

function CardPatient({urgencia}) {
  const [urgency, setUrgency] = useState([])
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const loadEmergency = async() => {
    await axios.get(`https://urgencias-servidor-project.vercel.app/Emergency/getEmergencyById/${urgencia}`).then((res) => {
      setUrgency(res.data)
    })
  }
  const[user, setUser] = useState([])
  const loadDataUser = async() => {
      await axios.get(`https://urgencias-servidor-project.vercel.app/User/getUserById/${paciente}`).then((res) => {
        setUser(res.data.usuario)
      })
  }
  loadDataUser()
  loadEmergency()
  return (
    <>
    <article onClick={openModal} className="rounded-xl mt-16 bg-white p-3 h-96 mx-4 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img className=' h-64 w-full bg-cover' src="https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40" alt="Background User Photo" />
          
        </div>
        <div className="flex my-3 justify-center items-center text-lg font-semibold font-mono">
          {user.nombre} {user.apellido} :)
        </div>
        <div>
            <span className=' mt-4 flex justify-center items-center rounded-2xl bg-indigo-500 px-3 py-2 font-semibold text-lg text-white'>{urgency.clasificacion}</span>
        </div>

      </a>
    </article>
    <ModalDiagnostic isOpen={isOpen} closeModal={closeModal}/>
    </>
  )
}

export default CardPatient