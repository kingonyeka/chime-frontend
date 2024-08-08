import React from "react";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/navbar/sub/Menu";
import Res from "../components/navbar/sub/Res";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import AuthWrapper from "../components/dashboard/AuthWrapper";

const DashboardLayout = () => {
  return (
    <main>
      <Navbar />
      <Menu />
      <Res />
      <section className="flex flex-col h-full w-full xl:flex-row">
        <section className="bg-cyan-950 xl:w-[30%]">
          <Sidebar />
        </section>

        <section className="w-full h-full">
          <AuthWrapper>
            <Outlet />
          </AuthWrapper>
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
