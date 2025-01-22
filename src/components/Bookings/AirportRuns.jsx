/** @format */

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const AirportRuns = () => {
  return (
    <div className="flex h-screen bg-white">
     

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold">Last Airport Journeys</h1>
        <p className="text-gray-600">SELECT PERIOD</p>

        {/* Period Selector */}
        <div className="flex justify-between border border-gray-300 rounded-lg overflow-hidden">
          <Button fullWidth variant="outlined" className="rounded-none">
            Last 1 Month
          </Button>
          <Button fullWidth variant="outlined" className="rounded-none">
            Last 3 Months
          </Button>
          <Button fullWidth variant="outlined" className="rounded-none">
            Last 6 Months
          </Button>
          <Button fullWidth variant="outlined" className="rounded-none">
            Last 12 Months
          </Button>
        </div>

        {/* Table 1 */}
        <TableContainer component={Paper} className="shadow-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Driver</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Pickup</TableCell>
                <TableCell>Drop</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Rows can be dynamically added here */}
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-500">
                  No Data Available
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Table 2 */}
        <h2 className="text-xl font-semibold mt-8">Airport Journeys - 6 Months</h2>
        <TableContainer component={Paper} className="shadow-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Journey</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Rows can be dynamically added here */}
              <TableRow>
                <TableCell colSpan={3} className="text-center text-gray-500">
                  No Data Available
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AirportRuns;
