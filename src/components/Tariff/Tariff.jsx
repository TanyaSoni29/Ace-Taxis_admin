/** @format */

import { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	IconButton,
} from '@mui/material';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';

const Tariff = () => {
	const [rows, setRows] = useState([
		{
			id: 1,
			name: 'Tariff 1 : Day Rate',
			description: 'Chargeable from 7am until 10pm.',
			initialCharge: 0,
			firstMileCharge: 4.4,
			additionalMileCharge: 2.8,
		},
		{
			id: 2,
			name: 'Tariff 2 : Day Rate',
			description: 'Chargeable from 10pm until 7am and on weekends.',
			initialCharge: 0,
			firstMileCharge: 6.6,
			additionalMileCharge: 4.2,
		},
		{
			id: 3,
			name: 'Tariff 3 : Day Rate',
			description: 'Chargeable on Christmas Day, Boxing Day, and New Year.',
			initialCharge: 0,
			firstMileCharge: 8.8,
			additionalMileCharge: 5.6,
		},
	]);

	const handleIncrement = (id, field) => {
		setRows((prevRows) =>
			prevRows.map((row) =>
				row.id === id ? { ...row, [field]: row[field] + 1 } : row
			)
		);
	};

	const handleDecrement = (id, field) => {
		setRows((prevRows) =>
			prevRows.map((row) =>
				row.id === id && row[field] > 0
					? { ...row, [field]: row[field] - 1 }
					: row
			)
		);
	};

	return (
		<div className='flex-1 p-6 bg-gray-100'>
			{/* Header */}
			<h1 className='text-2xl font-semibold mb-4'>Tariff Configuration</h1>

			{/* Table */}
			<TableContainer
				component={Paper}
				className='w-full'
			>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Description</TableCell>
							<TableCell>Initial Charge</TableCell>
							<TableCell>First Mile Charge</TableCell>
							<TableCell>Additional Mile Charge</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.description}</TableCell>
								<TableCell>
									<div className='flex items-center space-x-1'>
										<IconButton
											onClick={() => handleIncrement(row.id, 'initialCharge')}
										>
											<ArrowDropUp />
										</IconButton>
										<span>{row.initialCharge}</span>
										<IconButton
											onClick={() => handleDecrement(row.id, 'initialCharge')}
										>
											<ArrowDropDown />
										</IconButton>
									</div>
								</TableCell>
								<TableCell>
									<div className='flex items-center space-x-1'>
										<IconButton
											onClick={() => handleIncrement(row.id, 'firstMileCharge')}
										>
											<ArrowDropUp />
										</IconButton>
										<span>{row.firstMileCharge.toFixed(1)}</span>
										<IconButton
											onClick={() => handleDecrement(row.id, 'firstMileCharge')}
										>
											<ArrowDropDown />
										</IconButton>
									</div>
								</TableCell>
								<TableCell>
									<div className='flex items-center space-x-1'>
										<IconButton
											onClick={() =>
												handleIncrement(row.id, 'additionalMileCharge')
											}
										>
											<ArrowDropUp />
										</IconButton>
										<span>{row.additionalMileCharge.toFixed(1)}</span>
										<IconButton
											onClick={() =>
												handleDecrement(row.id, 'additionalMileCharge')
											}
										>
											<ArrowDropDown />
										</IconButton>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{/* Update Button */}
			<div className='mt-4'>
				<Button
					variant='contained'
					color='primary'
					className='capitalize'
				>
					Update Tariff
				</Button>
			</div>
		</div>
	);
};

export default Tariff;
