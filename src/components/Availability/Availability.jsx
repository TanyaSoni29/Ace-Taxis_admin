/** @format */

import {
	Button,
	TextField,
	MenuItem,
	Checkbox,
	FormControlLabel,
} from '@mui/material';

const Availability = () => {
	return (
		<div className='flex h-screen bg-gray-50'>
			{/* Sidebar */}
			<div className='w-80 bg-white shadow-lg border-r'>
				{/* Sidebar Component */}
			</div>

			{/* Main Content */}
			<div className='flex-1 p-6 space-y-6'>
				{/* Header */}
				<div className='flex items-center justify-between bg-white shadow rounded-lg p-4'>
					<div className='flex items-center space-x-4'>
						<TextField
							select
							label='Driver'
							variant='outlined'
							size='small'
							style={{ width: '200px' }}
						>
							<MenuItem value='all'>All</MenuItem>
							{/* Add more driver options */}
						</TextField>
						<TextField
							label='Date'
							type='date'
							variant='outlined'
							size='small'
							style={{ width: '200px' }}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</div>
					<Button
						variant='contained'
						style={{
							height: '40px',
							backgroundColor: '#ff5252',
							color: '#fff',
						}}
					>
						Unavailable (All Day)
					</Button>
				</div>

				{/* Availability Controls */}
				<div className='bg-white shadow rounded-lg p-4'>
					<div className='flex justify-between space-x-2'>
						<Button
							variant='contained'
							style={{
								width: '150px',
								backgroundColor: '#333333',
								color: '#fff',
							}}
						>
							Custom
						</Button>
						<Button
							variant='contained'
							style={{
								width: '150px',
								backgroundColor: '#333333',
								color: '#fff',
							}}
						>
							SR AM Only
						</Button>
						<Button
							variant='contained'
							style={{
								width: '150px',
								backgroundColor: '#333333',
								color: '#fff',
							}}
						>
							SR PM Only
						</Button>
						<Button
							variant='contained'
							style={{
								width: '150px',
								backgroundColor: '#333333',
								color: '#fff',
							}}
						>
							SR Only
						</Button>
					</div>
				</div>

				{/* Availability Form */}
				<div className='bg-white shadow rounded-lg p-4'>
					<div className='text-lg font-bold flex items-center space-x-2 mb-4'>
						<i className='material-icons'>calendar_today</i>
						<span>My Availability: 21/01/25</span>
					</div>
					<div className='flex space-x-4 mb-4'>
						<TextField
							label='From'
							type='time'
							variant='outlined'
							size='small'
							InputLabelProps={{
								shrink: true,
							}}
							style={{ flex: 1 }}
						/>
						<TextField
							label='To'
							type='time'
							variant='outlined'
							size='small'
							InputLabelProps={{
								shrink: true,
							}}
							style={{ flex: 1 }}
						/>
					</div>
					<TextField
						label='Note'
						variant='outlined'
						size='small'
						placeholder='e.g. Locals Only...'
						fullWidth
						className='mb-4'
					/>
					<FormControlLabel
						control={<Checkbox color='primary' />}
						label='Give or Take (+/-)'
						className='mb-4'
					/>
					<div className='flex space-x-4'>
						<Button
							variant='contained'
							style={{
								width: '200px',
								backgroundColor: '#4caf50',
								color: '#fff',
							}}
						>
							Add Available Hours
						</Button>
						<Button
							variant='contained'
							style={{
								width: '200px',
								backgroundColor: '#ff5252',
								color: '#fff',
							}}
						>
							Add Unavailable Hours
						</Button>
					</div>
				</div>

				{/* No Availability */}
				<div className='bg-blue-100 text-blue-700 p-4 rounded-lg shadow'>
					<i className='material-icons'>info</i> No Availability
				</div>

				{/* All Drivers Table */}
				<div className='bg-white shadow rounded-lg p-4'>
					<h3 className='text-lg font-bold mb-4'>All Drivers</h3>
					{/* Table can be added here */}
				</div>
			</div>
		</div>
	);
};

export default Availability;
