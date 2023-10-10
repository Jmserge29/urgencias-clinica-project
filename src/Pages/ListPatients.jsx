import SideBarAssitance from "../Components/SideBarAssitance"
import CardUser from "../Components/CardUser"
function ListPatients() {
  return (
    <>
    <SideBarAssitance/>
    <div className="sm:ml-44 sm:mt-12 sm:mr-32">
        <h2 className="font-bold text-4xl mb-8">Pacientes</h2>
        <hr className="border-2 border-rose-500" />
        <div className="grid grid-cols-3 mt-12">
            <CardUser/>
        </div>
        </div>
    </>
  )
}

export default ListPatients