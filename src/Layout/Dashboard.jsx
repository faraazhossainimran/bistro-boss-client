import {
  FaAd,
  FaBook,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaCalendar, FaList, FaVoicemail } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../pages/hooks/useCart";
import useAdmin from "../pages/hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // get isAdmin value from the database
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div className="flex ">
      {/* Dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar />
                  Severvation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaAd />
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaList />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaList />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaList />
              menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <FaVoicemail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
