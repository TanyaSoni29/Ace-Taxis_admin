/** @format */

import { Button, TextField, MenuItem } from "@mui/material";

const InvoiceHistory = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg border-r">
        {/* Placeholder for Sidebar */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header Section */}
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
              label="Accounts"
              variant="outlined"
              size="small"
              style={{ width: "200px" }}
            >
              <MenuItem value="all">All</MenuItem>
              {/* Add more account options here */}
            </TextField>
          </div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#333333",
              color: "#fff",
              fontWeight: "bold",
              height: "40px",
            }}
          >
            Show Invoices
          </Button>
        </div>

        {/* Available Invoices Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Available Invoices</h2>
          <div className="bg-orange-100 text-orange-700 p-4 rounded-lg flex items-center space-x-2">
            <i className="material-icons">error_outline</i>
            <span>No Data Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHistory;
