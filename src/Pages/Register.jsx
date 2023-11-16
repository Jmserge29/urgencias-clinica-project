import NavBar from "../Components/NavBar";
import FormRegister from "../Components/FormRegister";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nombre, setNombre] = useState([]);
  const [apellido, setApellido] = useState([]);
  const [email, setEmail] = useState([]);
  const [eps, setEps] = useState([]);
  const [edad, setEdad] = useState([]);
  const [identificacion, setIdentificacion] = useState([]);
  const [telefono, setTelefono] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();


  const createNewPatient = async (e) => {
    try {
      console.log(          {
        identificacion,
        password,
        email,
        nombre,
        apellido,
        edad,
        telefono,
        eps
      })
      e.preventDefault();
      await axios
        .post(
          "https://urgencias-servidor-project.vercel.app/User/sign-up",
          {
            identificacion,
            password,
            email,
            nombre,
            apellido,
            edad,
            telefono,
            eps
          }
        )
        .then((res) => {
          console.log("request sended succesly", res.data);
          const usuarioJSON = JSON.stringify(res.data.usuario);
          localStorage.setItem('patient', usuarioJSON);
          // navigate("/me")

        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  return (
    <>
  <div className="relative bg-cyan-500 py-5">
    <div className="rounded-2xl bg-white mx-auto container">
      <div className="container grid grid-cols-1 sm:grid-cols-2 h-screen py-4">
        <div className=" col-span-1 my-2 hidden sm:block">
          <img
            className=" rounded-2xl bg-cover h-full ml-5"
            src="https://www.eltiempo.com/files/article_main_1200/uploads/2020/10/15/5f887bf49e56e.jpeg"
            alt="RegisterPhoto"
          />
        </div>
        <div className=" col-span-1 flex text-center sm:mt-24">
          <form className=" p-4 sm:h-1/2 rounded-xl mx-16 text-center flex flex-col w-full">
          <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Regístrate</h3>
            <p className="mb-4 text-grey-700">Completa los campos correspondientes</p>
            <div className="flex items-center mb-3">
              <hr className="h-0 my-2 border-b border-solid border-grey-500 grow"/>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 space-x-1">

              <div>
                <label className="mb-2 text-sm text-start text-grey-900">Identificación *</label>
                <input value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} type="Number" placeholder="99999999" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
              </div>
              <div>
                <label className="mb-2 text-sm text-start text-grey-900">Email *</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="jhonDoe@gmail.com" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
              </div>
              <div>
                <label className="mb-2 text-sm text-start text-grey-900">Ingrese una Contraseña *</label>
                <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**************" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-blue-200 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
              </div>
              <div>
                <label className="mb-2 text-sm text-start text-grey-900">Ingrese su Nombre *</label>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Jhon" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
              </div>
              <div>
                <label className="mb-2 text-sm text-start text-grey-900">Ingrese su Apellido *</label>
                <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" placeholder="Doe" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
              </div>
              <div>
                <label className="mb-2 text-sm text-start text-grey-900">Edad *</label>
                <input value={edad} onChange={(e) => setEdad(e.target.value)} type="Number" placeholder="99999999" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
              </div>
              <div>
                <label className="mb-2 text-sm text-start text-grey-900">Seleccione su EPS *</label>
                {/* <input value={eps} onChange={(e) => setEps(e.target.value)} type="select" placeholder="99999999" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/> */}
                <select value={eps} onChange={(e) => setEps(e.target.value)} className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl">
                  <option selected>Seleccione su EPS</option>
                  <option value="Nueva EPS">Nueva EPS</option>
                  <option value="EPS SURA">EPS SURA</option>
                  <option value="Sanitas">Sanitas</option>
                  <option value="Salud Total">Salud Total</option>
              </select>

              </div>
              <div>
                <label className="mb-2 text-sm text-start text-grey-900">Ingrese un Contacto (Telefono) *</label>
                <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="Number" placeholder="300000000" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
              </div>

            </div>
            <button type="button" onClick={createNewPatient} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-cyan-500">Registrarse</button>
            <p className="text-sm leading-relaxed text-grey-900">Ya estás registrado? <a href="/login" className="font-bold text-grey-700">Inicia sesión</a></p>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Register;
