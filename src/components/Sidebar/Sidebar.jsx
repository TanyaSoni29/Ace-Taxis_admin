/** @format */

import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [arrowClicked, setArrowClicked] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState({});
	const [isExpanded, setIsExpanded] = useState(false)

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
					className='dark:hidden'
					to='/dashboard'
				>
					<img
						className='default-logo overflow-clip min-h-[22px] max-w-none'
						src={logoImg}
					/>
					<img
						className='small-logo overflow-clip min-h-[22px] max-w-none'
						src={logoImg}
					/>
				</Link>
				<Link
					className='hidden dark:block'
					to='/dashboard'
				>
					<img
						className='default-logo overflow-clip min-h-[22px] max-w-none'
						src={logoImg}
					/>
					<img
						className='small-logo overflow-clip min-h-[22px] max-w-none'
						src={logoImg}
					/>
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
									<GridViewOutlinedIcon className='text-lg' />
								</span>
								<span className='flex items-center leading-none flex-grow text-sm font-medium text-[#252F4A] menu-item-active:text-primary menu-link-hover:!text-primary'>
									Dashboards
								</span>
								<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px] text-center'>
									{activeDropdown?.level1 === 'dashboard' ? (
										<RemoveOutlinedIcon className='text-2xs text-center' />
									) : (
										<AddOutlinedIcon className='text-2xs' />
									)}
								</span>
							</div>
							{activeDropdown?.level1 === 'dashboard' && (
								<div className='p-0 m-0 items-center flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<Link
											to=''
											className='menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-black-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-black-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]'
										>
											<span className='menu-bullet flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
											<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#252F4A] menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary'>
												Light Sidebar
											</span>
										</Link>
									</div>
									<div className='p-0 m-0 flex flex-col'>
										<Link className='menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-black-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-black-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]'>
											<span className='menu-bullet flex w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
											<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#252F4A] menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary'>
												Dark Sidebar
											</span>
										</Link>
									</div>
								</div>
							)}
						</div>
						<div className='p-0 m-0 flex flex-col pt-2.25 pb-px'>
							<span className='menu-heading uppercase text-2sm font-medium text-[#99A1B7] ps-[10px] pe-[10px]'>
								User
							</span>
						</div>
						<div className='p-0 m-0 flex flex-col'>
							<div
								className='p-0 m-0 flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]'
								onClick={() => toggleDropdown('level1', 'user')}
							>
								<span className='flex flex-shrink-0 items-start text-[#99A1B7] dark:text-[#464852] w-[20px]'>
									<AccountCircleOutlinedIcon className='text-lg' />
								</span>
								<span className='flex items-center leading-none flex-grow text-sm font-medium text-[#252F4A] menu-item-active:text-primary menu-link-hover:!text-primary'>
									Public Profile
								</span>
								<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px]'>
									{activeDropdown?.level1 === 'user' ? (
										<RemoveOutlinedIcon className='text-2xs' />
									) : (
										<AddOutlinedIcon className='text-2xs' />
									)}
								</span>
							</div>
							{activeDropdown?.level1 === 'user' && (
								<div className='p-0 m-0 flex flex-col gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
									<div className='p-0 m-0 flex flex-col'>
										<div
											className='p-0 m-0 flex border border-transparent cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]'
											onClick={() => toggleDropdown('level2', 'profile')}
										>
											<span className='flex items-center w-[6px] -start-[3px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
											<span className='flex items-center leading-none flex-grow text-2sm font-normal me-1 text-[#252F4A] menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary'>
												Profiles
											</span>
											<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px]'>
												{activeDropdown?.level2 === 'profile' ? (
													<RemoveOutlinedIcon className='text-2xs' />
												) : (
													<AddOutlinedIcon className='text-2xs' />
												)}
											</span>
										</div>
										{activeDropdown?.level2 === 'profile' && (
											<div className='p-0 m-0 items-center flex flex-col gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200'>
												<div className='p-0 m-0 flex flex-col'>
													<Link
														className='menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]'
														to=''
													>
														<span className='menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
														<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#252F4A] menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary'>
															Default
														</span>
													</Link>
												</div>
												<div className='p-0 m-0 flex flex-col'>
													<Link
														className='menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]'
														to=''
													>
														<span className='menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
														<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#252F4A] menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary'>
															Creator
														</span>
													</Link>
												</div>
												<div className='p-0 m-0 flex flex-col-reverse'>
													<div className='menu-link border border-transparent grow cursor-pointer gap-[5px] ps-[10px] pe-[10px] py-[8px]' onClick={() => setIsExpanded(!isExpanded)}>
														<span className='menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
														<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#78829D] dark:text-[#636674]'>
															<span className='hidden menu-item-show:!flex'>
																Show less
															</span>
															<span className='flex menu-item-show:hidden'>
																Show 4 more
															</span>
														</span>
														<span className='flex items-center text-[#C4CADA] w-[20px] shrink-0 justify-end ms-1 me-[-10px]'>
															<AddOutlinedIcon className='text-2xs menu-item-show:hidden' />
															<RemoveOutlinedIcon className='ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex' />
														</span>
													</div>
													{

													}
													<div className='p-0 m-0 items-center hidden flex-col gap-0.5'>
														<div className='p-0 m-0 flex flex-col'>
															<Link
																className='menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]'
																to=''
															>
																<span className='menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
																<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#252F4A] menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary'>
																	Gamer
																</span>
															</Link>
														</div>
														<div className='p-0 m-0 flex flex-col'>
															<Link
																className='menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]'
																to=''
															>
																<span className='menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
																<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#252F4A] menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary'>
																	Feeds
																</span>
															</Link>
														</div>
														<div className='p-0 m-0 flex flex-col'>
															<Link
																className='menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]'
																to=''
															>
																<span className='menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
																<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#252F4A] menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary'>
																	Plain
																</span>
															</Link>
														</div>
														<div className='p-0 m-0 flex flex-col'>
															<Link
																className='menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]'
																to=''
															>
																<span className='menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary'></span>
																<span className='flex items-center leading-none flex-grow text-2sm font-normal text-[#252F4A] menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary'>
																	Modal
																</span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										)}
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
