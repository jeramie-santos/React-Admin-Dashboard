import { faArrowTrendUp, faBoxOpen, faDollar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = () => {
    return (
        <div className="flex gap-8 flex-col md:flex-row flex-wrap">
            <div className="flex-1">
                <div className="flex flex-col p-4 gap-4 bg-(--color-card) shadow-lg rounded-lg">
                    <div className="flex justify-between items-center">
                        <p>Total Users</p>
                        <FontAwesomeIcon icon={faUser} className="text-2xl text-(--color-sidebar)"/>
                    </div>
                    <div className="flex-1 flex flex-col gap-1 justify-end">
                        <h3 className="font-bold text-3xl">1,245</h3>
                        <p className="text-sm text-(--color-sidebar)">+120 new users today</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col p-4 gap-4 bg-(--color-card) shadow-lg rounded-lg">
                    <div className="flex items-center justify-between">
                        <p>Revenue</p>
                        <FontAwesomeIcon icon={faDollar} className="text-2xl text-(--color-sidebar)"/>
                    </div>
                    <div className="flex-1 flex flex-col gap-1 justify-end">
                        <h3 className="font-bold text-3xl">₱53,200</h3>
                        <p className="text-sm text-(--color-sidebar)">Recurring Revenue</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col p-4 gap-4 bg-(--color-card) shadow-lg rounded-lg">
                    <div className="flex items-center justify-between">
                        <p>Order</p>
                        <FontAwesomeIcon icon={faBoxOpen} className="text-2xl text-(--color-sidebar)"/>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-bold text-3xl">320</h3>
                        <p className="text-sm text-(--color-sidebar)">+5% from last week</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col p-4 gap-4 bg-(--color-card) shadow-lg rounded-lg">
                    <div className="flex items-center justify-between">
                        <p>Growth Rate</p>
                        <FontAwesomeIcon icon={faArrowTrendUp} className="text-2xl text-(--color-sidebar)"/>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-bold text-3xl">+14.5%</h3>
                        <p className="text-sm text-(--color-sidebar)">Month over month</p>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Cards;