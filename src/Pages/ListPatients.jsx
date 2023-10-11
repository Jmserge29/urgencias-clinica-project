import SideBarAssitance from "../Components/SideBarAssitance";
import CardUser from "../Components/CardUser";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function ListPatients() {
  const [pacientes, setPacientes] = useState([]);

  const loadListPatients = async () => {
    try {
      axios
        .get(
          "https://urgencias-servidor-project.vercel.app/Patient/getAllPatients"
        )
        .then((res) => {
          setPacientes(res.data.pacientes);
        });
    } catch (error) {
      // console.log(error)
    }
  };
  useEffect(() => {
    loadListPatients()
  }, [])
  return (
    <>
      <SideBarAssitance />
      <div className="sm:ml-44 sm:mt-12 sm:mr-32">
        <h2 className="font-bold text-4xl mb-8">Pacientes</h2>
        <hr className="border-2 border-rose-500" />
        <div className="grid grid-cols-3 mt-12">
          {pacientes.map((data, i) => {
            return (
              <div key={data._id}>
                <CardUser paciente={data}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListPatients;
