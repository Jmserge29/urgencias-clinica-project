import ModalEmergency from "./Modals/Plataform/ModalEmergency";
import { useState } from "react";
import ModalDelete from "./Modals/Plataform/ModalDelete";


function PatientFuctions({paciente, motivos_consulta,setMotivos_consulta, createUrgency}) {
  // Función para terminar la sesión del usuario
  const SignOut = () => {
    localStorage.removeItem('patient');
    window.location.href = './';
}
  // variables booleanas de cerrar y abrir modales
    let [isOpen, setIsOpen] = useState(false);
    let [isOpenUpdate, setIsOpenUpdate] = useState(false);
    let [isOpenHistoryClinic, setIsOpenHistoryClinic] = useState(false);
    let [isOpenDeleteAccount, setIsOpenDeleteAccount] = useState(false);

    // Funciones correspondioentes a cerrar y abrir modales
    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }

    function closeUpdate() {
      setIsOpenUpdate(false);
    }

    function openUpdate() {
      setIsOpenUpdate(true);
    }

    function closeHistoryClinic() {
      setIsOpenHistoryClinic(false);
    }

    function openHistoryClinic() {
      setIsOpenHistoryClinic(true);
    }

    function closeDeleteAccount() {
      setIsOpenDeleteAccount(false);
    }

    function openDeleteAccount() {
      setIsOpenDeleteAccount(true);
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
          className="px-4 py-3 bg-pink-500 text-white font-medium rounded-3xl text-lg"
          onClick={openHistoryClinic}
        >
          Historial Clínico
        </button>
      </div>
      <div className="my-4">
        <button
          className="px-4 py-3 bg-teal-500 text-white font-medium rounded-3xl text-lg"
          onClick={openUpdate}
        >
          Actualizar Datos
        </button>
      </div>
      <div className="my-4">
        <button
          className="px-4 py-3 bg-stone-600 text-white font-medium rounded-3xl text-lg"
          onClick={openDeleteAccount}
        >
          Eliminar Cuenta
        </button>
      </div>
      <div className="my-4">
        <button className="px-4 py-3 bg-rose-500 text-white font-medium rounded-3xl text-lg" onClick={SignOut}>
          Cerrar Sesión
        </button>
      </div>
      {/* Modal Emergencias */}
      <ModalEmergency isOpen={isOpen} closeModal={closeModal} paciente={paciente} motivos_consulta={motivos_consulta} setMotivos_consulta={setMotivos_consulta} createUrgency={createUrgency}/>
      {/* Modal Eliminar Cuenta */}
      <ModalDelete
        isOpen={openDeleteAccount}
        closeModal={closeDeleteAccount}
      />

  </div>
    </>
  );
}

export default PatientFuctions;
