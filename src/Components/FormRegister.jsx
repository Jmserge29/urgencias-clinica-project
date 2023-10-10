import React from 'react'

function FormRegister() {
  return (
    <div>          <form className="grid sm:grid-cols-2" action="#" method="POST">
    <div className="sm:mx-8 mx-1 my-3">
      <label className="text-sm font-medium leading-6 text-gray-900">
        Nombre
      </label>
      <div className="mt-2">
        <input
          type="text"
          required
          className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:mx-8 mx-1 my-3">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Apellido
      </label>
      <div className="mt-2">
        <input
          type="text"
          required
          className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:mx-8 mx-1 my-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          EPS
        </label>
      </div>
      <div className="mt-2">
        <input
          type="text"
          required
          className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:mx-8 mx-1 my-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Dirección
        </label>
      </div>
      <div className="mt-2">
        <input
          type="text"
          required
          className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:mx-8 mx-1 my-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Edad
        </label>
      </div>
      <div className="mt-2">
        <input
          type="Number"
          required
          className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:mx-8 mx-1 my-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Cédula
        </label>
      </div>
      <div className="mt-2">
        <input
          type="Number"
          required
          className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:mx-8 mx-1 my-3">
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Género
        </label>
      </div>
      <div className="mt-2">
        <select
          class="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
          required
        >
          <option value="Másculino">Másculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>

    <div className="sm:mx-8 mx-1 my-3">
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Contraseña
        </label>
      </div>
      <div className="mt-2">
        <input
          type="password"
          required
          placeholder="***********"
          className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-base sm:leading-6"
        />
      </div>
    </div>

    <div className="mt-8 sm:col-span-2">
      <button
        type="submit"
        className="flex w-full justify-center rounded-xl bg-rose-600 px-3 py-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
      >
        Registrarte
      </button>
    </div>
  </form>
</div>
  )
}

export default FormRegister