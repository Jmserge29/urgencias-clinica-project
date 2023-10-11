import NavBar from "../Components/NavBar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignInLaboral() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const sendCredentials = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://urgencias-servidor-project.vercel.app/Doctor/signInDoctor", {
          correo: email,
          password,
        })
        .then((res) => {
          console.log("request sended succesly", res);
          // Convierte el objeto de usuario a una cadena JSON
          const usuarioJSON = JSON.stringify(res.data.doctor);
          // Guarda el objeto de usuario en el localStorage bajo una clave específica
          localStorage.setItem('doctor', usuarioJSON);
          navigate("/portal")
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.error)

        });
    } catch (error) {
      console.log("Error in the request");
    }
  };

  return (
    <div>
      {/* background Gradient Start */}
      <div
        className="absolute inset-x-64 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#46ffb8] to-[#4c7cff] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[42rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#7746ff] to-[#ff2faf] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(85% 44.1%, 100% 40.6%, 75.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 32% 100%, 27.6% 76.8%, 80% 100%, 74.1% 44.1%)",
          }}
        />
      </div>
      <NavBar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-cover">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:mt-44 mt-24">
          <img
            className="mx-auto h-24 w-auto"
            src="https://www.clinicageneraldelnorte.com/wp-content/uploads/2019/12/favicon114x114.png"
            alt="Clinica General Del Norte"
          />
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Panel Laboral 🩺
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={sendCredentials}>
            {!error ? "" : <div className="text-center bg-red-500 text-white font-semibold text-lg py-3 rounded-xl">
              {error}
            </div>}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email {error}
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
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
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-8 flex w-full justify-center rounded-md bg-pink-600 px-3 py-4 text-base font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
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

export default SignInLaboral;
