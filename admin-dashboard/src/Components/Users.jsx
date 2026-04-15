import usersData from "../data/usersData.json"


const Users = () => {
    
    return (
        <section className="flex flex-col gap-4">
            <p className="text-3xl font-bold">Users</p>
            <div className="bg-(--color-card) shadow-lg py-2 px-4 w-full overflow-x-auto rounded-xl">
                <table className="w-full min-w-[600px] text-left">
                    <thead>
                        <tr>
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
                                <td className="whitespace-nowrap p-3 text-sm">{user.name}</td>
                                <td className="whitespace-nowrap p-3 text-sm">{user.email}</td>
                                <td className="whitespace-nowrap p-3 text-sm">{user.role}</td>
                                <td className="whitespace-nowrap p-3 text-sm">{user.status}</td>
                                <td className="whitespace-nowrap p-3 text-sm">Edit | Delete</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Users;