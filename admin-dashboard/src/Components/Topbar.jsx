import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = ({toggle}) => {
    return (
        <section className="p-4 md:p-6 flex items-center justify-between lg:justify-end border border-red-500 md:border-green-500 lg:border-blue-500 xl:border-yellow-500">
            <button onClick={toggle} className="lg:hidden">
                <FontAwesomeIcon icon={faBars} className="text-3xl"/>
            </button>
            <div>
                <div className="w-13 h-13 bg-black rounded-full"></div>
            </div>
        </section>
    )
}

export default Topbar;