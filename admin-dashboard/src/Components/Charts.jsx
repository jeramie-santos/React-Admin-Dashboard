import { Chart as ChartJS } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"

const Charts = () => {

    const orderData = { 
        labels: ["Mon", "Tue", "wed", "Thu", "Fri"],
        datasets: [
            {
                label: "Order",
                data: [13, 29, 43, 24, 49],
                backgroundColor: [
                    "rgba(0, 0, 255)",
                    "rgba(0, 255, 0)",
                    "rgba(255, 0, 0)",
                    "rgba(255, 0, 255)",
                    "rgba(0, 255, 255)",]
            }
        ]
    }

    const optionsUser = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                display: false
            }
        }
    };

    const salesData = { 
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Sales",
                data: [980, 1200, 1100, 1500, 1400, 2000, 2200, 2100, 1900, 2300, 2500, 2700],
                backgroundColor: "rgba(0, 0, 255)",
            }
        ]
    }

    const optionsOrder = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                display: false
            }
        }
    };

    const categoriesData = { 
        labels: ["Electronics", "Clothing", "Food"],
        datasets: [
            {
                label: "Categories",
                data: [40, 25, 35],
                backgroundColor: [
                    "rgba(255, 0, 0)",
                    "rgba(0, 255, 0)",
                    "rgba(0, 0, 255)"
                ],
            }
        ]
    }

    const optionsCategories = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            position: "top"
            }
        }

    }    

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-1 flex-col gap-4 h-60 md:h-75 lg:h-100 border border-gray-400 rounded-xl p-4">
                <h3 className="font-bold text-xl">Monthly Sales</h3>
                <div className="flex-1 relative">
                    <Line
                        data={salesData}
                        options={optionsUser}
                    />
                </div>
            </div>
           <div className="flex flex-1 flex-col gap-10 md:flex-row items-center justify-center">
             <div className="flex flex-col w-full gap-4 h-75 md:h-90 lg:w-0 lg:h-100 lg:flex-1 border border-gray-400 rounded-xl p-4">
                  <h3 className="font-bold text-xl">Weekly Sales</h3>
                  <div className="flex-1 relative">
                    <Bar 
                        data={orderData}
                        options={optionsOrder}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-4 h-75 md:h-90 lg:w-0 lg:h-100 lg:flex-1 border border-gray-400 rounded-xl p-4">
                  <h3 className="font-bold text-xl">Categories</h3>
                  <div className="flex-1 relative">
                    <Doughnut 
                        data={categoriesData}
                        options={optionsCategories}
                  /> 
                  </div>
                </div>
           </div>
        </div>
    )
}

export default Charts;