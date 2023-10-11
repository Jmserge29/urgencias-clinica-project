import PatientFuctions from "../Components/PatientFuctions";
import PatientCard from "../Components/PatientCard";
import axios from "axios";
import { useState } from "react";
import EmergencyCard from "../Components/EmergencyCard"

function PatientPortal() {
  const usuarioJSON = localStorage.getItem('patient');
  const paciente = JSON.parse(usuarioJSON);
  const [motivos_consulta, setMotivos_consulta] = useState([])
  const actualizarUSer = async() => {
    axios.get(`https://urgencias-servidor-project.vercel.app/Patient/getPatientById/${paciente._id}`).then((res) => {
      console.log("request sended succesly", res.data);
      const usuarioJSON = JSON.stringify(res.data.paciente);
      localStorage.setItem('patient', usuarioJSON);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);  
    });
  }
  const createUrgency = async() => {
    try {
      axios
          .post("https://urgencias-servidor-project.vercel.app/Emergency/createEmergency", {
            pacienteId: paciente._id,
            motivos_consulta,
          })
          .then((res) => {
            console.log("request sended succesly", res.data.emergencia);
            actualizarUSer()
          })
          .catch((err) => {
            console.log(err);  
          });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className=" block h-500-px mt-72">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80")`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <PatientCard paciente={paciente}/>
            <div className="mt-10 py-10 border-t border-blueGray-200">
              {paciente.emergencia_asignada == null ? "" : <EmergencyCard urgencia={paciente.emergencia_asignada}/>}
              
              <PatientFuctions paciente={paciente} motivos_consulta={motivos_consulta}
setMotivos_consulta={setMotivos_consulta} createUrgency={createUrgency} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PatientPortal;
