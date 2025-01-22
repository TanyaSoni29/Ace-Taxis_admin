/** @format */

import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function Layout() {
	return (
		<div className='flex h-screen overflow-hidden'>
			{/* Sidebar */}
			<div className='w-64 h-full'>
				<Sidebar />
			</div>

			{/* Main Content */}
			<div className='flex-1 flex flex-col'>
				{/* Header */}
				<div className='h-16'>
					<Header />
				</div>

				{/* Outlet for Nested Routes */}
				<div className='flex-1 overflow-auto bg-[#FEFEFE]'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Layout;
