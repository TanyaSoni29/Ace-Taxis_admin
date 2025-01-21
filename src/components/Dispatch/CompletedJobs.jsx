/** @format */

import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField, MenuItem } from '@mui/material';

// Table Columns (No rows provided, so table will be empty)
const columns = [
	{ field: 'id', headerName: '#', width: 70 },
	{ field: 'date', headerName: 'Date', width: 180 },
	{ field: 'pickup', headerName: 'Pickup', width: 250 },
	{ field: 'destination', headerName: 'Destination', width: 250 },
	{ field: 'passenger', headerName: 'Passenger', width: 150 },
	{ field: 'pax', headerName: 'Pax', width: 80 },
	{ field: 'lastUpdated', headerName: 'Last Updated', width: 180 },
];

// Empty rows
const rows = [];

const CompletedJobs = () => {
	return (
		<div className='flex-1 p-6 bg-gray-100'>
			<h1 className='text-2xl font-semibold mb-4'>Completed Jobs</h1>

			{/* Filters */}
			<div className='mb-4 grid grid-cols-2 gap-4'>
				<div>
					<label className='block text-gray-700 font-medium mb-2'>
						Search by date
					</label>
					<TextField
						type='date'
						defaultValue='2025-01-21'
						className='w-full'
					/>
				</div>
				<div>
					<label className='block text-gray-700 font-medium mb-2'>
						Search by scope
					</label>
					<TextField
						select
						defaultValue='All'
						className='w-full'
						variant='outlined'
					>
						<MenuItem value='All'>All</MenuItem>
						<MenuItem value='Local'>Local</MenuItem>
						<MenuItem value='Regional'>Regional</MenuItem>
					</TextField>
				</div>
			</div>
			<Button
				variant='contained'
				color='error'
				className='mb-4'
				style={{ width: '150px' }}
			>
				SEARCH
			</Button>

			{/* Jobs DataGrid */}
			<Paper sx={{ height: 500, width: '100%' }}>
				<DataGrid
					rows={rows} // Empty rows
					columns={columns}
					pageSizeOptions={[5, 10, 20]}
					checkboxSelection
					sx={{ border: 0 }}
				/>
			</Paper>
		</div>
	);
};

export default CompletedJobs;
