import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="fixed w-full bg-slate-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/home"}><div className="text-2xl font-semibold">
            Clínica General Del Norte
          </div></Link>
          <div className="hidden w-full md:block md:w-auto ">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link to={"/urgency"}><a className="cursor-pointer block py-2 px-3">Urgencias</a></Link>
              </li>
              <li>
                <Link to={"/dev"}><a className="cursor-pointer block py-2 px-3">Desarrollo</a></Link>
              </li>
              <li>
                <Link to={"/portal"}><a className="cursor-pointer block py-2 px-3">Portal</a></Link>
              </li>
              <li>
                <Link to={"/register"}><a className="cursor-pointer block py-2 px-3">Regístrate</a></Link>
              </li>
              <li>
                <Link to={"/auth/administrative"}><a className="cursor-pointer block py-2 px-3">Panel Administrativo</a></Link>
              </li>
              <li>
                <Link to={"/auth/doctor"}><a className="cursor-pointer block py-2 px-3">Panel Laboral</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar