/** @format */

import { Route, Routes } from 'react-router-dom';
import Login from './components/AuthForms/Login';
import Register from './components/AuthForms/Register';
import ProtectedRoute from './utils/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';

import NewBooking from './components/NewBooking/NewBooking';

import AllocatedJobs from './components/Dispatch/AllocatedJobs';
import CancelledJobs from './components/Dispatch/CancelledJobs';
import CompletedJobs from './components/Dispatch/CompletedJobs';
import UnallocatedJobs from './components/Dispatch/UnallocatedJobs';

import Tracking from './components/Tracking/Tracking';

import Availability from './components/Availability/Availability';
import AvailabilityLogs from './components/AvailabilityLogs/AvailabilityLogs';
import AvailabilityReport from './components/AvailabilityReport/AvailabilityReport';

import AddLocalPoi from './components/LocalPoi/addpoi';
import ListPoi from './components/LocalPoi/listpoi';

import AddAccount from './components/Accounts/Addaccounts';
import ListAccount from './components/Accounts/Listaccounts';

import ListDriver from './components/Drivers/ListDriver';
import RegisterDriver from './components/Drivers/RegisterDriver';

import CompanyConfig from './components/CompanyConfig/CompanyConfig';

/** @format */

function App() {
	return (
		<div className='flex flex-col h-screen w-screen'>
			<Routes>
				<Route
					path='/signup'
					element={<Register />}
				/>
				<Route
					path='/'
					element={<Login />}
				/>
				<Route
					path='/dashboard'
					element={<ProtectedRoute element={<Dashboard />} />}
				/>
				<Route
					path='/newbooking'
					element={<ProtectedRoute element={<NewBooking />} />}
				/>

				<Route
					path='/allocatedjobs'
					element={<ProtectedRoute element={<AllocatedJobs />} />}
				/>
				<Route
					path='/cancelledjobs'
					element={<ProtectedRoute element={<CancelledJobs />} />}
				/>
				<Route
					path='/completedjobs'
					element={<ProtectedRoute element={<CompletedJobs />} />}
				/>
				<Route
					path='/unallocatedjobs'
					element={<ProtectedRoute element={<UnallocatedJobs />} />}
				/>

				<Route
					path='/tracking'
					element={<ProtectedRoute element={<Tracking />} />}
				/>

				<Route
					path='/addpoi'
					element={<ProtectedRoute element={<AddLocalPoi />} />}
				/>
				<Route
					path='/listpoi'
					element={<ProtectedRoute element={<ListPoi />} />}
				/>

				<Route
					path='/addaccounts'
					element={<ProtectedRoute element={<AddAccount />} />}
				/>
				<Route
					path='/listaccounts'
					element={<ProtectedRoute element={<ListAccount />} />}
				/>

				<Route
					path='/registerdriver'
					element={<ProtectedRoute element={<RegisterDriver />} />}
				/>
				<Route
					path='/listdriver'
					element={<ProtectedRoute element={<ListDriver />} />}
				/>

				<Route
					path='/companyconfig'
					element={<ProtectedRoute element={<CompanyConfig />} />}
				/>

				<Route
					path='/availability'
					element={<ProtectedRoute element={<Availability />} />}
				/>
				<Route
					path='/availabilitylogs'
					element={<ProtectedRoute element={<AvailabilityLogs />} />}
				/>
				<Route
					path='/availabilityreport'
					element={<ProtectedRoute element={<AvailabilityReport />} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
