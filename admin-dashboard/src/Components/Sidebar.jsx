import { Link } from "react-router-dom";

const Sidebar = ({isOpen, setIsOpen}) => {

    const open = "fixed w-70 z-50 h-full transition-transform duration-300 block";

    return (
        <nav  className={`bg-black text-white py-10 ${isOpen ? open : "hidden"} lg:flex lg:flex-1`}>
            <div className="flex flex-col gap-4 p-10">
                <h1 className="font-bold text-2xl">Admin Dashboard</h1>
                <Link to="/" className="text-xl" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/analytics" className="text-xl" onClick={() => setIsOpen(false)}>Analytics</Link>
                <Link to="/users" className="text-xl" onClick={() => setIsOpen(false)}>Users</Link>
                <button onClick={() => setIsOpen(false)} className="lg:hidden text-start text-xl">Close</button>
            </div>
        </nav>
    )
}

export default Sidebar;