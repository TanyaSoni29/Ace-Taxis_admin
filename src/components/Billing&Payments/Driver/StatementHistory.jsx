/** @format */

import { Button, TextField, MenuItem } from "@mui/material";

const StatementHistory = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg border-r">
        {/* Sidebar Component Placeholder */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-4">
          <div className="flex items-center space-x-4">
            <TextField
              label="Period"
              type="date"
              variant="outlined"
              size="small"
              style={{ width: "200px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <span>to</span>
            <TextField
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
              backgroundColor: "#333333",
              color: "#fff",
            }}
          >
            Show Statements
          </Button>
        </div>

        {/* Available Statements */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold">Available Statements</h2>
          <div className="bg-orange-100 text-orange-700 p-4 rounded-lg flex items-center space-x-2 mt-4">
            <i className="material-icons">error_outline</i>
            <span>No Data Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementHistory;
