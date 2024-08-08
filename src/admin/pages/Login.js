import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthImg from "../../assets/autimg.jpg";
import Logo from "../../assets/chimeLogo.jpeg";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { adminAuthFetch } from "../../components/utils/http";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/admin/admin_users/adminUsersSlice";



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      
      const { data } = await adminAuthFetch.post('login', { email: trimmedEmail, password: trimmedPassword });

      if (data?.code !== 200) {
        toast.warn('Invalid email and password');
        setErrorMessage("Invalid email or password");
      } else {
        const payload = {
          user: email,
          tokens: data?.data,
        };
        dispatch(loginUser(payload));

        toast.success("Logged in successfully");
        navigate("/admin");
      
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error('An error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-900">
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
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
            Admin Login
          </h2>
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`form-input mt-1 block w-full border outline-none py-2 px-4 rounded ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'border-blue-500 focus:border-blue-700'
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`form-input mt-1 block w-full border outline-none py-2 px-4 rounded ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'border-blue-500 focus:border-blue-700'
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
                  onClick={handleTogglePassword}
                  disabled={loading}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className={`bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition duration-300 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:text-blue-700"
            >
              Forgot your password?
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Login;
