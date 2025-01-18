/** @format */

import { Route, Routes } from 'react-router-dom';
import Login from './components/AuthForms/Login';
import Register from './components/AuthForms/Register';

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
			</Routes>
		</div>
	);
}

export default App;
