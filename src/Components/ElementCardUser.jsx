import axios from "axios";
import { useState } from "react";

function ElementCardUser({paciente}) {

  return (<>
    <div className="flex my-3 justify-center items-center text-lg font-semibold font-mono">
      {user.nombre} {user.apellido}
    </div></>
  );
}

export default ElementCardUser;
