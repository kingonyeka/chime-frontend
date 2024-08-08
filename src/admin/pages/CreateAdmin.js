import React from "react";
import NoAdmin from "../components/admin/NoAdmin";
import Create from "../components/admin/Create";
import Table from "../components/admin/Table";

const CreateAdmin = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-cyan-50 py-10">
      <NoAdmin />
      <div>
        <Create />
      </div>
      <div className="w-full max-w-5xl mt-6 bg-white rounded-lg shadow-md p-6">
        {/* Table component or content will go here */}
        <Table />
      </div>
    </div>
  );
};

export default CreateAdmin;
