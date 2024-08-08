import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthImg from "../assets/autimg.jpg";
import Logo from "../assets/chimeLogo.jpeg";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authFetch } from "../components/utils/http";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/users/UsersSlice";

const Auth = () => {
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password should be at least 8 characters long";
    } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      errors.password =
        "Password should contain at least one letter and one number";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        const payload = {
          email,
          password,
        };

        if (isRegisterPage) {
          const { data } = await authFetch.post("signup", payload);

        //   console.log(data);
          if (data.code === 401) {
            toast.warn("User already exist!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          if (data.code === 200) {
            toast.success("Registration successful");
            navigate("/registration/proceed");
          }
        } else {
          const { data } = await authFetch.post("login", payload);

          if (data.code === 401) {
            toast.error("Invalid email or password", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          if (data.code === 200) {
            const payload = {
              user: email,
              tokens: data?.data,
            };
            dispatch(loginUser(payload));

            toast.success("Logged in successfully");
            navigate("/dashboard");
          }
        }
      } catch (error) {
        toast.error("Invalid email or password");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
      <section className="hidden relative w-full lg:w-1/2 overflow-hidden xl:flex">
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
        <motion.img
          src={AuthImg}
          alt="Authentication Image"
          className="object-cover w-full h-screen"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="w-full lg:w-1/2 p-8 flex flex-col items-center mt-8 lg:mt-0 z-20 relative">
        <div className="mb-6">
          <img
            src={Logo}
            alt="logo"
            className="h-auto mx-auto max-h-20 w-auto max-w-38"
          />
        </div>
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            {isRegisterPage ? "Register" : "Login"}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`form-input mt-1 block w-full border outline-none py-2 px-6 ${
                  errors.email ? "border-red-500" : "border-cyan-500"
                } rounded`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`form-input mt-1 block w-full border outline-none py-2 px-6 ${
                    errors.password ? "border-red-500" : "border-cyan-500"
                  } rounded`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {!isRegisterPage && (
              <div className="text-center mt-4">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Forgot your password?
                </Link>
              </div>
            )}
            <div className="flex items-center mt-4">
              {isRegisterPage ? (
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                      ></path>
                    </svg>
                  ) : (
                    "Register"
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                      ></path>
                    </svg>
                  ) : (
                    "Login"
                  )}
                </button>
              )}
            </div>
          </form>
          {!isRegisterPage && (
            <div className="mt-4">
              <Link
                to="/register"
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                Create an account
              </Link>
            </div>
          )}
          {isRegisterPage && (
            <div className="mt-4">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:text-blue-600">
                  Login
                </Link>
              </p>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Auth;
