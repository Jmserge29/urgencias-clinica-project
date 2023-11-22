import axios from "axios";
import { useEffect, useState } from "react";

function ElementCardUser({paciente}) {
  console.log(paciente)
    // const[user, setUser] = useState([])
    // const loadDataUser = async() => {
    //     await axios.get(`https://urgencias-servidor-project.vercel.app/User/getUserById/${paciente}`).then((res) => {
    //       setUser(res.data.usuario)
    //       // setuserInformation(res.data.usuario)
    //     }).catch((err) => {
    //       console.log("ELEMENT ERRR")
    //       console.log(err)
    //     })
    // }
    // useEffect(async() => {
    //   await loadDataUser()
    // }, [])
  return (<>
    <div className="flex my-3 justify-center items-center text-lg font-semibold font-mono">
      {/* {user.nombre} {user.apellido} */}user
    </div>
    <span className="text-center flex justify-center rounded-2xl bg-slate-900 text-white py-3 px-4">Edad: 85</span></>
  );
}

export default ElementCardUser;
