/** @format */

import Sidebar from '../Sidebar/Sidebar';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// Table Columns
const columns = [
	{ field: 'name', headerName: 'Name', flex: 1 },
	{ field: 'postcode', headerName: 'Postcode', flex: 1 },
	{ field: 'address', headerName: 'Address', flex: 2 },
	{ field: 'type', headerName: 'Type', flex: 1 },
	{
		field: 'actions',
		headerName: 'Actions',
		flex: 1,
		renderCell: () => (
			<div className='flex space-x-2'>
				<IconButton
					size='small'
					color='primary'
					aria-label='Edit'
					title='Edit'
				>
					<EditIcon />
				</IconButton>
				<IconButton
					size='small'
					color='secondary'
					aria-label='Delete'
					title='Delete'
				>
					<DeleteIcon />
				</IconButton>
			</div>
		),
	},
];

// Table Rows
const rows = [
	{
		id: 1,
		name: 'Red Lion',
		postcode: 'SP8 4AA',
		address: 'Red Lion',
		type: 'Pub',
	},
	{
		id: 2,
		name: 'Stourhead',
		postcode: 'BA12 6QF',
		address: 'Stourhead',
		type: 'Miscellaneous',
	},
	{
		id: 3,
		name: 'Larmer Tree Gardens',
		postcode: 'SP5 5PY',
		address: 'Larmer Tree Gardens',
		type: 'Wedding_Venue',
	},
	{
		id: 4,
		name: 'Tythe Barn',
		postcode: 'DT10 1NA',
		address: 'Tythe Barn',
		type: 'Wedding_Venue',
	},
	{
		id: 5,
		name: 'Bake Barn',
		postcode: 'SP3 5SY',
		address: 'Bake Barn, Fonthill Weddings and Events',
		type: 'Wedding_Venue',
	},
	{
		id: 6,
		name: 'Gathering Barn',
		postcode: 'BA12 7EY',
		address: 'Gathering Barn',
		type: 'Wedding_Venue',
	},
];

function ListPoi() {
	return (
		<div className='flex h-screen bg-white'>
			{/* Sidebar */}
			<div className='w-80 bg-white'>
				<Sidebar />
			</div>

			{/* Main Content */}
			<div className='flex-1 p-6 space-y-6'>
				{/* Header */}
				<div className='flex justify-between items-center bg-white shadow-lg rounded-lg p-4'>
					<h1 className='text-3xl font-bold text-gray-700'>POI List</h1>
					<Button
						variant='contained'
						color='primary'
						startIcon={<AddIcon />}
						style={{
							backgroundColor: '#4CAF50',
							fontWeight: 'bold',
							textTransform: 'capitalize',
						}}
					>
						Create
					</Button>
				</div>

				{/* DataGrid */}
				<Paper
					sx={{
						height: 500,
						width: '100%',
						backgroundColor: 'white',
						boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
					}}
				>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSizeOptions={[5, 10, 20]}
						disableSelectionOnClick
						sx={{
							fontSize: '1rem',
							'& .MuiDataGrid-columnHeaders': {
								backgroundColor: '#f4f4f4',
								fontWeight: 'bold',
								color: '#333',
							},
							'& .MuiDataGrid-row:hover': {
								backgroundColor: '#f9f9f9',
							},
							'& .MuiDataGrid-cell': {
								color: '#555',
							},
						}}
					/>
				</Paper>
			</div>
		</div>
	);
}

export default ListPoi;
