const Dashboard = () => {
    return (
        <section className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col gap-8 border border-red-500 md:border-green-500 lg:border-blue-500 xl:border-yellow-500">
            <div>
                <p className="text-3xl font-bold">Dashboard</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
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
        </section>
    )
}

export default Dashboard;