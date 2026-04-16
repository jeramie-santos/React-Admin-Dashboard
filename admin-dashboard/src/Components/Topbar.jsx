import { faArrowRightFromBracket, faBars, faBell, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import displayPic from "../assets/Zoro.jpg"
import { useState, useRef, useEffect } from "react";

const Topbar = ({toggle}) => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutsideProfile = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsProfileOpen(prev => !prev)
                console.log("click");
            }
        }

        document.addEventListener("mousedown", handleClickOutsideProfile);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideProfile)
        }

    }, [])

    return (
        <section className="p-4 md:p-6 flex items-center justify-between lg:justify-end shadow-md z-10 bg-(--color-card)">
            <button onClick={toggle} className="lg:hidden">
                <FontAwesomeIcon icon={faBars} className="text-3xl"/>
            </button>

            <div className="flex items-center gap-6">
                <div className="relative">
                    <FontAwesomeIcon icon={faBell} className="text-2xl hover:cursor-pointer" onClick={() => setIsNotifOpen(prev => !prev)}/>
                    
                    {isNotifOpen && 
                    <div className="flex flex-col gap-4 text-sm z-50 w-60 h-60 bg-(--color-card) absolute top-18 right-0 rounded-2xl shadow-2xl p-4 overflow-auto">
                        <div className="flex gap-2 items-center hover:cursor-pointer">
                            <p className="flex-1">1 min ago</p>
                            <p className="flex-3">Anna Reyes submitted a request.</p>
                        </div>
                        <div className="border-t"></div>
                        <div className="flex gap-2 items-center hover:cursor-pointer">
                            <p className="flex-1">5 mins ago</p>
                            <p className="flex-3">Chris Bautista has Sign Up.</p>
                        </div>
                        <div className="border-t"></div>
                        <div className="flex gap-2 items-center hover:cursor-pointer">
                            <p className="flex-1">1 hr ago</p>
                            <p className="flex-3">John Cruz Generated a report</p>
                        </div>
                        <div className="border-t"></div>
                        <div className="flex gap-2 items-center hover:cursor-pointer">
                            <p className="flex-1">1 mins ago</p>
                            <p className="flex-3">Anna Reyes submitted a request</p>
                        </div>
                    </div>
                }
                </div>

                <div ref={menuRef} className="relative">
                    <img src={displayPic} alt="Profile Pic" className="w-13 h-13 rounded-full hover:cursor-pointer" onClick={() => setIsProfileOpen(prev => !prev)}/>
                    
                    {isProfileOpen && 
                    <div className="flex flex-col gap-4 text-sm z-50 w-60 h-60 bg-(--color-card) absolute top-22 right-0 rounded-2xl shadow-2xl p-4">
                        <div className="flex gap-2 items-center">
                            <img src={displayPic} alt="Profile Pic" className="w-13 h-13 rounded-full"/>
                            <div>
                                <p className="font-bold">Max Santos</p>
                                <p className="text-(--color-text-secondary)">maxsantos@gmail.com</p>
                            </div>
                        </div>
                        <div className="h-[1px] bg-(--color-sidebar)"></div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-2 items-center hover:cursor-pointer">
                                <FontAwesomeIcon icon={faUser} className="text-(--color-sidebar)"/>
                                Profile
                            </div>
                            <div className="flex gap-2 items-center hover:cursor-pointer">
                                <FontAwesomeIcon icon={faGear} className="text-(--color-sidebar)"/>
                                Setting
                            </div>
                        </div>
                        <div className="h-[1px] bg-(--color-sidebar)"></div>
                        <div className="flex gap-2 items-center hover:cursor-pointer">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-(--color-sidebar)"/>
                            Log Out
                        </div>
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Topbar;