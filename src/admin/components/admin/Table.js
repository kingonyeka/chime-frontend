import React, { useEffect, useState } from "react";
import { adminCustomFetch } from "../../../components/utils/http";
import DataTable from "react-data-table-component";

const Table = () => {
  const [recordsData, setRecordsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const fetchRecord = async (page) => {
    setLoading(true);
    const { data } = await adminCustomFetch.get(
      `admin/?length=${perPage}&page=${page}`
    );

    const formattedData = data?.data.map((record) => ({
      ...record,
      joined_telegram: record.joined_telegram ? "True" : "False",
      verified_email: record.verified_email ? "True" : "False",
    }));

    setRecordsData(formattedData);
    setTotalRows(data?.totalRecords);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecord(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (page) => {
    fetchRecord(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    const { data } = await adminCustomFetch.get(
      `admin/?length=${newPerPage}&page=${page}`
    );

    const formattedData = data?.data.map((record) => ({
      ...record,
      joined_telegram: record.joined_telegram ? "True" : "False",
      verified_email: record.verified_email ? "True" : "False",
    }));

    setRecordsData(formattedData);
    setPerPage(newPerPage);
    setLoading(false);
  };

  const columns = [
    {
      name: "Email",
      selector: (row) => row?.email,
      width: "350px",
    },
    {
      name: "First Name",
      selector: (row) => row?.first_name,
      width: "350px",
    },
    {
      name: "Last Name",
      selector: (row) => row?.last_name,
      width: "350px",
    },
    {
      name: "Middle Name",
      selector: (row) => row?.middle_name,
      width: "350px",
    },
    {
      name: "Address",
      selector: (row) => row?.address,
      width: "350px",
    },
    {
      name: "User ID",
      selector: (row) => row?.user_id,
      width: "250px",
    },
    {
      name: "Status",
      selector: (row) => row?.status,
      width: "100px",
    },
    {
      name: "Joined Telegram",
      selector: (row) => row?.joined_telegram,
      width: "150px",
    },
    {
      name: "Verified Email",
      selector: (row) => row?.verified_email,
      width: "150px",
    },
    {
      name: "Role",
      selector: (row) => row?.role_name,
      width: "200px",
    },
  ];

  return (
    <div className="w-full p-4">
      <main className="py-4">
        <DataTable
          columns={columns}
          data={recordsData}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          noDataComponent={
            <p className="font-bold text-xl text-red-600">No Admins for now</p>
          }
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          fixedHeader
          expandableRowDisabled={(row) => row.disabled}
          className="w-full"
          customStyles={{
            header: {
              style: {
                minHeight: "56px",
                fontSize: "22px",
                fontWeight: "bold",
                backgroundColor: "#007bff",
                color: "white",
              },
            },
            headRow: {
              style: {
                backgroundColor: "#e3f2fd",
              },
            },
            headCells: {
              style: {
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
              },
            },
            rows: {
              style: {
                minHeight: "72px",
                fontSize: "16px",
              },
            },
            pagination: {
              style: {
                color: "#007bff",
                fontSize: "14px",
                minHeight: "56px",
              },
              pageButtonsStyle: {
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                padding: "8px",
                margin: "5px",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#007bff",
                  color: "white",
                },
              },
            },
            progress: {
              style: {
                fontSize: "22px",
                fontWeight: "bold",
                color: "#007bff",
              },
            },
          }}
          progressComponent={
            <h1 className="font-bold text-4xl text-blue-600">
              Loading records...
            </h1>
          }
        />
      </main>
    </div>
  );
};

export default Table;
