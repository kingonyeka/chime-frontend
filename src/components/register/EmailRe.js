import React from "react";
import ImgLogo from "../../assets/chimeLogo.jpeg";

const EmailRe = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cyan-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full border-t-4 border-cyan-500">
        <img
          src={ImgLogo}
          className="h-auto max-h-20 w-auto max-w-38 mx-auto mb-4"
          alt="Chime logo"
        />
        <h1 className="text-2xl font-bold mb-4 text-cyan-700">
          Check Your Email
        </h1>
        <p className="text-gray-600 mb-6">
          We've sent you an email to complete your registration. Please check
          your inbox and follow the instructions to verify your email address.
        </p>
        <p className="text-gray-600 mb-6">
          If you didn't receive the email, please check your spam folder as
          well.
        </p>
        <div className="flex justify-center mb-6">
          <svg
            className="animate-bounce h-6 w-6 text-cyan-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h18M9 16h6M12 19V5m0 0L7 9m5-4l5 4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EmailRe;
