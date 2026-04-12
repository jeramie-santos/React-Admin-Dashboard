import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="hidden lg:block flex-1">
            <ul className="flex flex-col gap-4">
                <Link to="/">Home</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/users">Users</Link>
            </ul>
        </nav>
    )
}

export default Sidebar;