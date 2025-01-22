/** @format */

import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getpathname } from '../../utils/getpathfullname';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from 'react-redux';
import { BadgeOutlined, PersonOutlineOutlined } from '@mui/icons-material';

function Header() {
	const location = useLocation();
	const dropdownRef = useRef(null);
	const [pathname, setPathname] = useState({});
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { user } = useSelector((state) => state.auth);
	useEffect(() => {
		const path = getpathname(location);
		setPathname(path);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	console.log(user);

	return (
		<div className='flex items-center fixed z-10 top-0 start-0 end-0 shrink-0 bg-[#fefefe] h-[70px]'>
			<div className='xl:ms-auto xl:me-auto xl:ps-[1.875rm] xl:pe-[1.875rem] xl:max-w-[1280px] lg:gap-1 flex grow items-stretch justify-between flex-wrap gap-3'>
				{/* Breadcrumb */}
				<div className='flex items-center gap-2 text-sm text-gray-500'>
					<div className='text-blue-500'>{pathname?.one}</div>
					{pathname?.two && <span>{`>`}</span>}
					{pathname?.two && (
						<span className='text-gray-700'>{pathname?.two}</span>
					)}
					{pathname?.three && <span>{`>`}</span>}
					{pathname?.three && (
						<span className='text-gray-700'>{pathname?.three}</span>
					)}
				</div>
				{/* Icons and Profile */}
				<div className='relative flex items-center gap-4'>
					<div
						className='relative w-8 h-8 cursor-pointer flex items-center justify-center gap-2'
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						<AccountCircleOutlinedIcon
							className=' text-gray-400'
							fontSize='medium'
						/>
						<span className='font-medium '>{user?.username}</span>
					</div>
					{/* Dropdown Menu */}
					{isDropdownOpen && (
						<div
							className='absolute -right-8 top-10 w-60 bg-white shadow-lg rounded-lg border border-[#F1F1F4] z-50'
							ref={dropdownRef}
						>
							<div className='p-4 border-b'>
								<div className='flex items-center gap-1'>
									<div className='rounded-full border border-[#F1F1F4]'>
										<PersonOutlineOutlined className='text-[#99A1B7]' />
									</div>
									<div>
										<div className='font-semibold text-gray-800 leading-none'>
											{user?.fullName}
										</div>
										<div className='text-sm text-gray-500'>
											{user?.roleId === 1
												? 'Admin'
												: user.roleId === 2
												? 'User'
												: 'Driver'}
										</div>
									</div>
								</div>
							</div>
							<ul className=''>
								<li className='p-4 cursor-pointer '>
									<div className='hover:bg-[#f9f9f9] hover:text-[#1b84ff] rounded-md p-2 flex items-center gap-1 group'>
										<BadgeOutlined className='text-[#99A1B7] group-hover:text-[#1b84ff]' />
										<span className='font-normal text-[0.8125rem] leading-[1.125rem]'>
											My Profile
										</span>
									</div>
								</li>
								<li className='pt-0 pb-4 pr-4 pl-4'>
									<div>
										<button className='w-full h-8 hover:shadow-md hover:bg-[#f9f9f9] ps-4 pe-4 font-medium py-1 rounded-md cursor-pointer border border-[#F1F1F4] text-[0.75rem] text-[#4b5675] '>
											Log out
										</button>
									</div>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
