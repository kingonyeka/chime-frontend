import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/chimeLogo.jpeg";
import { useDispatch } from "react-redux";
import { logoutAdminUser } from "../../../features/admin/admin_users/adminUsersSlice";
import UpLinks from "./UpLinks";
import DownLinks from "./DownLinks";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/admin/login");
    dispatch(logoutAdminUser());
  };

  return (
    <aside className="bg-black p-4 w-full lg:w-64 lg:fixed lg:inset-y-0 lg:left-0 lg:p-8">
      <div className="flex flex-col justify-center items-center space-y-8">
        <img src={Logo} alt="logo" className="h-auto max-h-20 w-auto max-w-30" />
        <UpLinks />
        <hr className="border-white border-2 my-8 w-full" />
        <DownLinks handleLogout={handleLogout} />
      </div>
    </aside>
  );
};

export default Sidebar;
