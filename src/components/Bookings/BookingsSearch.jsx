/** @format */

import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Switch, TextField, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MapIcon from '@mui/icons-material/Map';

// Table Columns
const columns = [
	{ field: 'id', headerName: '#', width: 50 },
	{ field: 'date', headerName: 'Date', width: 80 },
	{ field: 'pickup', headerName: 'Pickup', width: 220 },
	{ field: 'destination', headerName: 'Destination', width: 220 },
	{
		field: 'notes',
		headerName: '*',
		width: 100,
		renderCell: (params) =>
			params.value ? (
				<span className='text-red-500 font-bold'>*HAS NOTES*</span>
			) : (
				''
			),
	},
	{ field: 'passenger', headerName: 'Passenger', width: 80 },
	{ field: 'pax', headerName: 'Pax', width: 50 },
	{ field: 'phone', headerName: 'Phone', width: 80 },
	{ field: 'driver', headerName: 'Driver #', width: 80 },
	{ field: 'driverFee', headerName: 'Driver £', width: 80 },
	{ field: 'accFee', headerName: 'Acc £', width: 80 },
	{ field: 'mFee', headerName: 'M £', width: 80 },
	{
		field: 'map',
		headerName: '',
		width: 70,
		renderCell: () => <MapIcon color='success' />,
	},
	{
		field: 'edit',
		headerName: '',
		width: 70,
		renderCell: () => <EditIcon color='warning' />,
	},
	{
		field: 'delete',
		headerName: '',
		width: 70,
		renderCell: () => <DeleteIcon color='error' />,
	},
];

// Table Rows
const rows = [
	{
		id: 76854,
		date: '19/02/2025 16:15:00',
		pickup: 'Marchant Holliday School, North Cheriton, Templecombe, Somerset',
		destination: '7 Platts, Lydlinch, Sturminster Newton, Dorset',
		notes: false,
		passenger: 'Alfred Barber',
		pax: 1,
		phone: '123456789',
		driver: 'D1001',
		driverFee: '£51.00',
		accFee: '£65.00',
		mFee: '£10.00',
	},
	{
		id: 59032,
		date: '19/02/2025 16:00:00',
		pickup: 'Thorngrove Garden Centre',
		destination: 'Autumn Mead, Donhead St Mary',
		notes: false,
		passenger: 'Alex Wadman',
		pax: 1,
		phone: '987654321',
		driver: 'D1002',
		driverFee: '£24.00',
		accFee: '£28.00',
		mFee: '£5.00',
	},
	{
		id: 59189,
		date: '19/02/2025 16:00:00',
		pickup: 'Flat 3, Fox Court, Bath Road, Sturminster Newton',
		destination: 'Same Place',
		notes: true,
		passenger: 'Alex Gorman',
		pax: 1,
		phone: '456789123',
		driver: 'D1003',
		driverFee: '£23.00',
		accFee: '£30.00',
		mFee: '£8.00',
	},
	// Add more rows as needed
];

const BookingSearch = () => {
	return (
		<div className='flex h-screen bg-gray-50'>
			<div className='flex-1 px-10 py-8 space-y-6 ml-4'>
				{/* Header */}
				<div className='flex justify-between items-center mb-6'>
					<h1 className='text-2xl font-semibold'>Bookings List</h1>
					<Button
						variant='contained'
						color='success'
						startIcon={<span className='material-icons'>add</span>}
						className='capitalize'
					>
						Create New
					</Button>
				</div>

				{/* Filters */}
				<div className='grid grid-cols-2 gap-4 md:grid-cols-4 mb-4'>
					<TextField
						type='date'
						defaultValue='2025-01-21'
						className='w-full'
					/>
					<TextField
						type='date'
						defaultValue='2025-02-20'
						className='w-full'
					/>
					<TextField
						select
						defaultValue='All'
						className='w-full'
						variant='outlined'
						label='Search by priced'
					>
						<MenuItem value='All'>All</MenuItem>
						<MenuItem value='Priced'>Priced</MenuItem>
						<MenuItem value='Unpriced'>Unpriced</MenuItem>
					</TextField>
					<TextField
						select
						defaultValue='All'
						className='w-full'
						variant='outlined'
						label='Search by driver'
					>
						<MenuItem value='All'>All</MenuItem>
						<MenuItem value='Driver1'>Driver1</MenuItem>
						<MenuItem value='Driver2'>Driver2</MenuItem>
					</TextField>
				</div>

				<div className='flex items-center space-x-4 mb-4'>
					<Switch
						defaultChecked={false}
						color='error'
					/>
					<span>Exclude Cancelled</span>
					<Button
						variant='contained'
						color='error'
						className='capitalize'
						style={{ width: '150px' }}
					>
						Search
					</Button>
				</div>

				{/* Data Table */}
				<Paper sx={{ height: 500, width: "100%" }}>
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
	);
};

export default BookingSearch;
