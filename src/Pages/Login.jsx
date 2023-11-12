import axios from "axios";
import { useState } from "react";

function Login() {

    const [identificacion, setIdentificacion] = useState([])
    const [password, setPassword] = useState([])

    const Ingresar =(e) => {
        e.preventDefault();
        try {
            axios.post(`https://urgencias-servidor-project.vercel.app/User/sign-in`, {
              identificacion: identificacion,
              password
            }).then((res) => {
              console.log(res)
            }).catch((err) => {
              console.log(err)
            })
        } catch (error) {
            console.log("An error has been in the request")
        }
    }

  return (
  <div className="relative bg-indigo-500">
    <div className="rounded-2xl bg-white mx-auto container">
      <div className="container grid grid-cols-1 sm:grid-cols-2 h-screen py-4">
        <div className=" col-span-1 my-2 hidden sm:block">
          <img
            className=" rounded-2xl bg-cover h-full ml-5"
            src="https://www.elheraldo.co/sites/default/files/styles/widht_760/public/articulo/2017/10/27/02.jpg?itok=7lA9cQXw"
            alt="LoginPhoto"
          />
        </div>
        <div className=" col-span-1 flex items-center text-center">
          <form className=" p-4 sm:h-1/2 rounded-xl mx-16 text-center flex flex-col w-full">
          <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Iniciar sesión</h3>
            <p className="mb-4 text-grey-700">Ingresa tu correo y contraseña correspondiente</p>
            <div className="flex items-center mb-3">
              <hr className="h-0 my-2 border-b border-solid border-grey-500 grow"/>
            </div>
            <label className="mb-2 text-sm text-start text-grey-900">Identificación *</label>
            <input id="text" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} type="email" placeholder="99999999" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-blue-200 mb-7 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
            <label className="mb-2 text-sm text-start text-grey-900">Password *</label>
            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**************" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-blue-200 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"/>
            <button type="button" onClick={Ingresar} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 
         rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-500">Ingresar</button>
            <p className="text-sm leading-relaxed text-grey-900">Aún no estás registrado? <a href="/register" className="font-bold text-grey-700">Crear una cuenta</a></p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
