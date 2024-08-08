import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { pswrFetch } from "../components/utils/http";
import { MdEmail } from "react-icons/md";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await pswrFetch.post("request-reset", { email });

      if (data.code === 401) {
        setError("email not found");
        toast.error("email not found, please input a valid email address");
      } else if (data.code === 200) {
        setSearchParams({ "reset-link-sent": "true" });
        toast.success("Email sent! Check your inbox for further instructions.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetLinkSent = searchParams.get("reset-link-sent");

  return (
    <>
      {resetLinkSent ? (
        <section className="py-40 bg-cyan-100 border-t-4 border-cyan-900">
          <div className="container mx-auto ">
            <div className="bg-white p-8 rounded-md shadow-md">
              <div className="text-green-500 text-center mb-4 flex items-center justify-center">
                <MdEmail className="text-3xl mr-3" />
                <p className='text-cyan-900'>
                  A password reset email has been sent to the email address on
                  file for your account, but may take several minutes to show up
                  in your inbox. Please wait at least 10 minutes before
                  attempting another reset.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-40 bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Forgot your password?
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Please enter your email address. You will receive a link to create
              a new password via email.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 focus:border-cyan-900 focus:ring-cyan-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-cyan-900 text-white rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50 flex justify-center items-center"
                  disabled={isLoading || !validateEmail(email)}
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
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default ForgotPassword;
