/** @format */

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSelector } from 'react-redux';
import bgImg from '../../assets/bg-10.png';
function Login() {
	const { loading } = useSelector((state) => state.auth);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = (data) => {
		console.log(data);
		// TODO: Add API call to authenticate user
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				username: '',
				password: '',
			});
		}
	}, [reset, isSubmitSuccessful]);

	return (
		<div
			className='flex justify-center items-center min-h-screen bg-gray-50 bg-cover bg-center bg-norepeat'
			style={{
				backgroundImage: `url(${bgImg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='flex flex-col shadow-md rounded-lg bg-white max-w-[390px] w-full'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-grow flex-col gap-5 p-10'
				>
					<div className='text-center mb-2.5'>
						<h3 className='text-lg font-semibold text-[#071437] leading-none mb-2.5'>
							Sign in
						</h3>
						<div className='flex items-center justify-center font-medium'>
							<span className='text-[0.8125rem] leading-[1.125rem] text-[#78829d] me-1.5'>
								Need an account?
							</span>
							<Link
								to='/signup'
								className='text-[0.8125rem] leading-[1.125rem] text-[#1b84ff]'
							>
								Sign up
							</Link>
						</div>
					</div>

					<div className='flex items-center gap-2'>
						<span className='border-t border-gray-200 w-full'></span>

						<span className='border-t border-gray-200 w-full'></span>
					</div>

					<div className='flex flex-col gap-1'>
						<label className='text-[#071437] text-[0.8125rem] leading-[1.125rem] font-medium'>
							User Name
						</label>
						<input
							type='text'
							placeholder='Enter username'
							autoComplete='off'
							{...register('username', { required: 'User name is required' })}
							className='sm:px-[0.625rem] px-[0.75rem] lg:gap-[0.875rem] text-[#78829d] bg-[#fcfcfc] h-[2.5rem] border-[#dbdfe9] border rounded-md'
						/>
						{errors?.username && (
							<span className='text-danger text-xs mt-1'>
								{errors?.username?.message}
							</span>
						)}
					</div>

					<div className='flex flex-col gap-1'>
						<div className='flex justify-between items-center'>
							<label className='text-[#071437] text-[0.8125rem] leading-[1.125rem] font-medium'>
								Password
							</label>
							<Link
								to='/forget-password'
								className='flex justify-end items-center text-[#056ee9] leading-[1.125rem] text-[0.8125rem]'
							>
								Forget Password?
							</Link>
						</div>

						<input
							type={showPassword ? 'text' : 'password'}
							placeholder='Enter password'
							autoComplete='off'
							{...register('email', { required: 'Password is required' })}
							className='sm:px-[0.625rem] px-[0.75rem] lg:gap-[0.875rem] text-[#78829d] bg-[#fcfcfc] h-[2.5rem] border-[#dbdfe9] border rounded-md'
						/>
						{errors?.email && (
							<span className='text-danger text-xs mt-1'>
								{errors?.email?.message}
							</span>
						)}
						<button
							className='btn btn-icon'
							onClick={(e) => {
								e.preventDefault();
								setShowPassword(!showPassword);
							}}
						>
							{showPassword ? (
								<VisibilityIcon className='text-gray-500' />
							) : (
								<VisibilityOffIcon className='text-gray-500' />
							)}
						</button>
					</div>

					<button
						type='submit'
						className='xs:h-[1.75rem] xs:px-[0.5rem] xs:py-[0.35rem] xs:gap-[0.25rem] font-medium sm:h-[2rem] sm:px-[0.75rem] sm:py-[0.45rem] sm:gap-[0.275rem] py-[0.55rem] lg:h-[2.5rem] lg:px-[1.25rem] lg:py-[0.75rem] lg:gap-[0.5rem] flex justify-center grow text-[#fff] bg-[#1b84ff] leading-none rounded-md ps-4 pe-4'
						disabled={loading}
					>
						{loading ? 'Please wait...' : 'Sign In'}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
