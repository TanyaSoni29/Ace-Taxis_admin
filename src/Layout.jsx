/** @format */

import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function Layout() {
	return (
		<div className='flex h-screen'>
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<div className='flex-1 flex flex-col'>
				{/* Header */}
				<Header />

				{/* Outlet for Nested Routes */}
				<div className='flex-1 overflow-auto'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Layout;
