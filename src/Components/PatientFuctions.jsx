import ModalEmergency from "../Components/ModalEmergency";
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
  <div className="text-center">
  <div className="my-4">
        <button
          className="px-4 py-3 bg-blue-500 text-white font-medium rounded-3xl text-lg"
          onClick={openModal}
        >
          Servicio De Urgencias
        </button>
      </div>
      <div className="my-4">
        <button
          className="px-4 py-3 bg-indigo-500 text-white font-medium rounded-3xl text-lg"
          onClick={openModalOdontologia}
        >
          Servicio De Odontología
        </button>
      </div>
      <div className="my-4">
        <button className="px-4 py-3 bg-rose-500 text-white font-medium rounded-3xl text-lg" onClick={SignOut}>
          Cerrar Sesión
        </button>
      </div>
      <ModalEmergency isOpen={isOpen} closeModal={closeModal} paciente={paciente} motivos_consulta={motivos_consulta} setMotivos_consulta={setMotivos_consulta} createUrgency={createUrgency}/>
      <ModalOdontologia
        isOpen={isOpenOdontologia}
        closeModal={closeModalOdontologia}
      />

  </div>
    </>
  );
}

export default PatientFuctions;
