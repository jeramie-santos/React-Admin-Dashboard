import usersData from "../data/usersData.json"


const Users = () => {
    
    return (
        <section>
            <div className="flex flex-col gap-4 bg-(--color-card) shadow-lg py-2 px-4 w-full overflow-x-auto rounded-xl">
                <p className="text-3xl font-bold">Users</p>
                <table className="w-full min-w-[600px] text-left whitespace-nowrap text-base">
                    <thead>
                        <tr>
                            <th className="p-3 text-lg">Name</th>
                            <th className="p-3 text-lg">Email</th>
                            <th className="p-3 text-lg">Role</th>
                            <th className="p-3 text-lg">Status</th>
                            <th className="p-3 text-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, index) => 
                            <tr key={index} className={index % 2 === 0 ? "bg-(--color-bg)" : "bg-white"}>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.role}</td>
                                <td className="p-3">{user.status}</td>
                                <td className="p-3">Edit | Delete</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Users;