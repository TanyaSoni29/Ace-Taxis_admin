/** @format */

import Sidebar from "../Sidebar/Sidebar";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import EmailIcon from "@mui/icons-material/Email";

// Table Columns
const columns = [
  { field: "id", headerName: "#", width: 100 },
  { field: "date", headerName: "Date", width: 200 },
  { field: "driver", headerName: "Driver #", width: 150 },
  { field: "pickup", headerName: "Pickup", width: 300 },
  { field: "passenger", headerName: "Passenger", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "payment", headerName: "Payment #", width: 350 },
  {
    field: "reminder",
    headerName: "Reminder",
    width: 100,
    renderCell: () => <EmailIcon color="primary" />,
  },
];

// Table Rows
const rows = [
  {
    id: 82685,
    date: "08/08/2025 23:30:00",
    driver: "N/A",
    pickup: "Pythouse Kitchen Gardens",
    passenger: "Sophie Price",
    status: "Pending",
    payment: "677ba9e8-14e0-aca1-894f-d5f37640191b",
  },
  {
    id: 86647,
    date: "23/01/2025 08:00:00",
    driver: "N/A",
    pickup: "80 Blackmore Road, Shaftesbury, Dorset",
    passenger: "Carina",
    status: "Pending",
    payment: "678e04f4-da10-af47-b4f5-8ba5b56692ad",
  },
  {
    id: 81738,
    date: "31/12/2024 22:00:00",
    driver: "18",
    pickup: "6 Kingfisher Avenue, Gillingham, Dorset",
    passenger: "Anna",
    status: "Pending",
    payment: "67741873-2437-a05f-90e9-9890083e593c",
  },
  {
    id: 80361,
    date: "24/12/2024 11:50:00",
    driver: "N/A",
    pickup: "Sibford, Church Hill, Marnhull, Sturminster Newton, Dorset",
    passenger: "Sema",
    status: "Pending",
    payment: "676aa4d9-4128-ae25-827b-8e04ad7829aa",
  },
  // Add more rows as necessary
];

const CardBooking = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-white ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Card Bookings</h1>
        </div>

        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 p-2 rounded-md "
          />
        </div>

        {/* Data Table */}
        <Paper sx={{ height: 600, width: "80%" }} elevation={3}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f5f5f5",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#f5f5f5",
              },
            }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default CardBooking;
