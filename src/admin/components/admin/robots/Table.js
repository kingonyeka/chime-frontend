import React, { useEffect, useState, useCallback, useMemo } from "react";
import DataTable from "react-data-table-component";
import { adminCustomFetch } from "../../../../components/utils/http";
import { Link } from "react-router-dom";

const Table = () => {
  const [recordsData, setRecordsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const fetchRecord = useCallback(
    async (page) => {
      setLoading(true);
      try {
        const { data } = await adminCustomFetch.get(
          `robots?length=${perPage}&page=${page}`
        );

        setRecordsData(data?.data);
        setTotalRows(data?.totalRecords);
      } catch (error) {
        console.error("Failed to fetch records", error);
      } finally {
        setLoading(false);
      }
    },
    [perPage]
  );

  useEffect(() => {
    fetchRecord(1);
  }, [fetchRecord]);

  const handlePageChange = (page) => {
    fetchRecord(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    try {
      const { data } = await adminCustomFetch.get(
        `robots?length=${newPerPage}&page=${page}`
      );

      setRecordsData(data?.data);
      setPerPage(newPerPage);
    } catch (error) {
      console.error("Failed to fetch records", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = useMemo(
    () => [
      {
        name: "Title",
        selector: (row) => row?.title,
        width: "250px",
      },
      {
        name: "Price",
        selector: (row) => `USD${row?.usd}`,
      },
      {
        name: "Update",
        cell: (row) => (
          <Link
            to={`/admin/update/robot/${row?.slug}`}
            className="text-decoration-none"
          >
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Update
            </button>
          </Link>
        ),
      },
    ],
    []
  );
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
            <p className="font-bold text-xl text-red-600">No Robots for now</p>
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
