import { faArrowRightFromBracket, faBars, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import displayPic from "../assets/Zoro.jpg"
import { useState } from "react";

const Topbar = ({toggle}) => {

    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen);
    

    return (
        <section className="p-4 md:p-6 flex items-center justify-between lg:justify-end shadow-md z-10 bg-(--color-card)">
            <button onClick={toggle} className="lg:hidden">
                <FontAwesomeIcon icon={faBars} className="text-3xl"/>
            </button>
            <div>
                <img src={displayPic} alt="Profile Pic" className="w-13 h-13 rounded-full hover:cursor-pointer" onClick={() => setIsOpen(prev => !prev)}/>
            </div>

           {isOpen && 
                 <div className="flex flex-col gap-4 text-sm z-50 w-60 h-60 bg-(--color-card) fixed top-22 md:top-27 right-5 rounded-2xl shadow-2xl p-4">
                <div className="flex gap-2 items-center">
                    <img src={displayPic} alt="Profile Pic" className="w-13 h-13 rounded-full"/>
                    <div>
                        <p className="font-bold">Max Santos</p>
                        <p className="text-(--color-text-secondary)">maxsantos@gmail.com</p>
                    </div>
                </div>
                <div className="h-[1px] bg-(--color-sidebar)"></div>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faUser} className="text-(--color-sidebar)"/>
                        Profile
                    </div>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faGear} className="text-(--color-sidebar)"/>
                        Setting
                    </div>
                </div>
                <div className="h-[1px] bg-(--color-sidebar)"></div>
                <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-(--color-sidebar)"/>
                    Log Out
                </div>
            </div>
            }
        </section>
    )
}

export default Topbar;