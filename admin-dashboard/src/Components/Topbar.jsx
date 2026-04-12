import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
    return (
        <div className="py-2 px-4 border border-red-500 flex items-center justify-between">
            <div>
                <FontAwesomeIcon icon={faBars} className="text-3xl"/>
            </div>
            <div>
                <div className="w-13 h-13 bg-black rounded-full"></div>
            </div>
        </div>
    )
}

export default Topbar;