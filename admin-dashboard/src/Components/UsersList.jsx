import Users from "./Users";

const UsersLists = () => {
    return (
        <div className="flex-1 flex flex-col p-4 md:p-6 lg:p-8 gap-8">
           <div>
                <p className="text-3xl font-bold">Manage Users</p>
            </div>
            <div>
                <Users />
            </div>
        </div>
    )
}

export default UsersLists;