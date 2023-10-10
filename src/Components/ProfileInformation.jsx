import React from "react";

function ProfileInformation() {
  return (
    <>
      <div className=" col-span-4 rounded-lg ml-5 px-12 w-full bg-slate-50 shadow-2xl h-72 ">
        <div className="grid grid-cols-3 mt-8">
          <div className=" col-span-1 grid grid-rows-2">
            <div className=" text-4xl font-bold flex justify-center items-center">
              90
            </div>
            <div className=" font-semibold text-sm flex text-center items-center justify-center">
              Pacientes Atendidos
            </div>
          </div>
          <div className=" col-span-1 grid grid-rows-2">
            <div className=" text-4xl font-bold flex justify-center items-center">
              9000
            </div>
            <div className=" font-semibold text-sm flex text-center items-center justify-center">
              Salario
            </div>
          </div>
          <div className=" col-span-1 grid grid-rows-2">
            <div className=" text-4xl font-bold flex justify-center items-center">
              15
            </div>
            <div className=" font-semibold text-sm flex text-center items-center justify-center">
              Emergencias
            </div>
          </div>
        </div>
        <div className=" leading-3 text-center">
          <h5 className="text-xl font-medium mt-5 mb-2 text-stone-700">
            Consultorio 6 en la línea de Urgencias
          </h5>
          <h4 className="text-sm font-medium">
            Horario de atención de 6 AM a 3 PM
          </h4>
          <p className="text-sm font-medium">3009826522</p>
          <p className="text-sm font-medium">doctor@test.com</p>
        </div>
      </div>
    </>
  );
}

export default ProfileInformation;
