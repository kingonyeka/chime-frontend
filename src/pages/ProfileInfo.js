import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Logo from "../assets/chimeLogo.jpeg";
import { useNavigate } from "react-router-dom";
import { authFetch } from "../components/utils/http";
import { useDispatch } from "react-redux";
import { insertUserDet, loginUser } from "../features/users/UsersSlice";
import { FaSpinner } from "react-icons/fa";

const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    address: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const tokenParam = urlParams.get("token");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const verifyToken = async (token) => {
      try {
        const { data } = await authFetch.post("confirm-token", { token });

        if (data?.code !== 200) {
          navigate("/");
        }
      } catch (error) {
        navigate("/");
      }
    };

    if (!tokenParam) {
      navigate("/");
    } else {
      verifyToken(tokenParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Valid Email is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const { data } = await authFetch.post(
          "details",
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            middle_name: formData.middleName,
            address: formData.address,
            email: formData.email,
          },
          {
            headers: {
              Authorization: `Bearer ${tokenParam}`,
            },
          }
        );
        if (data.code === 200) {
          const payload = {
            user: formData.email,
            tokens: data?.data,
          };
          const userDet = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            middle_name: formData.middleName,
            address: formData.address,
            email: formData.email,
          };
          dispatch(insertUserDet(userDet));
          dispatch(loginUser(payload));
          navigate("/redirect-to-dashboard?user=true");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    tokenParam && (
      <div className="min-h-screen flex flex-col justify-center items-center bg-cyan-900 px-8 md:px-0">
        <div className="w-full md:max-w-4xl p-8 rounded-lg shadow-lg bg-white">
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center mb-4 -space-x-4">
              <img
                src={Logo}
                className="h-auto max-h-20 w-auto max-w-full mr-2"
                alt="Chime Trading Academy Logo"
              />
              <p className="text-gray-600">Trading Academy</p>
            </div>
            <div className="flex items-center">
              <FaUser className="text-4xl text-blue-500 mr-2" />
              <h2 className="text-2xl font-bold capitalize">
                Fill this form to complete with your registration
              </h2>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName" className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`form-input mt-1 block w-full border border-cyan-900 rounded focus:outline-none ${
                  errors.firstName ? "border-red-500" : "focus:border-blue-500"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`form-input mt-1 block w-full border border-cyan-900 rounded focus:outline-none ${
                  errors.lastName ? "border-red-500" : "focus:border-blue-500"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label htmlFor="middleName" className="block text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="form-input mt-1 block w-full border border-cyan-900 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`form-textarea mt-1 block w-full border border-cyan-900 rounded focus:outline-none ${
                  errors.address ? "border-red-500" : "focus:border-blue-500"
                }`}
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email used in registration
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input mt-1 block w-full border border-cyan-900 rounded focus:outline-none ${
                  errors.email ? "border-red-500" : "focus:border-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-cyan-900 hover:bg-cyan-600 text-white px-4 py-2 rounded focus:outline-none flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ProfileInfo;