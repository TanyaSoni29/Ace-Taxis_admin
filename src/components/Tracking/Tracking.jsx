/** @format */

import Sidebar from '../Sidebar/Sidebar';
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
} from '@mui/material';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const Tracking = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
	});

	const dataSource = [
		{ key: 1, reg: 'HF24 SXY', last: '21:47:53', speed: '1' },
		{ key: 5, reg: 'WL59 FHD', last: '22:03:49', speed: '0' },
		{ key: 8, reg: 'V21 PTR', last: '09:56:00', speed: '0' },
		{ key: 12, reg: 'DA14 KWU', last: '09:53:05', speed: '0' },
		{ key: 16, reg: 'YH64 XRW', last: '09:58:15', speed: '0' },
		{ key: 20, reg: 'HK71 YBB', last: '09:43:51', speed: '0' },
	];

	if (!isLoaded) return <div>Loading...</div>;

	return (
		<div className='flex h-screen bg-gray-50'>
			{/* Sidebar */}
			<div className='w-80 bg-white shadow-lg border-r'>
				<Sidebar />
			</div>

			{/* Main Content */}
			<div className='flex-1 p-6 space-y-6'>
				{/* Header */}
				<div className='flex items-center justify-between bg-white shadow rounded-lg p-4'>
					<div className='flex items-center space-x-4'>
						<TextField
							select
							label='Search by driver'
							variant='outlined'
							size='small'
							style={{ width: '200px' }}
						>
							<MenuItem value='all'>All</MenuItem>
							{/* Add more options as needed */}
						</TextField>
						<Button
							variant='contained'
							color='primary'
						>
							Find
						</Button>
					</div>
					<Button
						variant='contained'
						color='secondary'
					>
						Re-center
					</Button>
				</div>

				{/* Map and Table */}
				<div className='flex space-x-6 h-[calc(100vh-200px)]'>
					{/* Map Section */}
					<div className='flex-1 shadow-lg rounded-lg overflow-hidden'>
						<GoogleMap
							mapContainerStyle={{ width: '100%', height: '100%' }}
							center={{ lat: 51.045, lng: -2.272 }}
							zoom={10}
						></GoogleMap>
					</div>

					{/* Table Section */}
					<div className='w-[30%] bg-white shadow-lg rounded-lg overflow-hidden'>
						<TableContainer
							component={Paper}
							style={{ height: '100%' }}
						>
							<Table stickyHeader>
								<TableHead>
									<TableRow>
										<TableCell className='bg-gray-100 font-semibold'>
											#
										</TableCell>
										<TableCell className='bg-gray-100 font-semibold'>
											Reg
										</TableCell>
										<TableCell className='bg-gray-100 font-semibold'>
											Last
										</TableCell>
										<TableCell className='bg-gray-100 font-semibold'>
											Speed
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{dataSource.map((row) => (
										<TableRow
											key={row.key}
											hover
										>
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
