/** @format */

import Sidebar from '../Sidebar/Sidebar';

const NewBooking = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='flex-grow p-8 bg-gray-50 min-h-screen'>
				<div className='max-w-7xl mx-auto bg-white shadow-md rounded-md p-6'>
					<h2 className='text-2xl font-bold text-gray-700 mb-6'>
						Booking Form
					</h2>
					<form className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{/* Left Column */}
						<div className='md:col-span-2'>
							{/* Pickup Time */}
							<div className='flex flex-col mb-4'>
								<label className='block text-sm font-medium text-gray-600'>
									Pickup Time
								</label>
								<div className='flex items-center gap-2'>
									<input
										type='date'
										className='w-48 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
									<input
										type='number'
										placeholder='24 hours'
										className='w-24 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
								</div>
							</div>

							{/* Pickup and Destination */}
							<div className='grid grid-cols-2 gap-6'>
								<div>
									<label className='block text-sm font-medium text-gray-600'>
										Pickup
									</label>
									<input
										type='text'
										placeholder='Address'
										className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
									<input
										type='text'
										placeholder='Postcode'
										className='w-full border border-gray-300 rounded-md p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-600'>
										Destination
									</label>
									<input
										type='text'
										placeholder='Address'
										className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
									<input
										type='text'
										placeholder='Postcode'
										className='w-full border border-gray-300 rounded-md p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
								</div>
							</div>

							{/* Contact Details */}
							<div className='flex flex-col mt-4'>
								<label className='block text-sm font-medium text-gray-600'>
									Contact
								</label>
								<div className='flex gap-6'>
									<input
										type='text'
										placeholder='Telephone'
										className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
									<input
										type='email'
										placeholder='Email'
										className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
								</div>
							</div>

							{/* Passenger Details */}
							<div className='flex flex-col mt-4'>
								<label className='block text-sm font-medium text-gray-600'>
									Passenger
								</label>
								<input
									type='text'
									placeholder='Name'
									className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
							</div>

							{/* Options */}
							<div className='grid grid-cols-2 gap-6 mt-4'>
								<div>
									<label className='block text-sm font-medium text-gray-600'>
										Price & Time
									</label>
									<div className='flex items-center gap-2 mt-2'>
										<input
											type='checkbox'
											className='w-5 h-5'
										/>
										<span>All Day</span>
									</div>
									<div className='flex items-center gap-2 mt-2'>
										<input
											type='checkbox'
											className='w-5 h-5'
										/>
										<span>From Base</span>
									</div>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-600'>
										Options
									</label>
									<div className='flex gap-2 mt-2'>
										<select className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>
											<option>Payment Status</option>
										</select>
										<select className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>
											<option>Booking Scope</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column */}
						<div>
							<div className='flex flex-col'>
								<label className='block text-sm font-medium text-gray-600'>
									Estimated Distance
								</label>
								<p className='text-lg text-gray-700 font-medium mt-2'>
									112.0 MILES
								</p>
							</div>
							<div className='flex flex-col mt-4'>
								<label className='block text-sm font-medium text-gray-600'>
									Estimated Duration
								</label>
								<p className='text-lg text-gray-700 font-medium mt-2'>
									12:12 Hours
								</p>
							</div>

							<div className='mt-8 h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-600'>
								Map Row
							</div>
						</div>
					</form>
					<div className='mt-8 h-20 bg-gray-100 border-t border-gray-300 flex items-center justify-center text-gray-700'>
						Jobs Happening Now
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewBooking;
