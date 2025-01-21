/** @format */

import { Button, TextField } from "@mui/material";

const InvoiceDelete = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg border-r">
        {/* Add Sidebar if needed */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-4">
          <h1 className="text-2xl font-semibold">Delete Invoice</h1>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <TextField
            label="Invoice Number"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Enter Invoice Number"
          />
          <Button
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "#4caf50",
              color: "#fff",
              fontWeight: "bold",
              height: "45px",
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDelete;
