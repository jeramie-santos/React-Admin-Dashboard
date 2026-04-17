import recentActivityData from "../data/recentActivityData.json"

const RecentActivity = () => {
    const checkColor = (type) => {
        if (type == "create") {
            return "text-(--color-card-green)"
        } else if (type === "update") {
            return "text-(--color-card-blue)"
        } else if (type === "delete") {
            return "text-(--color-card-red)"
        } else if (type === "login") {
            return "text-(--color-primary)"
        } else if (type === "upload") {
            return "text-(--color-card-yellow)"
        } else {
            return "text-gray-500"
        }
    }

    return (
        <section>
            <div className="flex flex-col gap-4 bg-(--color-card) shadow-lg py-2 px-4 rounded-xl overflow-x-auto">
                <p className="text-xl font-bold">Recent Activity</p>
                <table className="w-full text-base whitespace-nowrap text-left">
                    <thead>
                        <tr>
                            <th className="p-3 text-lg">Name</th>
                            <th className="p-3 text-lg">Activity</th>
                            <th className="p-3 text-lg">Target</th>
                            <th className="p-3 text-lg">Time</th>
                            <th className="p-3 text-lg">Type</th>
                        </tr>
                     </thead>
                    <tbody>
                        {recentActivityData.map((data) => 
                            <tr key={data.id}>
                                <td className="p-3">{data.user}</td>
                                <td className="p-3">{data.action}</td>
                                <td className="p-3">{data.target === null ? "N/A" : data.target}</td>
                                <td className="p-3">{data.time}</td>
                                <td className={`p-3 ${checkColor(data.type)}`}>{data.type}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default RecentActivity;