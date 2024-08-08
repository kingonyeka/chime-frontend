import React, { useEffect } from "react";
import Logo from "../../assets/chimeLogo.jpeg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartBtn from "../cart/cart-btn/CartBtn";
import navData from "../utils/utils";
import { useNavLinkCtx } from "../../contexts/navLinkContext";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/users/UsersSlice";

const Navbar = () => {
  const { setPageId, openSidebar } = useNavLinkCtx();
  const user = useSelector((state) => state.usersState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");

    dispatch(logoutUser());
  };

  useEffect(() => {}, [user]);

  return (
    <>
      <div className="bg-white hidden navbar items-center justify-between w-full py-4 px-8 shadow-sm fixed z-10 lg:flex">
        {/* logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              className="h-auto max-h-20 w-auto max-w-38"
              alt="chime logo"
            />
          </Link>
          <Link to="/" className="text-sm font-bold text-gray-700">
            Chime Trading Academy
          </Link>
        </div>

        {/* nav links */}
        <div className="nav-links flex items-center space-x-10">
          {navData.map((link) => {
            return (
              <NavLink
                to={link.pageURL} // Update this if needed
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "text-cyan-950 capitalize text-sm transition-colors duration-300 hover:text-blue-900 md:text-lg"
                    : isPending
                    ? "animate-bounce text-cyan-700 capitalize text-sm transition-colors duration-300 hover:text-blue-900 md:text-lg"
                    : "text-cyan-700 capitalize text-sm transition-colors duration-300 hover:text-blue-900 md:text-lg";
                }}
                key={link.pageID}
                onMouseEnter={() => setPageId(link.pageID)}
              >
                {link.page}
              </NavLink>
            );
          })}
        </div>

        {/* cart btn and auth btn */}
        <div className="flex items-center justify-center space-x-8">
          <CartBtn />
          {/* auth */}
          <div className="flex items-center justify-center space-x-4">
            {user && user.token && user.rToken ? (
              <div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="capitalize text-sm text-700 border px-8 py-2 border-cyan-700 rounded-md transition-all duration-500 hover:text-white hover:bg-cyan-900 md:text-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="capitalize text-sm text-700 border px-8 py-2 border-cyan-700 rounded-md transition-all duration-500 hover:text-white hover:bg-cyan-900 md:text-lg"
                >
                  Login
                </Link>
              </div>
            )}

            <div>
              {user && user.token && user.rToken ? (
                <NavLink
                  to={"/dashboard"}
                  className="capitalize text-sm text-700 bg-cyan-900 text-white px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700 md:text-lg"
                >
                  Dashboard
                </NavLink>
              ) : (
                <div>
                  <Link
                    to="/register"
                    className="capitalize text-sm text-700 bg-cyan-900 text-white px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700 md:text-lg"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-8 xl:hidden lg:hidden">
        <div className="flex items-center flex-col py-2">
          <Link to="/">
            <img
              src={Logo}
              className="h-auto max-h-20 w-auto max-w-38"
              alt="chime logo"
            />
          </Link>
          <Link to="/" className="text-sm font-bold text-gray-700">
            Chime Trading Academy
          </Link>
        </div>

        <div>
          <CartBtn />
        </div>

        <button className="toggle-btn text-xl" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Navbar;
