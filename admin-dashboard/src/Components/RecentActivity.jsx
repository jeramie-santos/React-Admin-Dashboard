import recentActivityData from "../data/recentActivityData.json"

const RecentActivity = () => {
    const checkColor = (type) => {
        if (type == "create") {
            return "text-(--color-card-green) bg-(--color-card-green)/15"
        } else if (type === "update") {
            return "text-(--color-card-blue) bg-(--color-card-blue)/15"
        } else if (type === "delete") {
            return "text-(--color-card-red) bg-(--color-card-red)/15"
        } else if (type === "login") {
            return "text-(--color-primary) bg-(--color-primary)/15"
        } else if (type === "upload") {
            return "text-(--color-card-yellow) bg-(--color-card-yellow)/15"
        } else {
            return "text-gray-500 bg-gray-500/15"
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
                                <td className="p-3"><span className={`${checkColor(data.type)} text-center w-fit px-4 rounded-full`}>{data.type}</span></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default RecentActivity;