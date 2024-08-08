import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { userFetch } from "../../utils/http";
import { useDispatch } from "react-redux";
import { insertUserDet } from "../../../features/users/UsersSlice";

const EditDetails = () => {
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    address: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();

  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("id");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const { data } = await userFetch.get(`details?email=${email}`);
        setUserDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [email]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      dispatch(insertUserDet(userDetails));
      await userFetch.post("details/update", userDetails);
      setUpdating(false);
      swal({
        title: "Success",
        text: "Your details have been updated successfully. Please log in again.",
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
      }).then(() => {
        window.location.href = "/login";
      });
    } catch (error) {
      setUpdating(false);
      console.error("Error updating user details:", error);
      swal({
        title: "Error",
        text: "There was an error updating your details. Please try again.",
        icon: "error",
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
            innerHTML:
              "<strong>There was an error updating your details. Please try again.</strong>",
          },
        },
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-cyan-900 min-h-screen text-white py-40 px-4 sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-8">Edit Account Details</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first_name" className="block text-sm font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="form-input mt-1 w-full px-4 py-2 rounded-lg text-black"
              value={userDetails.first_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="form-input mt-1 w-full px-4 py-2 rounded-lg text-black"
              value={userDetails.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-input mt-1 w-full px-4 py-2 rounded-lg text-black"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="middle_name"
              className="block text-sm font-semibold"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middle_name"
              className="form-input mt-1 w-full px-4 py-2 rounded-lg text-black"
              value={userDetails.middle_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-semibold">
            Address
          </label>
          <textarea
            id="address"
            className="form-textarea mt-1 w-full px-4 py-2 rounded-lg text-black"
            rows="4"
            value={userDetails.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ${
              updating ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={updating}
          >
            {updating ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                Updating...
              </div>
            ) : (
              "Update Details"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDetails;
