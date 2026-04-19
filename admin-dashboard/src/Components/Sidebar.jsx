import { faChartLine, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import displayPic from "../assets/Zoro.jpg"


const Sidebar = ({isOpen, setIsOpen}) => {

    const navActive = "bg-(--color-primary-dark) transition duration-300 p-2 rounded-lg"    

    return (
        <nav className={`bg-(--color-primary) text-white py-5 z-50 fixed top-0 left-0 h-screen w-60
            transform transition-tranform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}  
            lg:w-80 lg:translate-x-0 lg:flex lg:sticky lg:py-0`}>
            <div className="flex flex-col gap-8 px-10 lg:py-5">
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-start text-xl border py-2 px-5 font-bold rounded-lg">✕</button>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                        <div className="flex flex-col gap-1 w-2 h-5  lg:w-2 lg:h-5">
                            <div className="bg-white flex-3"></div>
                            <div className="bg-white flex-1"></div>
                        </div>
                        <div className="flex flex-col gap-1 w-2 h-5 lg:w-2 lg:h-5">
                            <div className="bg-white flex-1"></div>
                            <div className="bg-white flex-3"></div>
                        </div>
                    </div>
                    <h1 className="flex-1 font-bold text-2xl lg:text-3xl">Admin Dashboard</h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <img src={displayPic} alt="Profile-Pic" className="w-40 h-40 rounded-full"/>
                    <h2 className="text-xl font-bold">Max Santos</h2>
                </div>
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