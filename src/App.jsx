/** @format */

import { Route, Routes } from 'react-router-dom';
import Login from './components/AuthForms/Login';
import Register from './components/AuthForms/Register';
import ProtectedRoute from './utils/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';

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
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
