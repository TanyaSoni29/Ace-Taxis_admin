/** @format */

import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import { useState } from 'react';
import {
	CardTravelOutlined,
	ChromeReaderModeOutlined,
	ContactPhoneOutlined,
	Groups2Outlined,
	PermContactCalendarOutlined,
	SettingsOutlined,
	SummarizeOutlined,
} from '@mui/icons-material';
function Sidebar() {
	const location = useLocation();
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [arrowClicked, setArrowClicked] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState({});
	// const [isExpanded, setIsExpanded] = useState(false);

	const handleToggleArrow = () => {
		setArrowClicked(!arrowClicked); // Toggle arrow direction
		if (arrowClicked) {
			setIsCollapsed(false); // Collapse sidebar when arrow points inward
		} else {
			setIsCollapsed(true); // Fully expand sidebar when arrow points outward
		} // Collapse when arrow points inward
	};

	const toggleDropdown = (level, menu) => {
		setActiveDropdown((prev) => ({
			...prev,
			[level]: prev[level] === menu ? null : menu, // Toggle active menu for the given level
		}));
	};

	return (
		<div
			className={`${
				isCollapsed ? 'w-[80px]' : 'w-[280px]'
			} dark:bg-[rgb(11 12 16)] bg-[#ffffff] border-e border-e-[#F1F1F4] dark:border-e-[rgb(21 23 28)] fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 transition-all duration-300`}
			onMouseEnter={() => arrowClicked && isCollapsed && setIsCollapsed(false)} // Expand on hover when arrow points outward
			onMouseLeave={() => arrowClicked && !isCollapsed && setIsCollapsed(true)}
		>
			<div className='h-[70px] hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0'>
				<Link
					className='dark:block flex'
					to='/dashboard'
				>
					<div className='flex gap-2 justify-center items-center'>
						<span className='flex'>
							<img
								className='overflow-clip h-8 w-8 min-h-[22px] max-w-none'
								src={logoImg}
							/>
						</span>
						{(arrowClicked || !isCollapsed) &&
							(!arrowClicked || !isCollapsed) && (
								<span className='flex font-medium'>Ace Taxis</span>
							)}
					</div>
				</Link>
				<button
					className='inline-flex items-center cursor-pointer leading-none ps-4 pe-4 font-medium text-[0.9375rem] outline-none justify-center flex-shrink-0 p-0 gap-0 size-[30px] rounded-lg border border-[#F1F1F4] dark:border-[#F1F1F4] bg-[#ffffff] text-[#99A1B7] hover:text-[#4B5675] absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4'
					onClick={handleToggleArrow}
				>
					<KeyboardTabIcon
						className={`${
							isCollapsed ? '-rotate-180' : ''
						} transition-all duration-300 `}
					/>
				</button>
			</div>
			<div className='overflow-hidden flex grow shrink-0 py-5 pe-2'>
				<div className='scrollable-y-hover grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3'>
					<div className='list-none m-0 p-0 flex flex-col grow gap-0.5'>
						<div className='p-0 m-0'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'dashboard')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<GridViewOutlinedIcon
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium hover:text-[#1b84ff] text-[#252F4A]
									`}
									>
										Dashboards
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
										{activeDropdown?.level1 === 'dashboard' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem]'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'dashboard' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to=''
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/dashboard'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/dashboard'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/dashboard'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Light Sidebar
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>
						<div className='p-0 m-0'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'bookings')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<DirectionsCarFilledOutlinedIcon
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium hover:text-[#1b84ff] text-[#252F4A]
									`}
									>
										Bookings
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
										{activeDropdown?.level1 === 'bookings' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem]'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'bookings' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/newbooking'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/newbooking'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/newbooking'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/newbooking'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												New Bookings
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/search-bookings'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/search-bookings'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/search-bookings'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/search-bookings'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Search Bookings
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/audit-bookings'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/audit-bookings'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/audit-bookings'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/audit-bookings'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Audit View
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/airport-runs'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/airport-runs'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/airport-runs'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/airport-runs'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Airport Runs
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/card-bookings'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/card-bookings'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/card-bookings'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/card-bookings'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Card Bookings
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>
						<div className='p-0 m-0'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'dispatch')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<LocalShippingOutlinedIcon
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium hover:text-[#1b84ff] text-[#252F4A]
									`}
									>
										Dispatch
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
										{activeDropdown?.level1 === 'dispatch' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem]'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'dispatch' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/unallocatedjobs'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/unallocatedjobs'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/unallocatedjobs'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/unallocatedjobs'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Unallocated Jobs
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/allocatedjobs'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/allocatedjobs'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/allocatedjobs'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/allocatedjobs'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Allocated Jobs
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/cancelledjobs'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/cancelledjobs'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/cancelledjobs'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/cancelledjobs'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Cancelled Jobs
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/completedjobs'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/completedjobs'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/completedjobs'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/completedjobs'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Completed Jobs
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>
						<div className='p-0 m-0'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'localPoi')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<PersonPinCircleOutlinedIcon
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium hover:text-[#1b84ff] text-[#252F4A]
									`}
									>
										Local POIs
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
										{activeDropdown?.level1 === 'localPoi' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem]'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'localPoi' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/add-localPoi'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/add-localPoi'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/add-localPoi'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/add-localPoi'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Create Local POI
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/list-localPoi'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/list-localPoi'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/list-localPoi'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/list-localPoi'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												List Local POIs
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>
						<div className='p-0 m-0'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'accounts')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<CorporateFareOutlinedIcon
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium hover:text-[#1b84ff] text-[#252F4A]
									`}
									>
										Accounts
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
										{activeDropdown?.level1 === 'accounts' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem]'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'accounts' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/add-accounts'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/add-accounts'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/add-accounts'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/add-accounts'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Add Account
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/list-accounts'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/list-accounts'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/list-accounts'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/list-accounts'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												List Accounts
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>
						<div className='p-0 m-0'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'drivers')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<Groups2Outlined
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium hover:text-[#1b84ff] text-[#252F4A]
									`}
									>
										Drivers
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
										{activeDropdown?.level1 === 'drivers' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem]'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'drivers' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/register-driver'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/register-driver'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/register-driver'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/register-driver'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Register Driver
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/list-drivers'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/list-drivers'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/list-drivers'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/list-drivers'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												List Drivers
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>
						<div className='p-0 m-0'>
							<div className='p-0 m-0 flex flex-col'>
								<Link
									to='/tracking'
									className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
										location.pathname === '/tracking'
											? 'bg-[#f9f9f9] rounded-lg'
											: 'hover:bg-[#f9f9f9] hover:rounded-lg'
									} gap-[10px] ps-[10px] pe-[10px] py-[6px]`}
								>
									<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
										<GpsFixedOutlinedIcon
											className='text-lg text-[#99a1b7]'
											fontSize='1.125rem'
										/>
									</span>
									{!isCollapsed && (
										<span
											className={`flex items-center leading-none flex-grow text-sm font-medium ${
												location.pathname === '/tracking'
													? 'text-[#1b84ff] font-semibold'
													: 'hover:!text-[#1b84ff] text-[#252F4A]'
											}
											`}
										>
											Tracking Driver
										</span>
									)}
								</Link>
							</div>

							<div className='p-0 m-0 flex flex-col'>
								<Link
									to='/availability'
									className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
										location.pathname === '/availability'
											? 'bg-[#f9f9f9] rounded-lg'
											: 'hover:bg-[#f9f9f9] hover:rounded-lg'
									} gap-[10px] ps-[10px] pe-[10px] py-[6px]`}
								>
									<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
										<PermContactCalendarOutlined
											className='text-lg text-[#99a1b7]'
											fontSize='1.125rem'
										/>
									</span>
									{!isCollapsed && (
										<span
											className={`flex items-center leading-none flex-grow text-sm font-medium ${
												location.pathname === '/availability'
													? 'text-[#1b84ff] font-semibold'
													: 'hover:!text-[#1b84ff] text-[#252F4A]'
											}
											`}
										>
											Availability
										</span>
									)}
								</Link>
							</div>

							<div className='p-0 m-0 flex flex-col'>
								<Link
									to='/availability-logs'
									className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
										location.pathname === '/availability-logs'
											? 'bg-[#f9f9f9] rounded-lg'
											: 'hover:bg-[#f9f9f9] hover:rounded-lg'
									} gap-[10px] ps-[10px] pe-[10px] py-[6px]`}
								>
									<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
										<ChromeReaderModeOutlined
											className='text-lg text-[#99a1b7]'
											fontSize='1.125rem'
										/>
									</span>
									{!isCollapsed && (
										<span
											className={`flex items-center leading-none flex-grow text-sm font-medium ${
												location.pathname === '/availability-logs'
													? 'text-[#1b84ff] font-semibold'
													: 'hover:!text-[#1b84ff] text-[#252F4A]'
											}
											`}
										>
											Availability Logs
										</span>
									)}
								</Link>
							</div>
						</div>

						<div className='p-0 m-0 flex flex-col pt-2.25 pb-px'>
							{!isCollapsed && (
								<span className='uppercase text-[0.8125rem] leading-[1.125rem] font-medium text-[#99a1b7] ps-[10px] pe-[10px]'>
									Billings
								</span>
							)}
						</div>
						<div className='p-0 m-0 flex flex-col'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'billings')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<CardTravelOutlined
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span className='flex items-center leading-none flex-grow text-sm font-medium text-[#252F4A] hover:text-[#1b84ff]'>
										Billing & Payments
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px]'>
										{activeDropdown?.level1 === 'billings' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'billings' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<div
											className='p-0 m-0 flex border border-transparent cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]'
											onClick={() => toggleDropdown('level2', 'billing-driver')}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/default'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal me-1 text-[#252F4A] hover:font-medium hover:text-[#1b84ff]`}
											>
												Driver
											</span>
											<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px]'>
												{activeDropdown?.level2 === 'billing-driver' ? (
													<RemoveOutlinedIcon
														className='leading-[0.75rem] text-center'
														fontSize='0.6875rem'
													/>
												) : (
													<AddOutlinedIcon
														className='leading-[0.75rem] text-center'
														fontSize='0.6875rem'
													/>
												)}
											</span>
										</div>
										{!isCollapsed &&
											activeDropdown?.level2 === 'billing-driver' && (
												<div className='p-0 m-0 flex flex-col gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
													<div className='p-0 m-0 flex flex-col'>
														<Link
															className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																location.pathname === '/statement'
																	? 'bg-[#f9f9f9] rounded-lg'
																	: 'hover:bg-[#f9f9f9] hover:rounded-lg'
															} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
															to='/statement'
														>
															<span
																className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																	location.pathname === '/statement'
																		? 'before:bg-[#006ae6]'
																		: 'hover:before:bg-[#006ae6]'
																}`}
															></span>
															<span
																className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																	location.pathname === '/statement'
																		? 'text-[#1b84ff] font-semibold'
																		: 'hover:!text-[#1b84ff] text-[#252F4A]'
																}`}
															>
																Statement Processing
															</span>
														</Link>
													</div>
													<div className='p-0 m-0 flex flex-col'>
														<Link
															className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																location.pathname === '/statement-history'
																	? 'bg-[#f9f9f9] rounded-lg'
																	: 'hover:bg-[#f9f9f9] hover:rounded-lg'
															} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
															to='/statement-history'
														>
															<span
																className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																	location.pathname === '/statement-history'
																		? 'before:bg-[#006ae6]'
																		: 'hover:before:bg-[#006ae6]'
																}`}
															></span>
															<span
																className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																	location.pathname === '/statement-history'
																		? 'text-[#1b84ff] font-semibold'
																		: 'hover:!text-[#1b84ff] text-[#252F4A]'
																}`}
															>
																Statement History
															</span>
														</Link>
													</div>
													{/* <div className='p-0 m-0 flex flex-col-reverse'>
													<div
														className='p-0 m-0 flex items-center border border-transparent grow cursor-pointer gap-[5px] ps-[10px] pe-[10px] py-[8px]'
														onClick={() => setIsExpanded(!isExpanded)}
													>
														<span
															className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																location.pathname === '/default'
																	? 'before:bg-[#006ae6]'
																	: 'hover:before:bg-[#006ae6]'
															}`}
														></span>
														<span
															className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																location.pathname === '/default'
																	? 'text-[#1b84ff] font-semibold'
																	: 'hover:!text-[#1b84ff] text-[#252F4A]'
															}`}
														>
															{isExpanded ? (
																<span className='flex'>Show less</span>
															) : (
																<span className='flex'>Show 4 more</span>
															)}
														</span>
														<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px]'>
															{isExpanded ? (
																<RemoveOutlinedIcon
																	className='leading-[0.75rem] text-center'
																	fontSize='0.6875rem'
																/>
															) : (
																<AddOutlinedIcon
																	className='leading-[0.75rem] text-center'
																	fontSize='0.6875rem'
																/>
															)}
														</span>
													</div>
													{isExpanded && (
														<div className='p-0 m-0 items-center flex-col gap-0.5'>
															<div className='p-0 m-0 flex flex-col'>
																<Link
																	className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																		location.pathname === '/default'
																			? 'bg-[#f9f9f9] rounded-lg'
																			: 'hover:bg-[#f9f9f9] hover:rounded-lg'
																	} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
																	to=''
																>
																	<span
																		className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																			location.pathname === '/default'
																				? 'before:bg-[#006ae6]'
																				: 'hover:before:bg-[#006ae6]'
																		}`}
																	></span>
																	<span
																		className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																			location.pathname === '/default'
																				? 'text-[#1b84ff] font-semibold'
																				: 'hover:!text-[#1b84ff] text-[#252F4A]'
																		}`}
																	>
																		Gamer
																	</span>
																</Link>
															</div>
															<div className='p-0 m-0 flex flex-col'>
																<Link
																	className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																		location.pathname === '/default'
																			? 'bg-[#f9f9f9] rounded-lg'
																			: 'hover:bg-[#f9f9f9] hover:rounded-lg'
																	} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
																	to=''
																>
																	<span
																		className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																			location.pathname === '/default'
																				? 'before:bg-[#006ae6]'
																				: 'hover:before:bg-[#006ae6]'
																		}`}
																	></span>
																	<span
																		className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																			location.pathname === '/default'
																				? 'text-[#1b84ff] font-semibold'
																				: 'hover:!text-[#1b84ff] text-[#252F4A]'
																		}`}
																	>
																		Feeds
																	</span>
																</Link>
															</div>
															<div className='p-0 m-0 flex flex-col'>
																<Link
																	className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																		location.pathname === '/default'
																			? 'bg-[#f9f9f9] rounded-lg'
																			: 'hover:bg-[#f9f9f9] hover:rounded-lg'
																	} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
																	to=''
																>
																	<span
																		className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																			location.pathname === '/default'
																				? 'before:bg-[#006ae6]'
																				: 'hover:before:bg-[#006ae6]'
																		}`}
																	></span>
																	<span
																		className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																			location.pathname === '/default'
																				? 'text-[#1b84ff] font-semibold'
																				: 'hover:!text-[#1b84ff] text-[#252F4A]'
																		}`}
																	>
																		Plain
																	</span>
																</Link>
															</div>
															<div className='p-0 m-0 flex flex-col'>
																<Link
																	className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																		location.pathname === '/default'
																			? 'bg-[#f9f9f9] rounded-lg'
																			: 'hover:bg-[#f9f9f9] hover:rounded-lg'
																	} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
																	to=''
																>
																	<span
																		className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																			location.pathname === '/default'
																				? 'before:bg-[#006ae6]'
																				: 'hover:before:bg-[#006ae6]'
																		}`}
																	></span>
																	<span
																		className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																			location.pathname === '/default'
																				? 'text-[#1b84ff] font-semibold'
																				: 'hover:!text-[#1b84ff] text-[#252F4A]'
																		}`}
																	>
																		Modal
																	</span>
																</Link>
															</div>
														</div>
													)}
												</div> */}
												</div>
											)}
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<div
											className='p-0 m-0 flex border border-transparent cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]'
											onClick={() =>
												toggleDropdown('level2', 'billing-account')
											}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/default'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal me-1 text-[#252F4A] hover:font-medium hover:text-[#1b84ff]`}
											>
												Account
											</span>
											<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px]'>
												{activeDropdown?.level2 === 'billing-account' ? (
													<RemoveOutlinedIcon
														className='leading-[0.75rem] text-center'
														fontSize='0.6875rem'
													/>
												) : (
													<AddOutlinedIcon
														className='leading-[0.75rem] text-center'
														fontSize='0.6875rem'
													/>
												)}
											</span>
										</div>
										{!isCollapsed &&
											activeDropdown?.level2 === 'billing-account' && (
												<div className='p-0 m-0 flex flex-col gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
													<div className='p-0 m-0 flex flex-col'>
														<Link
															className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																location.pathname === '/account-invoice'
																	? 'bg-[#f9f9f9] rounded-lg'
																	: 'hover:bg-[#f9f9f9] hover:rounded-lg'
															} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
															to='/account-invoice'
														>
															<span
																className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																	location.pathname === '/account-invoice'
																		? 'before:bg-[#006ae6]'
																		: 'hover:before:bg-[#006ae6]'
																}`}
															></span>
															<span
																className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																	location.pathname === '/account-invoice'
																		? 'text-[#1b84ff] font-semibold'
																		: 'hover:!text-[#1b84ff] text-[#252F4A]'
																}`}
															>
																Invoice Processor
															</span>
														</Link>
													</div>
													<div className='p-0 m-0 flex flex-col'>
														<Link
															className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																location.pathname === '/invoice-history'
																	? 'bg-[#f9f9f9] rounded-lg'
																	: 'hover:bg-[#f9f9f9] hover:rounded-lg'
															} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
															to='/invoice-history'
														>
															<span
																className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																	location.pathname === '/invoice-history'
																		? 'before:bg-[#006ae6]'
																		: 'hover:before:bg-[#006ae6]'
																}`}
															></span>
															<span
																className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																	location.pathname === '/invoice-history'
																		? 'text-[#1b84ff] font-semibold'
																		: 'hover:!text-[#1b84ff] text-[#252F4A]'
																}`}
															>
																Invoice History
															</span>
														</Link>
													</div>
													<div className='p-0 m-0 flex flex-col'>
														<Link
															className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																location.pathname === '/invoice-delete'
																	? 'bg-[#f9f9f9] rounded-lg'
																	: 'hover:bg-[#f9f9f9] hover:rounded-lg'
															} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
															to='/invoice-delete'
														>
															<span
																className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																	location.pathname === '/invoice-delete'
																		? 'before:bg-[#006ae6]'
																		: 'hover:before:bg-[#006ae6]'
																}`}
															></span>
															<span
																className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																	location.pathname === '/invoice-delete'
																		? 'text-[#1b84ff] font-semibold'
																		: 'hover:!text-[#1b84ff] text-[#252F4A]'
																}`}
															>
																Invoice Delete
															</span>
														</Link>
													</div>
													{/* <div className='p-0 m-0 flex flex-col-reverse'>
													<div
														className='p-0 m-0 flex items-center border border-transparent grow cursor-pointer gap-[5px] ps-[10px] pe-[10px] py-[8px]'
														onClick={() => setIsExpanded(!isExpanded)}
													>
														<span
															className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																location.pathname === '/default'
																	? 'before:bg-[#006ae6]'
																	: 'hover:before:bg-[#006ae6]'
															}`}
														></span>
														<span
															className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																location.pathname === '/default'
																	? 'text-[#1b84ff] font-semibold'
																	: 'hover:!text-[#1b84ff] text-[#252F4A]'
															}`}
														>
															{isExpanded ? (
																<span className='flex'>Show less</span>
															) : (
																<span className='flex'>Show 4 more</span>
															)}
														</span>
														<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px]'>
															{isExpanded ? (
																<RemoveOutlinedIcon
																	className='leading-[0.75rem] text-center'
																	fontSize='0.6875rem'
																/>
															) : (
																<AddOutlinedIcon
																	className='leading-[0.75rem] text-center'
																	fontSize='0.6875rem'
																/>
															)}
														</span>
													</div>
													{isExpanded && (
														<div className='p-0 m-0 items-center flex-col gap-0.5'>
															<div className='p-0 m-0 flex flex-col'>
																<Link
																	className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																		location.pathname === '/default'
																			? 'bg-[#f9f9f9] rounded-lg'
																			: 'hover:bg-[#f9f9f9] hover:rounded-lg'
																	} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
																	to=''
																>
																	<span
																		className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																			location.pathname === '/default'
																				? 'before:bg-[#006ae6]'
																				: 'hover:before:bg-[#006ae6]'
																		}`}
																	></span>
																	<span
																		className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																			location.pathname === '/default'
																				? 'text-[#1b84ff] font-semibold'
																				: 'hover:!text-[#1b84ff] text-[#252F4A]'
																		}`}
																	>
																		Gamer
																	</span>
																</Link>
															</div>
															<div className='p-0 m-0 flex flex-col'>
																<Link
																	className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																		location.pathname === '/default'
																			? 'bg-[#f9f9f9] rounded-lg'
																			: 'hover:bg-[#f9f9f9] hover:rounded-lg'
																	} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
																	to=''
																>
																	<span
																		className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																			location.pathname === '/default'
																				? 'before:bg-[#006ae6]'
																				: 'hover:before:bg-[#006ae6]'
																		}`}
																	></span>
																	<span
																		className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																			location.pathname === '/default'
																				? 'text-[#1b84ff] font-semibold'
																				: 'hover:!text-[#1b84ff] text-[#252F4A]'
																		}`}
																	>
																		Feeds
																	</span>
																</Link>
															</div>
															<div className='p-0 m-0 flex flex-col'>
																<Link
																	className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																		location.pathname === '/default'
																			? 'bg-[#f9f9f9] rounded-lg'
																			: 'hover:bg-[#f9f9f9] hover:rounded-lg'
																	} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
																	to=''
																>
																	<span
																		className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																			location.pathname === '/default'
																				? 'before:bg-[#006ae6]'
																				: 'hover:before:bg-[#006ae6]'
																		}`}
																	></span>
																	<span
																		className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																			location.pathname === '/default'
																				? 'text-[#1b84ff] font-semibold'
																				: 'hover:!text-[#1b84ff] text-[#252F4A]'
																		}`}
																	>
																		Plain
																	</span>
																</Link>
															</div>
															<div className='p-0 m-0 flex flex-col'>
																<Link
																	className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
																		location.pathname === '/default'
																			? 'bg-[#f9f9f9] rounded-lg'
																			: 'hover:bg-[#f9f9f9] hover:rounded-lg'
																	} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
																	to=''
																>
																	<span
																		className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
																			location.pathname === '/default'
																				? 'before:bg-[#006ae6]'
																				: 'hover:before:bg-[#006ae6]'
																		}`}
																	></span>
																	<span
																		className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
																			location.pathname === '/default'
																				? 'text-[#1b84ff] font-semibold'
																				: 'hover:!text-[#1b84ff] text-[#252F4A]'
																		}`}
																	>
																		Modal
																	</span>
																</Link>
															</div>
														</div>
													)}
												</div> */}
												</div>
											)}
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/vat-outputs'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
											to='/vat-outputs'
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/vat-outputs'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/vat-outputs'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Vat Outputs
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>

						<div className='p-0 m-0 flex flex-col'>
							<Link
								to='/tariffs'
								className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
									location.pathname === '/tariffs'
										? 'bg-[#f9f9f9] rounded-lg'
										: 'hover:bg-[#f9f9f9] hover:rounded-lg'
								} gap-[10px] ps-[10px] pe-[10px] py-[6px]`}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<ContactPhoneOutlined
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium ${
											location.pathname === '/tariffs'
												? 'text-[#1b84ff] font-semibold'
												: 'hover:!text-[#1b84ff] text-[#252F4A]'
										}
											`}
									>
										Tariffs
									</span>
								)}
							</Link>
						</div>

						<div className='p-0 m-0 flex flex-col pt-2.25 pb-px'>
							{!isCollapsed && (
								<span className='uppercase text-[0.8125rem] leading-[1.125rem] font-medium text-[#99a1b7] ps-[10px] pe-[10px]'>
									Reports
								</span>
							)}
						</div>
						<div className='p-0 m-0'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'reports')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<SummarizeOutlined
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium hover:text-[#1b84ff] text-[#252F4A]
									`}
									>
										Reports
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
										{activeDropdown?.level1 === 'reports' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem]'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'reports' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/availability-reports'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/availability-reports'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/availability-reports'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/availability-reports'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Availability Report
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/driver-earning-report'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/driver-earning-report'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/driver-earning-report'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/driver-earning-report'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Driver Earnings Report
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>

						<div className='p-0 m-0 flex flex-col pt-2.25 pb-px'>
							{!isCollapsed && (
								<span className='uppercase text-[0.8125rem] leading-[1.125rem] font-medium text-[#99a1b7] ps-[10px] pe-[10px]'>
									Settings
								</span>
							)}
						</div>

						<div className='p-0 m-0'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'settings')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<SettingsOutlined
										className='text-lg text-[#99a1b7]'
										fontSize='1.125rem'
									/>
								</span>
								{!isCollapsed && (
									<span
										className={`flex items-center leading-none flex-grow text-sm font-medium hover:text-[#1b84ff] text-[#252F4A]
									`}
									>
										Settings
									</span>
								)}
								{!isCollapsed && (
									<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
										{activeDropdown?.level1 === 'settings' ? (
											<RemoveOutlinedIcon
												className='leading-[0.75rem] text-center'
												fontSize='0.6875rem'
											/>
										) : (
											<AddOutlinedIcon
												className='leading-[0.75rem]'
												fontSize='0.6875rem'
											/>
										)}
									</span>
								)}
							</div>
							{!isCollapsed && activeDropdown?.level1 === 'settings' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/company-settings'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/company-settings'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/company-settings'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/company-settings'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Company Config
											</span>
										</Link>
									</div>

									<div className='p-0 m-0 flex flex-col'>
										<Link
											to='/msg-settings'
											className={`flex p-0 m-0 items-center cursor-pointer border border-transparent ${
												location.pathname === '/msg-settings'
													? 'bg-[#f9f9f9] rounded-lg'
													: 'hover:bg-[#f9f9f9] hover:rounded-lg'
											} gap-[14px] ps-[10px] pe-[10px] py-[8px]`}
										>
											<span
												className={`items-center flex-shrink-0 flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 ${
													location.pathname === '/msg-settings'
														? 'before:bg-[#006ae6]'
														: 'hover:before:bg-[#006ae6]'
												}`}
											></span>
											<span
												className={`flex items-center flex-grow text-[0.8125rem] leading-[1.125rem] font-normal ${
													location.pathname === '/msg-settings'
														? 'text-[#1b84ff] font-semibold'
														: 'hover:!text-[#1b84ff] text-[#252F4A]'
												}`}
											>
												Message Config
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
