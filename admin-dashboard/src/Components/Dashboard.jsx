import Cards from "./Cards";
import Charts from "./Charts";

const Dashboard = () => {
    return (
        <section className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col gap-8 border border-red-500 md:border-green-500 lg:border-blue-500 xl:border-yellow-500">
            <div>
                <p className="text-3xl font-bold">Dashboard</p>
            </div>
            <Cards />
            <Charts />
        </section>
    )
}

export default Dashboard;