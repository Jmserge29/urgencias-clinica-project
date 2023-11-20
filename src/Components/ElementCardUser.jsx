import axios from "axios";
import { useState } from "react";

function ElementCardUser({paciente}) {
    const[user, setUser] = useState([])
    const loadDataUser = async() => {
        await axios.get(`https://urgencias-servidor-project.vercel.app/User/getUserById/${paciente}`).then((res) => {
          console.log("card User: ",res.data.usuario)
          setUser(res.data.usuario)
        })
    }
      loadDataUser()
  return (<>
    <div className="flex my-3 justify-center items-center text-lg font-medium">
      {user.nombre}
    </div></>
  );
}

export default ElementCardUser;
