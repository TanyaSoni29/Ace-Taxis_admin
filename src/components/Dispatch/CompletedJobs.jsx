/** @format */

import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField, MenuItem } from '@mui/material';

// Table Columns
const columns = [
	{ field: 'id', headerName: '#', width: 70 },
	{ field: 'date', headerName: 'Date', width: 200 },
	{ field: 'pickup', headerName: 'Pickup', width: 250 },
	{ field: 'destination', headerName: 'Destination', width: 300 },
	{ field: 'passenger', headerName: 'Passenger', width: 200 },
	{ field: 'pax', headerName: 'Pax', width: 100 },
	{ field: 'lastUpdated', headerName: 'Last Updated', width: 200 },
];

// Empty rows for now
const rows = [];

const CompletedJobs = () => {
	return (
		<div className='flex h-screen bg-white'>
			{/* Main Content */}
			<div className='flex-1 px-10 py-8 space-y-6 ml-4'>
				{/* Header */}
				<div className='bg-white rounded-lg p-6'>
					<h1 className='text-2xl font-semibold text-gray-800'>
						Completed Jobs
					</h1>
				</div>

				{/* Filters */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<div>
						<label className='block text-gray-700 font-medium mb-2'>
							Search by date
						</label>
						<TextField
							type='date'
							defaultValue='2025-01-21'
							variant='outlined'
							size='small'
							fullWidth
						/>
					</div>
					<div>
						<label className='block text-gray-700 font-medium mb-2'>
							Search by scope
						</label>
						<TextField
							select
							defaultValue='All'
							variant='outlined'
							size='small'
							fullWidth
						>
							<MenuItem value='All'>All</MenuItem>
							<MenuItem value='Local'>Local</MenuItem>
							<MenuItem value='Regional'>Regional</MenuItem>
						</TextField>
					</div>
				</div>

				<div>
					<Button
						variant='contained'
						color='error'
						style={{ width: '150px', height: '40px' }}
					>
						SEARCH
					</Button>
				</div>

				{/* Jobs DataGrid */}
				<Paper
					sx={{ height: 500, width: '100%' }}
					elevation={3}
				>
					<DataGrid
						rows={rows} // Empty rows for now
						columns={columns}
						pageSizeOptions={[5, 10, 20]}
						checkboxSelection
						disableSelectionOnClick
						sx={{
							'border': 0,
							'& .MuiDataGrid-columnHeaders': {
								backgroundColor: '#f5f5f5',
								fontWeight: 'bold',
							},
							'& .MuiDataGrid-footerContainer': {
								backgroundColor: '#f5f5f5',
							},
							'& .MuiDataGrid-virtualScroller': {
								overflowX: 'hidden',
							},
						}}
					/>
				</Paper>
			</div>
		</div>
	);
};

export default CompletedJobs;
