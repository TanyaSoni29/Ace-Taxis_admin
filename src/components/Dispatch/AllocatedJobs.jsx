/** @format */
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, MenuItem } from "@mui/material";

// Table Columns and Rows
const columns = [
  { field: "id", headerName: "#", width: 50 },
  { field: "date", headerName: "Date", width: 180 },
  { field: "driver", headerName: "Driver #", width: 150 },
  { field: "pickup", headerName: "Pickup", width: 300 },
  { field: "destination", headerName: "Destination", width: 300 },
  { field: "passenger", headerName: "Passenger", width: 200 },
  { field: "pax", headerName: "Pax", width: 100 },
  { field: "lastUpdated", headerName: "Last Updated", width: 100 },
];

const rows = [
  {
    id: 1,
    date: "21/01/2025 17:00:00",
    driver: "D1001",
    pickup: "22 Coronation Drive, Donhead St. Mary",
    destination: "Gillingham Train Station",
    passenger: "Sarah",
    pax: 1,
    lastUpdated: "21/01/2025 16:30:00",
  },
  {
    id: 2,
    date: "21/01/2025 16:15:00",
    driver: "D1002",
    pickup: "Marchant Holliday School",
    destination: "7 Platts, Lydlinch",
    passenger: "Alfred Barber",
    pax: 1,
    lastUpdated: "21/01/2025 15:45:00",
  },
  // Add more rows as needed
];

const AllocatedJobs = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 px-10 py-8 space-y-6 ml-4">
        {/* Header */}
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-800">Allocated Jobs</h1>
        </div>

        {/* Filters Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Filters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Search by Date
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
                Search by Scope
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
          <div className="mt-4">
            <Button
              variant="contained"
              color="primary"
              style={{ width: "150px", height: "40px" }}
            >
              Search
            </Button>
          </div>
        </div>

        {/* Jobs DataGrid */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Jobs</h2>
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
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "#f9fafb",
                },
              }}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default AllocatedJobs;
