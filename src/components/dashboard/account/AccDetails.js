import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";
import { store } from "../../../store";
import { userFetch } from "../../utils/http";
import { insertUserDet } from "../../../features/users/UsersSlice";

const AccDetails = () => {
  const data = useLoaderData();

  // console.log(data);

  return (
    <div className="bg-cyan-900 min-h-screen text-white py-40 px-4 sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-8">Account Details</h1>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="form-input mt-1 w-full px-4 py-2 rounded-lg text-black"
              value={data?.first_name}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="form-input mt-1 w-full px-4 py-2 rounded-lg text-black"
              value={data?.last_name}
              readOnly
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
              value={data?.email}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="middleName" className="block text-sm font-semibold">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              className="form-input mt-1 w-full px-4 py-2 rounded-lg text-black"
              value={data?.middle_name}
              readOnly
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
            value={data?.address}
            readOnly
          ></textarea>
        </div>
        <div className="mt-6">
          <Link
            to={`/dashboard/edit-details?id=${data.email}`}
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Edit Details
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AccDetails;

export const userDetailsLoaderTwo = async () => {
  const state = store.getState();
  const user = state.usersState.user;

  // console.log(user);
  if (!user) {
    return redirect("/");
  }

  try {
    const res = await userFetch.get("details", {
      params: { email: user.name },
    });

    const data = res?.data;

    if (data) {
      const userDet = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        middle_name: data.middle_name || "",
      };

      store.dispatch(insertUserDet(userDet));
    }

    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return redirect("/");
  }
};
