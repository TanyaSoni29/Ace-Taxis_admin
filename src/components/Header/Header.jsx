/** @format */

import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

function Header() {
	return (
		<div className='h-[70px] flex items-center justify-between bg-white px-4 border-b border-gray-200'>
			{/* Breadcrumb */}
			<div className='flex items-center gap-2 text-sm text-gray-500'>
				<Link
					to='/'
					className='hover:underline text-blue-500'
				>
					Public Profile
				</Link>
				<span>{`>`}</span>
				<span className='text-gray-700'>Profiles</span>
			</div>

			{/* Icons and Profile */}
			<div className='flex items-center gap-4'>
				<SearchIcon className='text-gray-500 hover:text-blue-500 cursor-pointer' />
				<ChatBubbleOutlineIcon className='text-gray-500 hover:text-blue-500 cursor-pointer' />
				<GridViewOutlinedIcon className='text-gray-500 hover:text-blue-500 cursor-pointer' />
				<CalendarTodayOutlinedIcon className='text-gray-500 hover:text-blue-500 cursor-pointer' />
				<div className='relative w-8 h-8'>
					<img
						src='https://via.placeholder.com/40'
						alt='Profile'
						className='rounded-full border-2 border-green-500'
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
