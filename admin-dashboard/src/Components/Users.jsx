import usersData from "../data/usersData.json"


const Users = () => {
    
    return (
        <section>
            <div className="flex flex-col gap-4 bg-(--color-card) shadow-lg py-2 px-4 w-full overflow-x-auto rounded-xl">
                <p className="text-3xl font-bold">Users</p>
                <table className="w-full text-left whitespace-nowrap text-base">
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
                            <tr key={index}>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.role}</td>
                                <td className="p-3">{user.status}</td>
                                <td className="p-3 flex items-center gap-4">
                                    <button className="border py-2 px-4 rounded-lg text-(--color-card-blue) bg-(--color-card-blue)/20 hover:cursor-pointer">Edit</button>
                                    <button className="border py-2 px-4 rounded-lg text-(--color-card-red) bg-(--color-card-red)/20 hover:cursor-pointer">Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Users;