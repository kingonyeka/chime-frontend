import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsEnvelope, BsCheckCircle } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";

const RedirectToLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-8 md:px-0">
      <div className="text-center">
        <BsCheckCircle className="text-6xl text-white mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold text-white mb-2">
          Registration Successful!
        </h2>
        <p className="text-lg text-white mb-4">
          You have successfully registered. A confirmation email will be sent to your email address.
        </p>
        <p className="text-lg text-white mb-4">
          Redirecting to the login page...
        </p>
        <FaSpinner className="animate-spin text-6xl text-white mb-4" />
        <BsEnvelope className="text-4xl text-white animate-pulse" />
      </div>
    </div>
  );
};

export default RedirectToLogin;
