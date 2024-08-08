import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/chimeLogo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="footer-section">
            <Link to="about-us" className="text-lg font-bold mb-4 text-white">
              About us
            </Link>
          </div>

          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Courses</h3>
            <Link to="/forex-trading" className="block mb-2 text-white">
              forex trading
            </Link>
            <Link to="/crypto-trading" className="block mb-2 text-white">
              crypto trading
            </Link>
            <Link to="/stock-trading" className="block mb-2 text-white">
              stock trading
            </Link>
            <Link to="/commodities-trading" className="block mb-2 text-white">
              commodity trading
            </Link>
            {/* <Link to="/" className="block mb-2 text-white">
              FTMO course
            </Link> */}
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Robots</h3>
            <Link to="/forex-robots" className="block mb-2 text-white">
              forex robots
            </Link>
            <Link to="/commodities-robots" className="block mb-2 text-white">
              commodities robots
            </Link>
            <Link to="/crypto-robots" className=" block mb-2 text-white">
              crypto robots
            </Link>
            {/* <Link to="/" className="block mb-2 text-white">
              prop robots
            </Link> */}
          </div>

          <div className="footer-section">
            <Link
              to="/contact-us"
              className="text-lg font-bold mb-4 text-white"
            >
              Contact Us
            </Link>
          </div>

          <div className="footer-section">
            <Link to="/" className="text-lg font-bold mb-4 text-white">
              Signals
            </Link>
          </div>
        </div>

        <div className="footer-section flex justify-center py-8">
          <Link to="/">
            <img
              src={Logo}
              alt="company logo"
              className="h-auto max-h-20 w-auto max-w-38"
            />
          </Link>
        </div>
        <div className="text-center mt-6 md:mt-10">
          <p className="text-sm">
            &copy; 2024 Chime Raison Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
