import React from "react";

function PatientPortal() {
  return (<>
      <section className=" block h-500-px mt-72">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              `url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80")`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
            <div className="">
                    <img
                      alt="..."
                      src="https://images.genius.com/6675f516c76af63cf64b923ddebe3d08.900x900x1.jpg"
                      className="shadow-xl rounded-full h-36 absolute ml-[44%] mt-5"
                    />
                  </div>

              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                </div>
              </div>
              <div className="text-center mt-44">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Máximo Valentino
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Clínica General Del Norte, Barranquilla
                </div>
                <div className="py-2"><button className="px-5 py-3 bg-indigo-500 text-white font-medium rounded-3xl text-sm">EPS SURA</button></div>
                <h3 className="text-base font-normal leading-normal mb-2 text-blueGray-700">
                    Identificación: 1025548968
                </h3>
                <h3 className="text-base font-normal leading-normal mb-2 text-blueGray-700">
                    Email: valentino@gmail.com
                </h3>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="my-4"><button className="px-4 py-3 bg-blue-500 text-white font-medium rounded-3xl text-lg">Servicio De Urgencias</button></div>
                <div className="my-4"><button className="px-4 py-3 bg-indigo-500 text-white font-medium rounded-3xl text-lg">Servicio De Odontología</button></div>
                <div className="my-4"><button className="px-4 py-3 bg-rose-500 text-white font-medium rounded-3xl text-lg">Cerrar Sesión</button></div>

              </div>
            </div>
          </div>
        </div>
      </section></>
  );
}

export default PatientPortal;
