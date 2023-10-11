import NavBar from "../Components/NavBar";
import FormRegister from "../Components/FormRegister";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nombre, setNombre] = useState([]);
  const [apellido, setApellido] = useState([]);
  const [eps, setEps] = useState([]);
  const [edad, setEdad] = useState([]);
  const [identificacion, setIdentificacion] = useState([]);
  const [genero, setGenero] = useState([]);
  const [direccion, setDireccion] = useState([]);
  const [telefono, setTelefono] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();


  const createNewPatient = async (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          "https://urgencias-servidor-project.vercel.app/Patient/createPatient",
          {
            nombre: nombre,
            apellido: apellido,
            eps: eps,
            identificacion: identificacion,
            genero: genero,
            edad: edad,
            direccion: direccion,
            telefono: telefono,
            password : password
          }
        )
        .then((res) => {
          console.log("request sended succesly", res);
          const usuarioJSON = JSON.stringify(res.data.paciente);
          localStorage.setItem('patient', usuarioJSON);
          navigate("/me")

        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  return (
    <>
      {/* background Gradient Start */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#46ffb8] to-[#4c7cff] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <NavBar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-24">
          <img
            className="mx-auto h-18 w-auto"
            src="https://www.clinicageneraldelnorte.com/wp-content/uploads/2019/12/favicon114x114.png"
            alt="Clinica General Del Norte"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registro de tu Cuenta en La Clínica General Del Norte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:px-32">
          <FormRegister
            createNewPatient={createNewPatient}
            setNombre={setNombre}
            setApellido={setApellido}
            setEps={setEps}
            setEdad={setEdad}
            setIdentificacion={setIdentificacion}
            setGenero={setGenero}
            setDireccion={setDireccion}
            setTelefono={setTelefono}
            nombre={nombre}
            apellido={apellido}
            eps={eps}
            edad={edad}
            identificacion={identificacion}
            genero={genero}
            direccion={direccion}
            telefono={telefono}
            password={password}
            setPassword={setPassword}
          />
        </div>
      </div>
      {/* background Gradient End */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#46ffb8] to-[#4c7cff] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </>
  );
}

export default Register;
