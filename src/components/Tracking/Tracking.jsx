/** @format */

import Sidebar from "../Sidebar/Sidebar";
import {
  Button,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Tracking = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

  const dataSource = [
    { key: 1, reg: "HF24 SXY", last: "21:47:53", speed: "1" },
    { key: 5, reg: "WL59 FHD", last: "22:03:49", speed: "0" },
    { key: 8, reg: "V21 PTR", last: "09:56:00", speed: "0" },
    { key: 12, reg: "DA14 KWU", last: "09:53:05", speed: "0" },
    { key: 16, reg: "YH64 XRW", last: "09:58:15", speed: "0" },
    { key: 20, reg: "HK71 YBB", last: "09:43:51", speed: "0" },
  ];

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100">
        {/* Header */}
        <div className="flex items-center mb-4">
          <TextField
            select
            label="Search by driver"
            variant="outlined"
            className="mr-4"
            style={{ width: "150px" }}
          >
            <MenuItem value="all">All</MenuItem>
            {/* Add more options as needed */}
          </TextField>
          <Button variant="contained" color="primary" className="mr-4">
            Find
          </Button>
          <Button variant="contained" color="secondary">
            Re-center
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex h-[calc(100vh-120px)]">
          {/* Map Section */}
          <div className="flex-1 border border-gray-300 mr-4">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={{ lat: 51.045, lng: -2.272 }}
              zoom={10}
            ></GoogleMap>
          </div>

          {/* Table Section */}
          <div className="w-1/3">
            <TableContainer component={Paper} className="h-full">
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Reg</TableCell>
                    <TableCell>Last</TableCell>
                    <TableCell>Speed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataSource.map((row) => (
                    <TableRow key={row.key}>
                      <TableCell>{row.key}</TableCell>
                      <TableCell>{row.reg}</TableCell>
                      <TableCell>{row.last}</TableCell>
                      <TableCell>{row.speed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
