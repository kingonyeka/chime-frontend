import React from "react";
import { formatPrice } from "../utils/utils";

const UserCheckout = ({
  userData,
  userDetails,
  localStorageUser,
  country,
  totalAmount,
}) => {
const formatP = formatPrice(totalAmount)
  return (
    <div className="mb-8">
      <section>
        <div className="mb-4 text-gray-500">
          <div className="flex items-center space-x-2">
            <label className="block text-sm mb-2">
              <i className="fa fa-user-circle"></i> {userData?.last_name}
            </label>
            <label className="block text-sm mb-2">
              <i className="fa fa-user-circle"></i>{" "}
              {userData?.middle_name || ""}
            </label>
            <label className="block text-sm mb-2">
              <i className="fa fa-user-circle"></i> {userData?.first_name}
            </label>
          </div>

          <p className="text-xs">{userDetails?.address}</p>
          <p className="text-xs">{localStorageUser?.name}</p>
        </div>

        <div className="text-right">
          <label className="block text-sm mb-2">Total Price</label>
          <p className="text-lg font-bold">
            {country === "Nigeria" ? "NGN" : "USD"}
            {formatP}
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserCheckout;
