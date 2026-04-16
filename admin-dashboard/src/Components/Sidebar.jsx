import { faChartLine, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar = ({isOpen, setIsOpen}) => {

    const navActive = "bg-(--color-primary-dark) transition duration-300 p-2 rounded-lg"
    

    return (
        <nav  className={`bg-(--color-primary) text-white py-10 z-50
            ${isOpen ? " h-screen w-60 fixed" : "hidden"}  
            lg:flex lg:sticky lg:top-0 lg:h-screen`}>
            <div className="flex flex-col gap-4 px-10 lg:py-5">
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-start text-xl border py-2 px-5 font-bold rounded-lg">✕</button>
                </div>
                <h1 className="font-bold text-3xl">Admin Dashboard</h1>
                <div className="flex flex-col gap-2">
                    <NavLink to="/" end className={({isActive}) => 
                        `p-2 text-xl flex gap-2 items-center ${isActive ? navActive : "text-white" }`
                    } onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faHome}/>
                        Home
                    </NavLink>
                    
                    <NavLink to="/analytics" className={({isActive}) => 
                        `p-2 text-xl flex gap-2 items-center ${isActive ? navActive : "text-white" }`
                    } onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faChartLine}/>
                        Analytics    
                    </NavLink>
                    
                    <NavLink to="/users" className={({isActive}) => 
                        `p-2 text-xl flex gap-2 items-center ${isActive ? navActive : "text-white" }`
                    } onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faUser}/>
                        Users
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;