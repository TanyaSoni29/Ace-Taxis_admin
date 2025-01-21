/** @format */

import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField, MenuItem } from '@mui/material';

// Table Columns and Rows
const columns = [
	{ field: 'id', headerName: '#', width: 70 },
	{ field: 'date', headerName: 'Date', width: 180 },
	{ field: 'pickup', headerName: 'Pickup', width: 250 },
	{ field: 'destination', headerName: 'Destination', width: 250 },
	{ field: 'passenger', headerName: 'Passenger', width: 150 },
	{ field: 'pax', headerName: 'Pax', width: 80 },
	{ field: 'cancelledBy', headerName: 'Cancelled By', width: 150 },
	{ field: 'lastUpdated', headerName: 'Last Updated', width: 180 },
	{
		field: 'restore',
		headerName: 'Restore',
		width: 100,
		renderCell: () => (
			<span className='text-green-500 cursor-pointer font-bold'>Restore</span>
		),
	},
];

const rows = [
	{
		id: 1,
		date: '21/01/2025 17:00:00',
		pickup: '22 Coronation Drive, Donhead St. Mary',
		destination: 'Gillingham Train Station',
		passenger: 'Sarah',
		pax: 1,
		cancelledBy: 'Driver',
		lastUpdated: '21/01/2025 16:30:00',
	},
	{
		id: 2,
		date: '21/01/2025 16:15:00',
		pickup: 'Marchant Holliday School',
		destination: '7 Platts, Lydlinch',
		passenger: 'Alfred Barber',
		pax: 1,
		cancelledBy: 'Customer',
		lastUpdated: '21/01/2025 15:45:00',
	},
	// Add more rows as needed
];

const CancelledJobs = () => {
	return (
		<div className='flex-1 p-6 bg-gray-100'>
			<h1 className='text-2xl font-semibold mb-4'>Cancelled Jobs</h1>

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
					rows={rows}
					columns={columns}
					pageSizeOptions={[5, 10, 20]}
					checkboxSelection
					sx={{ border: 0 }}
				/>
			</Paper>
		</div>
	);
};

export default CancelledJobs;
