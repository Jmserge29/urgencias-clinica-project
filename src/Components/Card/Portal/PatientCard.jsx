import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import axios from "axios";

function PatientCard({ data, array, fuctionClick }) {
  const getInformationUser = async () => {
    try {
      axios
        .get(
          `https://urgencias-servidor-project.vercel.app/User/getUserById/${data._id}`
        )
        .then((res) => {
          console.log("Informacion de usuario: ", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log("An error in the request");
    }
  };
  getInformationUser();
  return (
    <>
      <div
        className="grid grid-cols-5 py-4 cursor-pointer "
        onClick={() => fuctionClick(data)}
      >
        <div
          className=" col-span-1 h-52 bg-cover rounded-xl"
          style={{
            backgroundImage: `url('https://labiode.com/wp-content/uploads/2023/02/Saiko.jpg')`,
          }}
        ></div>
        <div className=" col-span-4 flex items-center">
          <div className="rounded-lg shadow-lg h-44 w-full grid grid-cols-5">
            <div className="mx-6 col-span-2">
              <h4 className="text-xl font-semibold py-2">
                Emergencias N°{" "}
                <span className="text-sm font-semibold">{data._id}</span>
              </h4>
              {/* <h4 className='text-xl py-2'>Paciente : <span className='text-green-600  font-semibold'>[ Saiko Gutierrez ]</span></h4> */}
              <p className=" text-justify text-sm">{data.motivos_consulta}</p>
            </div>
            <div className=" col-span-2 font-mono bg-rose-100 rounded-md">
              <h4 className="text-xl font-semibold py-2">Datos Paciente : </h4>
              <h3 className="text-lg font-bold pt-2 text-rose-700">
                {data.paciente}
              </h3>
              <h3 className="text-base mb-4 font-medium">19 Años</h3>
              <span className="rounded-xl my-2 bg-rose-400 text-white px-4 py-2 font-semibold uppercase">
                Eps Sura
              </span>
            </div>
            <div className="flex items-center justify-center">
              {array.find((e) => e._id === data._id) ? (
                <CheckCircleIcon className="text-rose-500 h-12" />
              ) : (
                <EllipsisHorizontalIcon className="text-slate-500 h-12" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientCard;
