import axios from "axios";
import { useState } from "react";

function ElementCardUser({paciente}) {
    const[user, setUser] = useState([])
    const loadDataUser = async() => {
        await axios.get(`https://urgencias-servidor-project.vercel.app/Patient/getPatientById/${paciente}`).then((res) => {
          setUser(res.data.paciente)
        })
    }
      loadDataUser()
  return (<>
    <div className="flex my-3 justify-center items-center text-lg font-medium">
      {user.nombre} {user.apellido}
    </div></>
  );
}

export default ElementCardUser;
