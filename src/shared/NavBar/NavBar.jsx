import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../pages/hooks/useCart";
const NavBar = () => {
  const [cart] = useCart()
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>
      <li>
        <Link to={"/sectret"}>Sectret</Link>
      </li>
      <li>
        <Link to={'/'}>
        <button className="btn">
        <FaCartShopping />
        <div className="badge badge-secondary">+{cart.length}</div>
      </button></Link>
      </li>
      {user ? (
        <>
          <span className="text-xl mr-4">{user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-active btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
      {/* <li><Link to={'/menu'}>Menu</Link></li> */}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
