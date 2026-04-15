import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = ({toggle}) => {
    return (
        <section className="p-4 md:p-6 flex items-center justify-between lg:justify-end shadow-md z-10">
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