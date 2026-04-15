import { Link, NavLink } from "react-router-dom";

const Sidebar = ({isOpen, setIsOpen}) => {

    const open = "fixed w-70 z-50 h-full transition-transform duration-300 block";

    const navActive = "bg-(--color-primary-dark) ml-2 transition duration-300 p-2 rounded-lg"

    return (
        <nav  className={`bg-(--color-sidebar) text-white py-10 ${isOpen ? open : "hidden"} lg:flex lg:flex-1`}>
            <div className="flex flex-col gap-4 p-10">
                <h1 className="font-bold text-2xl">Admin Dashboard</h1>
                <NavLink to="/" end className={({isActive}) => 
                    `text-xl ${isActive ? navActive : "text-white" }`
                } onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="/analytics" className={({isActive}) => 
                    `text-xl ${isActive ? navActive : "text-white" }`
                } onClick={() => setIsOpen(false)}>Analytics</NavLink>
                <NavLink to="/users" className={({isActive}) => 
                    `text-xl ${isActive ? navActive : "text-white" }`
                } onClick={() => setIsOpen(false)}>Users</NavLink>
                <button onClick={() => setIsOpen(false)} className="lg:hidden text-start text-xl">Close</button>
            </div>
        </nav>
    )
}

export default Sidebar;