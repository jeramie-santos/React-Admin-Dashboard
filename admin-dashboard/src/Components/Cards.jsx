const Cards = () => {
    return (
        <div className="flex gap-8 flex-col md:flex-row flex-wrap">
            <div className="flex-1">
                <div className="border h-30 rounded-lg border-gray-400 flex flex-col p-2">
                    <div className="flex-1">
                        <p>Total Users</p>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-bold text-3xl">1,245</h3>
                        <p className="text-sm">+120 new users today</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="border h-30 rounded-lg border-gray-400 flex flex-col p-2">
                    <div className="flex-1">
                        <p>Revenue</p>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-bold text-3xl">₱53,200</h3>
                        <p className="text-sm">Recurring Revenue</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="border h-30 rounded-lg border-gray-400 flex flex-col p-2">
                    <div className="flex-1">
                        <p>Order</p>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-bold text-3xl">320</h3>
                        <p className="text-sm">+5% from last week</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="border h-30 rounded-lg border-gray-400 flex flex-col p-2">
                    <div className="flex-1">
                        <p>Growth Rate</p>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-bold text-3xl">+14.5%</h3>
                        <p className="text-sm">Month over month</p>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Cards;