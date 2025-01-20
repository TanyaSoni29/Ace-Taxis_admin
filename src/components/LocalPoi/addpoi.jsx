/** @format */

import Sidebar from '../Sidebar/Sidebar';

function AddLocalPoi() {
	return (
		<div className=''>
			<Sidebar />

			<div className='min-h-screen flex justify-center items-center bg-gray-100'>
				<div className='w-full max-w-3xl bg-white shadow-md rounded-lg p-6'>
					<h1 className='text-2xl font-bold mb-4 text-gray-700'>Local POI</h1>
					<form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{/* Name Input */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Name
							</label>
							<input
								type='text'
								placeholder='Enter name'
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500'
							/>
						</div>

						{/* Address Input */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Address
							</label>
							<input
								type='text'
								placeholder='Enter address'
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500'
							/>
						</div>

						{/* Postcode Input */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Postcode
							</label>
							<input
								type='text'
								placeholder='Enter postcode'
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500'
							/>
						</div>

						{/* Type Dropdown */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Type
							</label>
							<select className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500'>
								<option value='Not_Set'>Not_Set</option>
								<option value='Type1'>Type1</option>
								<option value='Type2'>Type2</option>
							</select>
						</div>
					</form>

					{/* Buttons */}
					<div className='flex space-x-4 mt-6'>
						<button className='px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none'>
							Add New
						</button>
						<button className='px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none'>
							Clear
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddLocalPoi;
