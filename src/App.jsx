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

import BookingSearch from './components/Bookings/BookingsSearch';
import AuditView from './components/Bookings/AuditView';
import AirportRuns from './components/Bookings/AirportRuns';
import CardBooking from './components/Bookings/CardBookings';

import AddAccount from './components/Accounts/Addaccounts';
import ListAccount from './components/Accounts/Listaccounts';

import ListDriver from './components/Drivers/ListDriver';
import RegisterDriver from './components/Drivers/RegisterDriver';

import Tariff from './components/Tariff/Tariff';

import InvoiceDelete from './components/Billing&Payments/Account/InvoiceDelete';
import InvoiceHistory from './components/Billing&Payments/Account/InvoiceHistory';
import InvoiceProcessor from './components/Billing&Payments/Account/InvoiceProcessor';
import StatementHistory from './components/Billing&Payments/Driver/StatementHistory';
import StatementProcessing from './components/Billing&Payments/Driver/StatementProcessing';
import VatOutput from './components/Billing&Payments/VatOutput';

import DriverEarningsReport from './components/DriverEarningReport/DriverEarningsReport';

import CompanyConfig from './components/CompanyConfig/CompanyConfig';

import MessageConfig from './components/MessageConfig/MessageConfig';

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
					path='/availability'
					element={<ProtectedRoute element={<Availability />} />}
				/>
				<Route
					path='/availability-logs'
					element={<ProtectedRoute element={<AvailabilityLogs />} />}
				/>
				<Route
					path='/availability-reports'
					element={<ProtectedRoute element={<AvailabilityReport />} />}
				/>

				<Route
					path='/add-localPoi'
					element={<ProtectedRoute element={<AddLocalPoi />} />}
				/>
				<Route
					path='/list-localPoi'
					element={<ProtectedRoute element={<ListPoi />} />}
				/>

				<Route
					path='search-bookings'
					element={<ProtectedRoute element={<BookingSearch />} />}
				/>
				<Route
					path='audit-bookings'
					element={<ProtectedRoute element={<AuditView />} />}
				/>
				<Route
					path='airport-runs'
					element={<ProtectedRoute element={<AirportRuns />} />}
				/>
				<Route
					path='card-bookings'
					element={<ProtectedRoute element={<CardBooking />} />}
				/>

				<Route
					path='/add-accounts'
					element={<ProtectedRoute element={<AddAccount />} />}
				/>
				<Route
					path='/list-accounts'
					element={<ProtectedRoute element={<ListAccount />} />}
				/>

				<Route
					path='/register-driver'
					element={<ProtectedRoute element={<RegisterDriver />} />}
				/>
				<Route
					path='/list-drivers'
					element={<ProtectedRoute element={<ListDriver />} />}
				/>

				<Route
					path='/tariffs'
					element={<ProtectedRoute element={<Tariff />} />}
				/>

				<Route
					path='/invoice-delete'
					element={<ProtectedRoute element={<InvoiceDelete />} />}
				/>
				<Route
					path='/invoice-history'
					element={<ProtectedRoute element={<InvoiceHistory />} />}
				/>
				<Route
					path='/account-invoice'
					element={<ProtectedRoute element={<InvoiceProcessor />} />}
				/>
				<Route
					path='/statement-history'
					element={<ProtectedRoute element={<StatementHistory />} />}
				/>
				<Route
					path='/statement'
					element={<ProtectedRoute element={<StatementProcessing />} />}
				/>
				<Route
					path='/vat-outputs'
					element={<ProtectedRoute element={<VatOutput />} />}
				/>

				<Route
					path='/driver-earning-report'
					element={<ProtectedRoute element={<DriverEarningsReport />} />}
				/>

				<Route
					path='/company-settings'
					element={<ProtectedRoute element={<CompanyConfig />} />}
				/>

				<Route
					path='/msg-settings'
					element={<ProtectedRoute element={<MessageConfig />} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
