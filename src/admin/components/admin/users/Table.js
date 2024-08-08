import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { adminCustomFetch } from "../../../../components/utils/http";
import Swal from "sweetalert2";

const Table = () => {
  const [recordsData, setRecordsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const fetchRecord = async (page, newPerPage = perPage) => {
    setLoading(true);
    try {
      const { data } = await adminCustomFetch.get(
        `users/?length=${newPerPage}&page=${page}`
      );
      const formattedData = data?.data.map((record) => ({
        ...record,
        joined_telegram: record.joined_telegram ? "True" : "False",
        verified_email: record.verified_email ? "True" : "False",
      }));
      setRecordsData(formattedData);
      setTotalRows(data?.totalRecords);
    } catch (error) {
      console.error("Error fetching records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecord(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (page) => {
    fetchRecord(page);
  };

  const handlePerRowsChange = (newPerPage, page) => {
    setPerPage(newPerPage);
    fetchRecord(page, newPerPage);
  };

  const handleBanUser = async (email) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, ban them!",
    });

    if (result.isConfirmed) {
      setLoading(true);
      try {
        await adminCustomFetch.post(`/users/ban`, { email });
        await fetchRecord(1);
        Swal.fire("Banned!", "The user has been banned.", "success");
      } catch (error) {
        console.error("Error banning user:", error);
        Swal.fire("Error!", "There was a problem banning the user.", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  const columns = [
    {
      name: "Email",
      selector: (row) => row?.email,
      width: "350px",
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row?.first_name,
      width: "350px",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row?.last_name,
      width: "350px",
      sortable: true,
    },
    {
      name: "Middle Name",
      selector: (row) => row?.middle_name,
      width: "350px",
    },
    { name: "Address", selector: (row) => row?.address, width: "350px" },
    {
      name: "Courses Purchased",
      selector: (row) => row?.courses_purchased,
      width: "350px",
    },
    {
      name: "Robots Purchased",
      selector: (row) => row?.robots_purchased,
      width: "350px",
    },
    { name: "Courses", selector: (row) => row?.courses, width: "350px" },
    {
      name: "Has User Paid (Telegram)",
      selector: (row) => row?.hasUserPaid,
      cell: (row) => (row.hasUserPaid ? "Yes" : "No"),
      width: "250px",
    },
    { name: "User ID", selector: (row) => row?.user_id, width: "350px" },
    { name: "Status", selector: (row) => row?.status, width: "350px" },
    {
      name: "Joined Telegram (Telegram)",
      selector: (row) => row?.joined_telegram,
      width: "250px",
    },
    {
      name: "Verified Email",
      selector: (row) => row?.verified_email,
      width: "100px",
    },
    // {
    //   name: "Total Amount",
    //   selector: (row) => row?.total_amount,
    //   width: "350px",
    // },
    {
      name: "Ban User",
      selector: (row) => row?.email,
      cell: (row) => (
        <button
          onClick={() => handleBanUser(row.email)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Ban
        </button>
      ),
      width: "150px",
    },
  ];

  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-lg">
      <main className="py-4">
        <DataTable
          title="User Records"
          columns={columns}
          data={recordsData}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          fixedHeader
          highlightOnHover
          pointerOnHover
          responsive
          className="w-full"
          customStyles={{
            header: {
              style: {
                minHeight: "56px",
                fontSize: "24px",
                fontWeight: "bold",
                backgroundColor: "#000",
                color: "#fff",
                padding: "12px",
              },
            },
            headRow: {
              style: {
                backgroundColor: "#f5f5f5",
              },
            },
            headCells: {
              style: {
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#000",
              },
            },
            rows: {
              style: {
                fontSize: "16px",
                color: "#000",
                backgroundColor: "#fff",
                borderBottom: "1px solid #e0e0e0",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              },
            },
            pagination: {
              style: {
                color: "#000",
                fontSize: "14px",
                minHeight: "56px",
                backgroundColor: "#fff",
                borderTop: "1px solid #e0e0e0",
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
                  backgroundColor: "#000",
                  color: "#fff",
                },
              },
            },
            progress: {
              style: {
                fontSize: "22px",
                fontWeight: "bold",
                color: "#000",
              },
            },
          }}
          noDataComponent={
            <p className="font-bold text-xl text-red-600">
              No Users for now....
            </p>
          }
          progressComponent={
            <h1 className="font-bold text-4xl text-black">
              Loading records...
            </h1>
          }
        />
      </main>
    </div>
  );
};

export default Table;
