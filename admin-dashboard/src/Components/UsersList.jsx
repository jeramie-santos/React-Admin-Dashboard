import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Users from "./Users";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const UsersLists = () => {
    return (
        <div className="flex-1 flex flex-col p-4 md:p-6 lg:p-8 gap-8">
           <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">Manage Users</p>
                <button className="p-2 lg:p-4 rounded-lg bg-(--color-primary) text-white flex items-center gap-1 hover:cursor-pointer hover:bg-(--color-primary-dark)">
                    <FontAwesomeIcon icon={faPlus} />
                    Add User
                </button>
            </div>
            <div>
                <Users />
            </div>
        </div>
    )
}

export default UsersLists;