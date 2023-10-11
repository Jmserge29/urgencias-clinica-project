import {  UserGroupIcon, RocketLaunchIcon, UserCircleIcon, ArrowRightOnRectangleIcon} from '@heroicons/react/24/solid'

export const IconSideBar = ({ icon, text = "tooltip 💡" }) => {
    return (
      <>
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
      </>
    );
  };  

function SideBar() {

    const SignOut = () => {
        window.location.href = './';
        localStorage.removeItem('doctor');
    }
    

    const navigation = [
        {
            name: "Usuario",
            url: "/portal",
            icon: <UserCircleIcon/>,
        },
        {
            name: "Pacientes",
            url: "/patients",
            icon: <UserGroupIcon/>,
        },

        {
            name: "Desarrollo",
            url: "/dev",
            icon: <RocketLaunchIcon/>,
        },
    ]

    
  return (<>
    <div className='hidden lg:flex fixed top-0 left-0 h-screen w-28 justify-center flex-col bg-white text-white drop-shadow-2xl'>
        <div className='flex justify-center '>
            <nav>
                <ul className=' space-y-12'>
                    {navigation.map((data, i) => {
                        return(
                            <div key={i}>
                                <a href={data.url}>
                                    <IconSideBar icon={data.icon} text={data.name}/>
                                </a>
                            </div>
                        )
                    })}
                    <div>
                        <a >
                            <div className="sidebar-icon group" onClick={(e) => SignOut()}>
                                <ArrowRightOnRectangleIcon/>
                                <span className="sidebar-tooltip group-hover:scale-100">Cerrar Sesión</span>
                            </div>
                        </a>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
    </>
  )
}

export default SideBar