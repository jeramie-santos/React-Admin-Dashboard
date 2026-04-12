const Analytics = () => {
    return(
        <div className="flex-1 flex flex-col p-4 md:p-6 lg:p-8 gap-8 border border-red-500 md:border-green-500 lg:border-blue-500 xl:border-yellow-500">
           <div>
                <p className="text-3xl font-bold">Analytics</p>
            </div>
            <div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold">Chart</h2>
                    <div className="border h-60 rounded-lg bg-gray-400"></div>
                </div>
            </div>
        </div>
    )
}

export default Analytics