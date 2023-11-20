import { FaAd, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom"
import useCart from "../pages/hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex ">
            {/* Dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'}><FaShoppingCart />My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}><FaCalendar />Severvation</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}><FaAd />Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/bookings'}><FaList />My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}><FaList />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}><FaList />menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard