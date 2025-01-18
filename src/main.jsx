/** @format */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import * as Sentry from '@sentry/react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/index.js';

Sentry.init({
	dsn: 'https://03883b86000ffd6461d78fbc7deb246d@o4507848991375360.ingest.us.sentry.io/4507855087599616',
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.replayIntegration(),
	],
	// Tracing
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
	tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const store = configureStore({
	reducer: rootReducer,
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
				<Toaster />
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
