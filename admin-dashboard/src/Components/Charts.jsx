import { Chart as ChartJS } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"

import orderData from "../data/orderData.json"
import salesData from "../data/salesData.json"
import categoriesData from "../data/categoriesData.json"

const Charts = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                display: false
            }
        }
    };

    const optionsCategories = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            position: "bottom"
            }
        }

    }    

    return (
        <div className="flex flex-col gap-10">
            <div className="bg-(--color-card) shadow-lg flex flex-1 flex-col gap-4 h-60 md:h-75 lg:h-100 rounded-xl p-4">
                <h3 className="font-bold text-xl">Monthly Sales</h3>
                <div className="flex-1 relative">
                    <Line
                        data={salesData}
                        options={options}
                    />
                </div>
            </div>
           <div className="flex flex-1 flex-col gap-10 md:flex-row items-center justify-center">
             <div className="bg-(--color-card) shadow-lg flex flex-col w-full gap-4 h-75 md:h-90 lg:w-0 lg:h-100 lg:flex-1 rounded-xl p-4">
                  <h3 className="font-bold text-xl">Weekly Orders</h3>
                  <div className="flex-1 relative">
                    <Bar 
                        data={orderData}
                        options={options}
                    />
                  </div>
                </div>
                <div className="bg-(--color-card) shadow-lg flex flex-col w-full gap-4 h-75 md:h-90 lg:w-0 lg:h-100 lg:flex-1 rounded-xl p-4">
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