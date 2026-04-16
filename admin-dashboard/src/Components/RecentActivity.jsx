import recentActivityData from "../data/recentActivityData.json"

const RecentActivity = () => {

    console.log(recentActivityData);
    
    const checkColor = (type) => {
        if (type == "create") {
            return "bg-(--color-card-green)/20"
        } else if (type === "update") {
            return "bg-(--color-card-blue)/20"
        } else if (type === "delete") {
            return "bg-(--color-card-red)/20"
        } else if (type === "login") {
            return "bg-(--color-primary)/20"
        } else if (type === "upload") {
            return "bg-(--color-card-yellow)/20"
        } else {
            return "bg-gray-500/20"
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
                        {recentActivityData.map((data, index) => 
                            <tr key={data.id} className={index % 2 === 0 ? "bg-(--color-bg)" : "bg-white"}>
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