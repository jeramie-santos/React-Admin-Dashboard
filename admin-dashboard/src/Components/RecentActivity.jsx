import recentActivityData from "../data/recentActivityData.json"

const RecentActivity = () => {

    console.log(recentActivityData);
    
    const checkColor = (type) => {
        if (type == "create") {
            return "green-500"
        } else if (type === "update") {
            return "blue-500"
        } else if (type === "delete") {
            return "red-500"
        } else if (type === "login") {
            return "purple-500"
        } else {
            return "gray-500"
        }
    }

    return (
        <section>
            <div className="flex flex-col gap-4 bg-(--color-card) shadow-lg py-2 px-4 rounded-xl overflow-x-auto">
                <p className="text-xl font-bold">Recent Activity</p>
                <table className="w-full text-base whitespace-nowrap text-left">
                    <thead>
                        <tr className=" bg-(--color-primary-light)">
                            <th className="p-3">Name</th>
                            <th className="p-3">Activity</th>
                            <th className="p-3">Target</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Type</th>
                        </tr>
                     </thead>
                    <tbody>
                        {recentActivityData.map(data => 
                            <tr key={data.id}>
                                <td className="p-3">{data.user}</td>
                                <td className="p-3">{data.action}</td>
                                <td className="p-3">{data.target === null ? "N/A" : data.target}</td>
                                <td className="p-3">{data.time}</td>
                                <td className={`p-3 text-${checkColor(data.type)}`}>{data.type}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default RecentActivity;