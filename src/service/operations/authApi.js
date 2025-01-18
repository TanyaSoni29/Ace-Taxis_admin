/** @format */

import { toast } from 'react-hot-toast';
import { authEndpoints } from '../apis';
import {
	setIsAuth,
	setLoading,
	setToken,
	setUser,
} from '../../slices/authSlice';
import { handleGetReq, handlePostReq, setHeaders } from '../apiRequestHandler';
import { sendLogs } from '../../utils/getLogs';

const { LOGIN, REGISTER, GET_USER } = authEndpoints;

export function register(data, navigate) {
	return async (dispatch) => {
		dispatch(setLoading(true));
		const response = await handlePostReq(REGISTER, data);
		console.log('SIGNUP API RESPONSE.........', response);

		if (response.status === 'success') {
			toast.success('User Register Successfully');
			navigate('/');
			sendLogs(
				{
					url: REGISTER,
					reqBody: data,
					headers: setHeaders(),
					response: response,
				},
				'info'
			);
		} else {
			toast.error('Failed to Register New User');
			navigate('/signup');
		}

		dispatch(setLoading(false));
	};
}

export function login(data, navigate) {
	return async (dispatch) => {
		dispatch(setLoading(true));

		const response = await handlePostReq(LOGIN, data);

		console.log('LOGIN API RESPONSE.........', response);
		if (response.status === 'success') {
			toast.success('Login Successfully');

			dispatch(setToken(response.token));
			dispatch(setIsAuth(true));
			localStorage.setItem('token', JSON.stringify(response.token));

			navigate('/dashboard');

			sendLogs(
				{
					url: LOGIN,
					reqBody: data,
					headers: setHeaders(),
					response: response,
				},
				'info'
			);
		} else {
			toast.error('Failed to Login User');
			navigate('/signup');
		}

		dispatch(setLoading(false));
	};
}

export function getUser(navigate) {
	return async (dispatch, getState) => {
		// Check for token in Redux state or localStorage
		const storedToken = getState().auth.token || localStorage.getItem('token');

		const username = getState().auth.username;

		if (!storedToken) {
			console.log('No token provided, redirecting to sign-in.');
			toast.error('No token found. Please log in.');
			dispatch(setToken(null));
			dispatch(setIsAuth(false));
			dispatch(setUser(null));
			navigate('/'); // Redirect to login
			return;
		}
		dispatch(setLoading(true));

		// Fetch current user details using token
		const response = await handleGetReq(GET_USER(username));

		console.log('GET ME API RESPONSE.........', response);

		if (response.status === 'success') {
			dispatch(setUser(response.data));
			dispatch(setIsAuth(true));
			sendLogs(
				{
					url: LOGIN,
					reqBody: username,
					headers: setHeaders(),
					response: response,
				},
				'info'
			);
		} else {
			dispatch(setToken(null));
			dispatch(setIsAuth(false));
			localStorage.removeItem('token');
			// Redirect to login page
			navigate('/');
		}

		navigate('/');

		dispatch(setLoading(false));
	};
}

export function logout(navigate) {
	return (dispatch) => {
		dispatch(setToken(null));
		dispatch(setUser(null));
		dispatch(setIsAuth(false));
		localStorage.removeItem('token');
		toast.success('Logged Out');
		navigate('/');
	};
}
