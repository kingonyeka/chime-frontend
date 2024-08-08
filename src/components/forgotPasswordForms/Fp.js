import React, { useState, useEffect } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { pswrFetch } from "../../components/utils/http";

const Fp = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const tokenParam = urlParams.get("token");

  useEffect(() => {
    const verifyToken = async (token) => {
      try {
        const { data } = await pswrFetch.get(`verify-token?token=${token}`);
        if (data?.code === 401) {
          swal({
            title: "Token Expired",
            text: "This link has expired for security reasons. Please request a new password reset.",
            icon: "warning",
            buttons: {
              confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "",
                closeModal: true,
              },
            },
            content: {
              element: "p",
              attributes: {
                innerHTML: '<strong>This link has expired for security reasons. Please request a new password reset.</strong>',
              },
            },
          }).then(() => {
            navigate("/forgot-password");
          });
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
  }, [tokenParam, navigate]);

  const handleNewPasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    if (password.length < 8) {
      setValidationError("Password should be at least 8 characters long");
    } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      setValidationError("Password should contain at least one letter and one number");
    } else {
      setValidationError("");
    }
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const response = await pswrFetch.post("reset", {
        token: tokenParam,
        new_password: newPassword,
        confirm_password: confirmNewPassword,
      });

      if (response.data.code === 200) {
        swal({
          title: "Success",
          text: "Password reset was successful. Please log in with your new password.",
          icon: "success",
          buttons: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "",
              closeModal: true,
            },
          },
          content: {
            element: "p",
            attributes: {
              innerHTML: '<strong>Password reset was successful. Please log in with your new password.</strong>',
            },
          },
        }).then(() => {
          navigate("/login");
        });
      } else {
        throw new Error("Password reset failed");
      }

      setIsLoading(false);
    } catch (err) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Reset Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                className="form-input mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 focus:border-cyan-900 focus:ring-cyan-900"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <HiEyeOff className="text-gray-400" />
                ) : (
                  <HiEye className="text-gray-400" />
                )}
              </div>
            </div>
            {validationError && (
              <p className="text-red-500 text-sm mt-1">{validationError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmNewPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmNewPassword"
                className={`form-input mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 focus:border-${
                  newPassword === confirmNewPassword ? "green" : "red"
                }-500 focus:ring-${
                  newPassword === confirmNewPassword ? "green" : "red"
                }-500`}
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
                required
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <HiEyeOff className="text-gray-400" />
                ) : (
                  <HiEye className="text-gray-400" />
                )}
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-cyan-900 text-white rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
              disabled={!newPassword || !confirmNewPassword || isLoading}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Fp;
