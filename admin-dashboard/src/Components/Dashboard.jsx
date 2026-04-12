const Dashboard = () => {
    return (
        <div className="py-2 px-4 flex flex-col gap-8">
            <div>
                <p className="text-3xl font-bold">Dashboard</p>
            </div>
            <div className="grid gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold">Title</h2>
                    <div className="border h-60 rounded-lg bg-gray-400"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold">Title</h2>
                    <div className="border h-60 rounded-lg bg-gray-400"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold">Title</h2>
                    <div className="border h-60 rounded-lg bg-gray-400"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold">Title</h2>
                    <div className="border h-60 rounded-lg bg-gray-400"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;