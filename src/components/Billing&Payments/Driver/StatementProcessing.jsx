/** @format */

import { Button, TextField, MenuItem } from "@mui/material";

const StatementProcessing = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg border-r">
        {/* Sidebar Component */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-4">
          <div className="flex items-center space-x-4">
            <TextField
              label="Last Date Included"
              type="date"
              variant="outlined"
              size="small"
              style={{ width: "200px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              select
              label="Driver"
              variant="outlined"
              size="small"
              style={{ width: "200px" }}
            >
              <MenuItem value="all">All</MenuItem>
              {/* Add more driver options */}
            </TextField>
          </div>
          <Button
            variant="contained"
            style={{
              height: "40px",
              backgroundColor: "#ff5252",
              color: "#fff",
            }}
          >
            Show Jobs
          </Button>
        </div>

        {/* Awaiting Pricing Section */}
        <div className="bg-white shadow rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Awaiting Pricing - 0</h2>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                height: "40px",
              }}
            >
              Post All Priced
            </Button>
          </div>
          <div className="bg-orange-100 text-orange-700 p-4 rounded-lg flex items-center space-x-2">
            <i className="material-icons">error_outline</i>
            <span>No Data Available</span>
          </div>
        </div>

        {/* Ready for Processing Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Ready for Processing - 0</h2>
          <div className="bg-orange-100 text-orange-700 p-4 rounded-lg flex items-center space-x-2">
            <i className="material-icons">error_outline</i>
            <span>No Data Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementProcessing;
