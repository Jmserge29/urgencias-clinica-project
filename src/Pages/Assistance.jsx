import SideBarAssitance from "../Components/SideBarAssitance";

function Assistance() {
  return (
    <>
      <SideBarAssitance />
      <div className="sm:ml-44 sm:mt-12 sm:mr-32">
        <h2 className="font-bold text-4xl mb-8">Asistencia</h2>
        <hr className="border-2 border-rose-500" />
          <h3 className="text-4xl mt-12 font-semibold mb-8 text-stone-900">Tabla de Emergencias Sin Atender</h3>
        <div class=" relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                  Motivos
                </th>
                <th scope="col" class="px-6 py-3">
                  Estado
                </th>
                <th scope="col" class="px-6 py-3">
                  Funcion
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr class="bg-white border-b  hover:bg-teal-100">
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://labiode.com/wp-content/uploads/2022/01/Beny-Jr-trapero-espanol.jpg"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Neil Sims</div>
                    <div class="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4 text-base text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A id quibusdam animi dolorem, possimus qui doloribus aut, facere error, doloremque corrupti officiis! Officiis aperiam corporis pariatur? Atque facilis eaque doloremque!
                Natus consequatur accusamus nostrum blanditiis quam perferendis, soluta omnis eaque possimus cupiditate alias. Aut, quibusdam? Quo hic explicabo ipsum laboriosam. Nemo, atque recusandae. Sequi, vero! Ratione reprehenderit deserunt facilis sint.
                Soluta nisi distinctio impedit quo ea, deleniti quaerat omnis. Fugit, exercitationem. Odit quas magni vel animi temporibus illum. Itaque fugiat accusantium inventore aperiam! Maiores quia iusto soluta vitae totam molestias.</td>
                <td class="px-6 py-4">
                  <div class="flex items-center font-medium">
                    <div class="h-2.5 w-2.5  rounded-full bg-green-500 mr-2"></div>{" "}
                    Sin atender
                  </div>
                </td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600  hover:underline"
                  >
                    Clasificar
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
      </div>
    </>
  );
}

export default Assistance;
