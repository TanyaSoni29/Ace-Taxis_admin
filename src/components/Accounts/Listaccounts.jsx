/** @format */

import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Table Columns
const columns = [
	{ field: 'accNumber', headerName: 'Acc #', width: 100 },
	{ field: 'name', headerName: 'Name', width: 200 },
	{ field: 'address', headerName: 'Address', width: 250 },
	{ field: 'postcode', headerName: 'Postcode', width: 150 },
	{ field: 'email', headerName: 'Email', width: 250 },
	{
		field: 'actions',
		headerName: '',
		width: 150,
		renderCell: () => (
			<div className='flex space-x-2'>
				<Button
					variant='text'
					color='primary'
				>
					<i className='fas fa-edit'></i>
				</Button>
				<Button
					variant='text'
					color='error'
				>
					<i className='fas fa-trash'></i>
				</Button>
			</div>
		),
	},
];

// Table Rows
const rows = [
	{
		id: 1,
		accNumber: 8888,
		name: 'Ace Taxis',
		address: '1 Briar Close',
		postcode: 'SP8 4SS',
		email: 'acetaxisdorset@gmail.com',
	},
	{
		id: 2,
		accNumber: 9004,
		name: 'Shine For Woman',
		address: 'Shine For Woman LLP',
		postcode: 'DT1 3QY',
		email: 'fiona@weareshine.com',
	},
	{
		id: 3,
		accNumber: 9005,
		name: 'Compass Disability',
		address: 'Compass Disability Services',
		postcode: 'TA1 1BH',
		email: 'payroll@compassdisability.org.uk',
	},
	// Add more rows as necessary
];

const Listaccounts = () => {
	return (
		<div className='flex-1 p-6 bg-gray-100'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='flex justify-between items-center mb-4'>
					<h1 className='text-2xl font-semibold'>Account List</h1>
					<Button
						variant='contained'
						color='primary'
						startIcon={<AddIcon />}
						className='capitalize'
					>
						Create
					</Button>
				</div>

				{/* Table */}
				<Paper sx={{ height: 600, width: '100%' }}>
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

export default Listaccounts;
