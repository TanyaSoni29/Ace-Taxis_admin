/** @format */

export function getpathname(location) {
	const pathname = location.pathname;
	if (pathname === '/dashboard') return { one: 'Dashboard' };
	if (pathname === '/newbooking')
		return { one: 'Bookings', two: 'New Bookings' };
	if (pathname === '/search-bookings')
		return { one: 'Bookings', two: 'Search Bookings' };
	if (pathname === '/audit-bookings')
		return { one: 'Bookings', two: 'Audit View' };
	if (pathname === '/airport-runs')
		return { one: 'Bookings', two: 'Airport Runs' };
	if (pathname === '/card-bookings')
		return { one: 'Bookings', two: 'Card Bookings' };
	if (pathname === '/unallocatedjobs')
		return { one: 'Dispatch', two: 'Unallocated Jobs' };
	if (pathname === '/allocatedjobs')
		return { one: 'Dispatch', two: 'Allocated Jobs' };
	if (pathname === '/completedjobs')
		return { one: 'Dispatch', two: 'Completed Jobs' };
	if (pathname === '/cancelledjobs')
		return { one: 'Dispatch', two: 'Cancelled Jobs' };
	if (pathname === '/add-localPoi')
		return { one: 'Local POIs', two: 'Create Local POIs' };
	if (pathname === '/list-localPoi')
		return { one: 'Local POIs', two: 'List Local POIs' };
	if (pathname === '/add-accounts')
		return { one: 'Accounts', two: 'Add Accounts' };
	if (pathname === '/list-accounts')
		return { one: 'Accounts', two: 'List Accounts' };
	if (pathname === '/register-driver')
		return { one: 'Drivers', two: 'Register Drivers' };
	if (pathname === '/list-drivers')
		return { one: 'Drivers', two: 'List Drivers' };
	if (pathname === '/tracking') return { one: 'Tracking' };
	if (pathname === '/availability') return { one: 'Availability' };
	if (pathname === '/availability-logs') return { one: 'Availability Logs' };
	if (pathname === '/tariffs') return { one: 'Tariffs' };
	if (pathname === '/statement')
		return {
			one: 'Billing & Payments',
			two: 'Drivers',
			three: 'Statement Processing',
		};
	if (pathname === '/statement-history')
		return {
			one: 'Billing & Payments',
			two: 'Drivers',
			three: 'Statement History',
		};
	if (pathname === '/account-invoice')
		return {
			one: 'Billing & Payments',
			two: 'Account',
			three: 'Invoice Processor',
		};
	if (pathname === '/invoice-history')
		return {
			one: 'Billing & Payments',
			two: 'Account',
			three: 'Invoice History',
		};
	if (pathname === '/invoice-delete')
		return {
			one: 'Billing & Payments',
			two: 'Account',
			three: 'Invoice Delete',
		};
	if (pathname === '/vat-outputs')
		return { one: 'Billing & Payments', two: 'Vat Outputs' };
	if (pathname === '/availability-reports')
		return { one: 'Reports', two: 'Availability Reports' };
	if (pathname === '/driver-earning-report')
		return { one: 'Reports', two: 'Driver Earning Report' };
	if (pathname === '/company-settings')
		return { one: 'Settings', two: 'Company Settings' };
	if (pathname === '/msg-settings')
		return { one: 'Settings', two: 'Message Settings' };
}
