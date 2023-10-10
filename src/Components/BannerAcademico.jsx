import React from 'react'

function BannerAcademico() {
  return (
    <div className="py-12 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-6xl text-stone-700 font-bold ">
        Proyecto De Aula
      </h2>
      <div className="mt-16 grid max-w-lg grid-cols-4 items-center gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-2 lg:mx-0 lg:max-w-none lg:grid-cols-5 space-x-12">
        <img
          className=" cursor-pointer col-span-2 max-h-36 w-full object-contain lg:col-span-1"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Escudo_de_la_Universidad_Libre_de_Colombia.svg/1200px-Escudo_de_la_Universidad_Libre_de_Colombia.svg.png"
          alt="Universidad Libre"
          width={158}
          height={44}
        />
        <img
          className=" cursor-pointer col-span-2 max-h-44 w-full object-contain lg:col-span-1"
          src="https://www.clinicageneraldelnorte.com/wp-content/uploads/2019/12/LOGO-CGN_RGB-peque%C3%B1o-06.png"
          alt="Clinica General Del Norte"
          width={158}
          height={48}
        />


          <img
          className=" cursor-pointer col-span-2 max-h-44 w-full object-contain lg:col-span-1"
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="ViteJs"
          width={158}
          height={48}
        />
                <img
          className=" cursor-pointer col-span-2 max-h-44 w-full object-contain lg:col-span-1"
          src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
          alt="MongoDB"
          width={158}
          height={48}
        />
          <img
          className=" cursor-pointer col-span-2 max-h-36 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="TailwindCSS"
          width={158}
          height={48}
        />


      </div>
    </div>
  </div>
  )
}

export default BannerAcademico