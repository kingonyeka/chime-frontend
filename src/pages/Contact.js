import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center py-20 xl:py-40">
      <div className="w-full max-w-6xl bg-white py-12 px-8 rounded-lg shadow-2xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-cyan-800 mb-4">Contact Us</h1>
          <p className="text-cyan-600 text-xl">
            We'd love to hear from you! Reach out to us and we'll respond as quickly as possible.
          </p>
        </header>
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-6 md:mb-0 md:w-1/2 md:mr-6">
            <div className="flex items-center mb-4">
              <FaPhone className="text-cyan-800 text-2xl mr-3" />
              <span className="text-gray-700 text-lg font-medium">+2348130528379</span>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-cyan-800 text-2xl mr-3" />
              <span className="text-gray-700 text-lg font-medium">+2348182152632</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-cyan-800 text-2xl mr-3" />
              <span className="text-gray-700 text-lg font-medium">
                chimesupport@chimetrading.com
              </span>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-6">
            <p className="text-gray-700 text-lg mb-4">
              For any inquiries or issues, please feel free to contact us through the phone numbers or email address listed. Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <p className="text-gray-700 text-lg">
              We strive to provide quick and efficient responses to ensure you have the best experience with our services. Thank you for choosing Chime Trading!
            </p>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-cyan-800 mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/chimetrading/?igsh=MXYxZHZ5ZzRkOGN4ZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-cyan-800 text-4xl hover:text-cyan-600 transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@chimetrading?_t=8nVI5lSTc97&_r=1" target="_blank" rel="noopener noreferrer" className="text-cyan-800 text-4xl hover:text-cyan-600 transition-transform transform hover:scale-110">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-cyan-800 mb-4">Refund Policy</h2>
          <p className="text-gray-700 text-lg">
            At Chime Trading, we value customer satisfaction. If you are not satisfied with our course within 5 hours of purchase, we will refund your money immediately upon confirmation. This ensures a risk-free experience for our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
