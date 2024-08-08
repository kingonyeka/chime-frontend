import React, { useEffect, useState } from "react";
import { adminCustomFetch } from "../../../components/utils/http";

const NoAdmin = () => {
  const [noOfAdmins, setNoOfAdmins] = useState(0);

  useEffect(() => {
    const fetchNo = async () => {
      try {
        const { data } = await adminCustomFetch.get("admin/");
        setNoOfAdmins(data?.totalRecords);
      } catch (error) {
        console.error("Failed to fetch number of admins", error);
      }
    };

    fetchNo();
  }, []);

  return (
    <div className="flex justify-center items-center bg-cyan-50 py-10">
      <div className="max-w-xs w-full bg-white rounded-lg shadow-md p-6 m-4">
        <div className="flex items-center justify-between space-x-6">
          <div className="text-lg font-semibold text-gray-700">
            Number of Admins
          </div>
          <div className="flex items-center justify-center bg-cyan-900 text-white rounded-full h-12 w-12">
            {noOfAdmins}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAdmin;
