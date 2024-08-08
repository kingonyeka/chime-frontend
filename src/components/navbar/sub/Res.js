import { FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useNavLinkCtx } from "../../../contexts/navLinkContext";
import navData from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../features/users/UsersSlice";
import { useEffect } from "react";

const Res = () => {
  const { isSidebarOpen, closeSidebar, handleNavLinkClick } = useNavLinkCtx(); // Destructure handleNavLinkClick from context
  const user = useSelector((state) => state.usersState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
  };

  useEffect(() => {}, [user]);

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar z-50" : "sidebar z-50"}>
      <div className="sidebar-container z-50">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links py-10">
          {navData.map((item) => {
            const { links, page, pageID } = item;
            return (
              <article key={pageID}>
                <h4 className="uppercase">{page}</h4>
                <div className="sidebar-sublinks">
                  {links &&
                    links.map((link) => {
                      const { url, icon, label, id } = link;
                      return (
                        <a key={id} href={url} onClick={handleNavLinkClick}> {/* Attach handleNavLinkClick to onClick */}
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        {user && user.name && user.token && user.rToken  ? <div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="capitalize text-sm text-700 border px-8 py-2 border-cyan-700 rounded-md transition-all duration-500 hover:text-white hover:bg-cyan-900 md:text-lg"
                >
                  Logout
                </button>
              </div> :  <div>
          <a
            href="/login"
            className="capitalize text-sm text-700 border px-8 py-2 border-cyan-700 rounded-md transition-all duration-500 hover:text-white hover:bg-cyan-900 md:text-lg"
          >
            Login
          </a>
        </div>}
       
        {user && user.name && user.token && user.rToken  ?  <NavLink
      to={'/dashboard'} 
      className="capitalize text-sm text-700 bg-cyan-900 text-white px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700 md:text-lg"
    >
      Dashboard
    </NavLink>  :
        <div>
          <a
            href="/register"
            className="capitalize text-sm text-700 bg-cyan-900 text-white px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700 md:text-lg"
          >
            Register
          </a>
        </div>}
      
      </div>
    </aside>
  );
};
export default Res;
