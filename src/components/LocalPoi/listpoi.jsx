/** @format */

import * as React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Table Columns
const columns = [
  { field: "name", headerName: "Name", width: 250 },
  { field: "postcode", headerName: "Postcode", width: 150 },
  { field: "address", headerName: "Address", width: 300 },
  { field: "type", headerName: "Type", width: 150 },
  {
    field: "actions",
    headerName: "",
    width: 100,
    renderCell: (params) => (
      <div className="flex space-x-2">
        <IconButton size="small" color="primary">
          <EditIcon />
        </IconButton>
        <IconButton size="small" color="primary">
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

// Table Rows
const rows = [
  { id: 1, name: "Red Lion", postcode: "SP8 4AA", address: "Red Lion", type: "Pub" },
  { id: 2, name: "Stourhead", postcode: "BA12 6QF", address: "Stourhead", type: "Miscellaneous" },
  { id: 3, name: "Larmer Tree Gardens", postcode: "SP5 5PY", address: "Larmer Tree Gardens", type: "Wedding_Venue" },
  { id: 4, name: "Tythe Barn", postcode: "DT10 1NA", address: "Tythe Barn", type: "Wedding_Venue" },
  { id: 5, name: "Bake Barn", postcode: "SP3 5SY", address: "Bake Barn, Fonthill Weddings and Events", type: "Wedding_Venue" },
  { id: 6, name: "Gathering Barn", postcode: "BA12 7EY", address: "Gathering Barn", type: "Wedding_Venue" },
  // Add more rows as needed
];

function ListPoi() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">POI List</h1>
          <Button
            variant="contained"
            color="primary"
            startIcon={<span className="material-icons">add</span>}
            className="capitalize"
          >
            Create
          </Button>
        </div>

        {/* Table */}
        <Paper sx={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            sx={{
              border: 0,
            }}
          />
        </Paper>
      </div>
    </div>
  );
}

export default ListPoi;
