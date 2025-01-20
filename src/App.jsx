/** @format */

import { Route, Routes } from 'react-router-dom';
import Login from './components/AuthForms/Login';
import Register from './components/AuthForms/Register';
import ProtectedRoute from './utils/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';

import NewBooking from './components/NewBooking/NewBooking';

import AddLocalPoi from './components/LocalPoi/addpoi';
import ListPoi from './components/LocalPoi/listpoi';

import AddAccount from './components/Accounts/Addaccounts';
import ListAccount from './components/Accounts/Listaccounts';

import ListDriver from './components/Drivers/ListDriver';
import RegisterDriver from './components/Drivers/RegisterDriver';

import CompanyConfig from './components/CompanyConfig/CompanyConfig';

import AvailabilityLogs from './components/AvailabilityLogs/AvailabilityLogs';

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
					path='/availabilitylogs'
					element={<ProtectedRoute element={<AvailabilityLogs />} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
