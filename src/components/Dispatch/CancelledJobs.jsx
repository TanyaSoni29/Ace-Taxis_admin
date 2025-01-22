/** @format */
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, MenuItem } from "@mui/material";

// Table Columns and Rows
const columns = [
  { field: "id", headerName: "#", width: 70 },
  { field: "date", headerName: "Date", width: 180 },
  { field: "pickup", headerName: "Pickup", width: 300 },
  { field: "destination", headerName: "Destination", width: 200 },
  { field: "passenger", headerName: "Passenger", width: 150 },
  { field: "pax", headerName: "Pax", width: 50 },
  { field: "cancelledBy", headerName: "Cancelled By", width: 180 },
  { field: "lastUpdated", headerName: "Last Updated", width: 180 },
  {
    field: "restore",
    headerName: "Restore",
    width: 120,
    renderCell: () => (
      <span className="text-green-500 cursor-pointer font-bold">Restore</span>
    ),
  },
];

const rows = [
  {
    id: 1,
    date: "21/01/2025 17:00:00",
    pickup: "22 Coronation Drive, Donhead St. Mary",
    destination: "Gillingham Train Station",
    passenger: "Sarah",
    pax: 1,
    cancelledBy: "Driver",
    lastUpdated: "21/01/2025 16:30:00",
  },
  {
    id: 2,
    date: "21/01/2025 16:15:00",
    pickup: "Marchant Holliday School",
    destination: "7 Platts, Lydlinch",
    passenger: "Alfred Barber",
    pax: 1,
    cancelledBy: "Customer",
    lastUpdated: "21/01/2025 15:45:00",
  },
  // Add more rows as needed
];

const CancelledJobs = () => {
  return (
    <div className="flex h-screen bg-white">

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold">Cancelled Jobs</h1>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Search by date
            </label>
            <TextField
              type="date"
              defaultValue="2025-01-21"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Search by scope
            </label>
            <TextField
              select
              defaultValue="All"
              variant="outlined"
              size="small"
              fullWidth
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Local">Local</MenuItem>
              <MenuItem value="Regional">Regional</MenuItem>
            </TextField>
          </div>
        </div>

        <div>
          <Button
            variant="contained"
            color="error"
            style={{ width: "150px", height: "40px" }}
          >
            SEARCH
          </Button>
        </div>

        {/* Jobs DataGrid */}
        <Paper sx={{ height: 500, width: "100%" }} elevation={3}>
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
				"& .MuiDataGrid-virtualScroller": {
					overflowX: "hidden",
				},
			}}
          />
        </Paper>
      </div>
    </div>
  );
};

export default CancelledJobs;
