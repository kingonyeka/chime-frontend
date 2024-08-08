import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Menu from "../components/navbar/sub/Menu";
import Res from "../components/navbar/sub/Res";


const Layout = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Navbar />
      <Menu />
      <Res />
      <section className="overflow-hidden">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};

export default Layout;
