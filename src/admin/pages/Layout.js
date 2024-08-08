import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 lg:ml-64 bg-black">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
