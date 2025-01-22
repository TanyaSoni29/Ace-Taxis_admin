/** @format */

import { useState } from 'react';

const AvailabilityLogs = () => {
	const [driverNumber, setDriverNumber] = useState(0);
	const [date, setDate] = useState('');
	const [availability, setAvailability] = useState(null);

	const handleShowChanges = () => {
		// Mock availability data; you can replace it with actual API logic
		if (driverNumber === 0) {
			setAvailability('No Availability');
		} else {
			setAvailability(`Availability log for Driver #${driverNumber}`);
		}
	};

	return (
		<div className='flex-grow p-8 bg-white min-h-screen'>
			<div className=' mx-auto bg-white rounded-md p-6'>
				<h2 className='text-2xl font-bold text-gray-700 mb-6'>
					Change Log of Availability #: {driverNumber}
				</h2>

				<div className='flex flex-col md:flex-row gap-6 items-center'>
					{/* Driver Number */}
					<div className='flex flex-col'>
						<label className='block text-sm font-medium text-gray-600'>
							Driver Number
						</label>
						<input
							type='number'
							value={driverNumber}
							onChange={(e) => setDriverNumber(Number(e.target.value))}
							className='w-48 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</div>

					{/* Date Picker */}
					<div className='flex flex-col'>
						<label className='block text-sm font-medium text-gray-600'>
							Select Date
						</label>
						<input
							type='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
							className='w-48 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</div>

					{/* Show Changes Button */}
					<button
						onClick={handleShowChanges}
						className='px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center gap-2'
					>
						<span className='material-icons'>search</span> Show Changes
					</button>
				</div>

				{/* Availability Log */}
				<div className='mt-8'>
					{availability ? (
						<div className='p-4 bg-blue-50 border border-blue-300 rounded-md text-blue-700'>
							<p className='flex items-center gap-2'>
								<span className='material-icons text-blue-600'>info</span>
								{availability}
							</p>
						</div>
					) : (
						<div className='p-4 bg-red-100 border border-gray-300 rounded-md text-gray-600'>
							<p>
								No data to display. Enter Driver Number and Date to see changes.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AvailabilityLogs;
