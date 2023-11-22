import axios from "axios";
import { useEffect, useState } from "react";

function ElementCardUser({ paciente, setuserInformation }) {
  const [user, setUser] = useState([]);
  const loadDataUser = async () => {
    await axios
      .get(
        `https://urgencias-servidor-project.vercel.app/User/getUserById/${paciente}`
      )
      .then((res) => {
        setUser(res.data.usuario);
        setuserInformation(res.data.usuario)
      })
      .catch((err) => {
        console.log("ELEMENT ERRR");
        console.log(err);
      });
  };
    if (paciente) {
      loadDataUser();
    } else {
      return
    }
  return (
    <>
      <div className="flex my-3 justify-center items-center text-lg font-semibold font-mono">
        {user.nombre} {user.apellido}
      </div>
      <span className="text-center flex justify-center rounded-2xl bg-slate-900 text-white py-3 px-4">
        Edad: {user.edad}
      </span>
    </>
  );
}

export default ElementCardUser;
