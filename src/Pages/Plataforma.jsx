import { useState } from "react";
import ModalDelete from "../Components/Modals/Plataform/ModalDelete";
function Plataforma() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
    <nav className="container flex py-6 mx-auto">
      <div className=" flex-grow">
        <img src="https://www.clinicageneraldelnorte.com/wp-content/uploads/2019/12/favicon114x114.png" alt="ClinicaGeneralDelNorte" width={80}/>
      </div>
      <div className="justify-end mr-8">
        <div className="rounded-full bg-cover h-16 w-16" style={{backgroundImage: `url("https://i.scdn.co/image/ab6761610000e5ebc8f6d4d6eb8e7dd5206bd5f4")`}}></div>
      </div>
    </nav>

    <div className="container mx-auto grid grid-cols-2 text-base sm:text-3xl font-semibold mt-32">
      <div className=" col-span-1 flex justify-center items-center rounded-lg h-32 m-4  bg-purple-100 hover:cursor-pointer hover:bg-purple-200 text-center text-indigo-500">Solicitar Una Emergencia</div>
      <div className=" col-span-1 flex justify-center items-center rounded-lg h-32 m-4  bg-green-100 hover:cursor-pointer hover:bg-green-200 text-emerald-500">Historial Clínico</div>
      <div className=" col-span-1 flex justify-center items-center rounded-lg h-32 m-4  bg-blue-100 hover:cursor-pointer hover:bg-blue-200 text-sky-500">Actualizar Datos</div>
      <div className=" col-span-1 text-center flex justify-center items-center rounded-lg h-32 m-4  bg-red-200 hover:cursor-pointer hover:bg-red-100 text-rose-500" onClick={() => openModal()}>Eliminar Cuenta / Darse de Baja</div>
    </div>

    <button className="bg-stone-800 text-amber-400 text-lg font-semibold rounded-full fixed p-4 ml-4">Dev</button>
    <ModalDelete
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  )
}

export default Plataforma