import React from "react";

function PatientCard({paciente}) {
    console.log(paciente)
  return (
    <div className="px-6">
      <div className="">
        <img
          alt="..."
          src={paciente.picture}
          className="shadow-xl rounded-full h-36 absolute ml-[44%] mt-5"
        />
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
      </div>
      <div className="text-center mt-44">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
          {paciente.nombre} {paciente.apellido}
        </h3>
        <h3 className="text-base font-medium text-stone-800 leading-normal mb-2 text-blueGray-700">
          Género: {paciente.genero}
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          Clínica General Del Norte, Barranquilla
        </div>
        <div className="py-2">
          <button className="px-5 py-3 uppercase bg-indigo-500 text-white font-medium rounded-3xl text-sm">
            EPS {paciente.eps}
          </button>
        </div>
        <h3 className="text-base font-medium text-stone-700 leading-normal mb-2 text-blueGray-700">
          Identificación: 1025548968
        </h3>
        <h3 className="text-base font-medium text-stone-800 leading-normal mb-2 text-blueGray-700">
          Fecha de registro: {paciente.updatedAt}
        </h3>
      </div>
    </div>
  );
}

export default PatientCard;
