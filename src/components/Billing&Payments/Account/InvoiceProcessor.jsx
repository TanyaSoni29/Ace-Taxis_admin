/** @format */

import { Button, TextField, MenuItem, Switch, FormControlLabel } from "@mui/material";

const InvoiceProcessor = () => {
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
              label="Select Date Range"
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
              {/* Add more account options */}
            </TextField>
          </div>
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Auto Email Invoices"
            labelPlacement="start"
          />
        </div>

        {/* Show Jobs Button */}
        <div className="bg-white shadow rounded-lg p-4">
          <Button
            variant="contained"
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#4caf50",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Show Jobs
          </Button>
        </div>

        {/* Awaiting Pricing Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold">Awaiting Pricing - 0</h2>
          <Button
            variant="contained"
            style={{
              marginTop: "10px",
              backgroundColor: "#1976d2",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Post All Priced
          </Button>
          <div className="bg-orange-100 text-orange-700 p-4 rounded-lg flex items-center space-x-2 mt-4">
            <i className="material-icons">error_outline</i>
            <span>No Data Available</span>
          </div>
        </div>

        {/* Ready for Invoicing Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold">Ready for Invoicing - 0</h2>
          <div className="bg-orange-100 text-orange-700 p-4 rounded-lg flex items-center space-x-2 mt-4">
            <i className="material-icons">error_outline</i>
            <span>No Data Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceProcessor;
