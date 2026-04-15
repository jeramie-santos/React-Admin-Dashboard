import usersData from "../data/usersData.json"


const Users = () => {

    console.log(usersData);
    
    return (
        <div className="bg-(--color-card) shadow-lg flex flex-col gap-4 py-2 px-4 rounded-2xl">
            <p className="text-3xl font-bold">Users</p>
            <div className="flex items-center justify-center">
                <table className="w-100p md:w-250 lg:w-355 overflow-auto">
                    <thead>
                        <tr className="">
                            <th className="p-1 text-sm">Name</th>
                            <th className="p-1 text-sm">Email</th>
                            <th className="p-1 text-sm">Role</th>
                            <th className="p-1 text-sm">Status</th>
                            <th className="p-1 text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, index) => 
                            <tr key={index} className={index % 2 === 0 ? "bg-(--color-bg)" : "bg-white"}>
                                <td className="p-1 md:p-2 lg:p-3 text-sm text-center">{user.name}</td>
                                <td className="p-1 md:p-2 lg:p-3 text-sm text-center">{user.email}</td>
                                <td className="p-1 md:p-2 lg:p-3 text-sm text-center">{user.role}</td>
                                <td className="p-1 md:p-2 lg:p-3 text-sm text-center">{user.status}</td>
                                <td className="p-1 md:p-2 lg:p-3 text-sm text-center">Edit | Delete</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;