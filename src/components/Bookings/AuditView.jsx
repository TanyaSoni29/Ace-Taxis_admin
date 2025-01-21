/** @format */

import * as React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";

// Table Columns
const columns = [
  { field: "dateTime", headerName: "Date & Time of Change", width: 250 },
  { field: "user", headerName: "Changed by User", width: 200 },
  { field: "property", headerName: "Property Name", width: 200 },
  { field: "previousValue", headerName: "Previous Value", width: 200 },
  { field: "newValue", headerName: "New Value", width: 200 },
];

// Table Rows (Empty initially)
const rows = [];

const AuditView = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <h1 className="text-2xl font-semibold mb-4">
            Change Log of Booking #:
          </h1>

          {/* Booking Input */}
          <div className="flex items-center space-x-4 mb-4">
            <TextField
              label="Booking #"
              variant="outlined"
              size="small"
              className="w-1/4"
            />
            <Button
              variant="contained"
              color="error"
              className="capitalize"
              style={{ width: "150px" }}
            >
              Show Changes
            </Button>
          </div>

          {/* Data Table */}
          <Paper sx={{ height: 450, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
              disableSelectionOnClick
              sx={{ border: 0 }}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default AuditView;
