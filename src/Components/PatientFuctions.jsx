import ModalEmergency from "./Modals/Plataform/ModalEmergency";
import { useState } from "react";
import ModalOdontologia from "../Components/ModalOdontologia";


function PatientFuctions({paciente, motivos_consulta,setMotivos_consulta, createUrgency}) {
  const SignOut = () => {
    localStorage.removeItem('patient');
    window.location.href = './';
}

    let [isOpen, setIsOpen] = useState(false);
    let [isOpenOdontologia, setIsOpenOdontologia] = useState(false);
  
    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModalOdontologia() {
      setIsOpenOdontologia(false);
    }
  
    function openModalOdontologia() {
      setIsOpenOdontologia(true);
    }
  
  return (<>
  <div className="container mx-auto grid grid-cols-2 text-base sm:text-3xl font-semibold mt-32">
      <div className=" col-span-1 flex justify-center items-center rounded-lg h-32 m-4  bg-purple-100 hover:cursor-pointer hover:bg-purple-200 text-center text-indigo-500">Solicitar Una Emergencia</div>
      <div className=" col-span-1 flex justify-center items-center rounded-lg h-32 m-4  bg-green-100 hover:cursor-pointer hover:bg-green-200 text-emerald-500">Historial Clínico</div>
      <div className=" col-span-1 flex justify-center items-center rounded-lg h-32 m-4  bg-blue-100 hover:cursor-pointer hover:bg-blue-200 text-sky-500">Actualizar Datos</div>
      <div className=" col-span-1 text-center flex justify-center items-center rounded-lg h-32 m-4  bg-red-200 hover:cursor-pointer hover:bg-red-100 text-rose-500" onClick={() => openModal()}>Eliminar Cuenta / Darse de Baja</div>
    </div>
    </>
  );
}

export default PatientFuctions;
