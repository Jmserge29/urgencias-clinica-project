import React, { useState } from 'react'
import ModalDiagnostic from '../Components/Modals/Plataform/ModalDiagnostic'

function Test1() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
  return (
    <>Hi
    <button onClick={openModal} className='bg-blue-600 text-white rounded-lg font-semibold text-sm py-2 px-4'>Modal</button>
    <ModalDiagnostic closeModal={closeModal} isOpen={isOpen} />
    </>
  )
}

export default Test1