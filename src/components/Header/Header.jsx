/** @format */

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getpathname } from '../../utils/getpathfullname';

function Header() {
	const location = useLocation();

	const [pathname, setPathname] = useState({});

	useEffect(() => {
		const path = getpathname(location);
		setPathname(path);
		// eslint-disable-next-line
	}, []);

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
				<div className='flex items-center gap-4'>
					<div className='relative w-8 h-8'>
						<img
							src='https://via.placeholder.com/40'
							alt='Profile'
							className='rounded-full border-2 border-green-500'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
