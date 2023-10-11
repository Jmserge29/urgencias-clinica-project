import React from "react";

function ProfileInformation({doctor}) {
  return (
    <>
      <div className=" col-span-4 rounded-lg ml-5 px-12 w-full bg-slate-50 shadow-2xl h-72 ">
        <div className="grid grid-cols-3 mt-8">
          <div className=" col-span-1 grid grid-rows-2">
            <div className=" text-4xl font-bold flex justify-center items-center">
            {doctor.pacientes.length}
            </div>
            <div className=" font-semibold text-sm flex text-center items-center justify-center">
              Pacientes Atendidos
            </div>
          </div>
          <div className=" col-span-1 grid grid-rows-2">
            <div className=" text-4xl font-bold text-emerald-400 flex justify-center items-center">
              ${doctor.salario}
            </div>
            <div className=" font-semibold text-sm flex text-center items-center justify-center">
              Salario
            </div>
          </div>
          <div className=" col-span-1 grid grid-rows-2">
            <div className=" text-4xl font-bold flex justify-center items-center">
              {doctor.emergencias_asignadas.length}
            </div>
            <div className=" font-semibold text-sm flex text-center items-center justify-center">
              Emergencias
            </div>
          </div>
        </div>
        <div className=" leading-3 text-center">
          <h5 className="text-xl font-medium mt-5 mb-2 text-stone-700">
            {doctor.consultorio} en la línea de Urgencias
          </h5>
          <h4 className="text-sm font-medium">
            Horario de atención de {doctor.horario}
          </h4>
          <p className="text-sm font-medium">{doctor.telefono}</p>
          <p className="text-sm font-medium">{doctor.correo}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileInformation;
