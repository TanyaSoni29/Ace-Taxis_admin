/** @format */

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const RegisterDriver = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = (data) => {
		console.log('Form Submitted:', data);
		reset();
	};

	return (
		<div className='flex'>
			<Sidebar />
			<div className='flex-grow flex justify-center items-center bg-gray-50 min-h-screen px-6'>
				<div className='w-full max-w-4xl bg-white shadow-lg rounded-md p-10'>
					<h2 className='text-2xl font-bold mb-6 text-center'>
						Register Driver
					</h2>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='grid grid-cols-1 md:grid-cols-2 gap-6'
					>
						{/* Username */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Username
							</label>
							<input
								type='text'
								placeholder='Enter Username'
								{...register('username', { required: 'Username is required' })}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							{errors.username && (
								<span className='text-red-500 text-xs'>
									{errors.username.message}
								</span>
							)}
						</div>

						{/* Password */}
						<div className='relative'>
							<label className='block text-sm font-medium text-gray-600'>
								Password
							</label>
							<input
								type={showPassword ? 'text' : 'password'}
								placeholder='Enter Password'
								{...register('password', { required: 'Password is required' })}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							<button
								type='button'
								className='absolute right-3 top-8'
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? '🙈' : '👁️'}
							</button>
							{errors.password && (
								<span className='text-red-500 text-xs'>
									{errors.password.message}
								</span>
							)}
						</div>

						{/* Registration Number */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Registration Number
							</label>
							<input
								type='text'
								placeholder='Enter Registration Number'
								{...register('registrationNumber', {
									required: 'Registration Number is required',
								})}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							{errors.registrationNumber && (
								<span className='text-red-500 text-xs'>
									{errors.registrationNumber.message}
								</span>
							)}
						</div>

						{/* Full Name */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Full Name
							</label>
							<input
								type='text'
								placeholder='Enter Full Name'
								{...register('fullName', { required: 'Full Name is required' })}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							{errors.fullName && (
								<span className='text-red-500 text-xs'>
									{errors.fullName.message}
								</span>
							)}
						</div>

						{/* Email */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Email
							</label>
							<input
								type='email'
								placeholder='Enter Email'
								{...register('email', { required: 'Email is required' })}
								className='w-full border border-gray-300 rounded-md p-2 mt-1
                focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							{errors.email && (
								<span className='text-red-500 text-xs'>
									{errors.email.message}
								</span>
							)}
						</div>

						{/* Phone */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Phone
							</label>
							<input
								type='text'
								placeholder='Enter Phone'
								{...register('phone')}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						{/* Role */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Role
							</label>
							<select
								{...register('role', { required: 'Role is required' })}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							>
								<option value=''>Select Role</option>
								<option value='Driver'>Driver</option>
								<option value='Admin'>Admin</option>
							</select>
							{errors.role && (
								<span className='text-red-500 text-xs'>
									{errors.role.message}
								</span>
							)}
						</div>

						{/* Select Color */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Select Color
							</label>
							<input
								type='color'
								{...register('color')}
								className='w-full h-10 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						{/* Vehicle Make */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Vehicle Make
							</label>
							<input
								type='text'
								placeholder='Enter Vehicle Make'
								{...register('vehicleMake')}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						{/* Vehicle Model */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Vehicle Model
							</label>
							<input
								type='text'
								placeholder='Enter Vehicle Model'
								{...register('vehicleModel')}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						{/* Vehicle Colour */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Vehicle Colour
							</label>
							<input
								type='text'
								placeholder='Enter Vehicle Colour'
								{...register('vehicleColour')}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						{/* Vehicle Type */}
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Vehicle Type
							</label>
							<select
								{...register('vehicleType')}
								className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
							>
								<option value='Unknown'>Unknown</option>
								<option value='Car'>Car</option>
								<option value='Truck'>Truck</option>
							</select>
						</div>

						{/* Show All Bookings */}
						<div className='flex items-center'>
							<input
								type='checkbox'
								{...register('showAllBookings')}
								className='mr-2'
							/>
							<label className='text-sm font-medium text-gray-600'>
								Show All Bookings
							</label>
						</div>

						{/* Buttons */}
						<div className='flex col-span-2 justify-center gap-4 mt-6'>
							<button
								type='submit'
								className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
							>
								Add New
							</button>
							<button
								type='button'
								onClick={() => reset()}
								className='px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600'
							>
								Clear
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterDriver;
