/** @format */

import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';

// Table Columns
const columns = [
	{ field: 'dateTime', headerName: 'Date & Time of Change', width: 250 },
	{ field: 'user', headerName: 'Changed by User', width: 200 },
	{ field: 'property', headerName: 'Property Name', width: 200 },
	{ field: 'previousValue', headerName: 'Previous Value', width: 200 },
	{ field: 'newValue', headerName: 'New Value', width: 200 },
];

// Table Rows (Empty initially)
const rows = [];

const AuditView = () => {
	return (
		<div className='flex h-screen bg-white'>
			<div className='flex-1 px-10 py-8 space-y-6 ml-4'>
				<div className='w-full max-w-6xl'>
					{/* Header */}
					<div className='flex justify-between items-center mb-6'>
					<h1 className='text-2xl font-semibold'>
						Change Log of Booking #:
					</h1>
					</div>

					{/* Booking Input */}
					<div className='flex items-center space-x-4 mb-4'>
						<TextField
							label='Booking #'
							variant='outlined'
							size='small'
							className='w-1/4'
						/>
						<Button
							variant='contained'
							color='error'
							className='capitalize'
							style={{ width: '150px' }}
						>
							Show Changes
						</Button>
					</div>

					{/* Data Table */}
					<Paper  sx={{ height: 500, width: "100%" }}>
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
