import Charts from "./Charts"

const Analytics = () => {
    return(
        <div className="flex-1 flex flex-col p-4 md:p-6 lg:p-8 gap-8">
           <div>
                <p className="text-3xl font-bold">Analytics</p>
            </div>
            <div>
                <Charts />
            </div>
        </div>
    )
}

export default Analytics