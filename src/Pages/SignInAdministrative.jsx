import axios from "axios";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInAdministrative() {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const navigate = useNavigate();

  const sendCredentials = async(e) => {
    e.preventDefault();
    try {
      axios.post("https://urgencias-servidor-project.vercel.app/Assistance/SignInAssistance", {
        correo: email,
        password,
      }).then((res) => {
        console.log("request sended succesly", res)
        const usuarioJSON = JSON.stringify(res.data.assistance);
        localStorage.setItem('assistance', usuarioJSON);
        navigate("/assistance")

      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
      console.log("Error in the request")
    }
  }

  return (
    <div>
      <div
        className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-8rem)] aspect-[900/600] w-[24rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#ff6b6b] to-[#ffb6b9] opacity-50 sm:left-[calc(50%-20rem)] sm:w-[40rem]"
          style={{
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      <NavBar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-cover">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:mt-44">
          <img
            className="mx-auto h-24 w-auto"
            src="https://www.clinicageneraldelnorte.com/wp-content/uploads/2019/12/favicon114x114.png"
            alt="Clinica General Del Norte"
          />
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Panel Administrativo
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={sendCredentials}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                value={email}
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                value={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-4 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInAdministrative;
