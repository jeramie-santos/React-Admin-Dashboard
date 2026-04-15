import usersData from "../data/usersData.json"


const Users = () => {

    console.log(usersData);
    
    return (
        <div className="flex flex-col gap-4">
            <p className="text-3xl font-bold">Users</p>
            <div className="flex">
                <table className="w-100p md:w-250 lg:w-400 overflow-auto">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="p-1 text-sm">Name</th>
                            <th className="p-1 text-sm">Email</th>
                            <th className="p-1 text-sm">Role</th>
                            <th className="p-1 text-sm">Status</th>
                            <th className="p-1 text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, index) => 
                            <tr key={index}>
                                <td className="p-1 text-sm">{user.name}</td>
                                <td className="p-1 text-sm">{user.email}</td>
                                <td className="p-1 text-sm">{user.role}</td>
                                <td className="p-1 text-sm">{user.status}</td>
                                <td className="p-1 text-sm">Edit | Delete</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;