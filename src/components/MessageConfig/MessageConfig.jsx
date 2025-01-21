/** @format */

function MessageConfig() {
	return (
		<div className='flex-1 p-6 bg-gray-100'>
			<h1 className='text-2xl font-semibold mb-6'>Messaging Config</h1>

			{/* Config Sections */}
			<div className='grid grid-cols-2 gap-6'>
				{/* Config Blocks */}
				{[
					{ label: 'DRIVER - ON ALLOCATE', color: 'bg-blue-500' },
					{ label: 'CUSTOMER - ON ALLOCATE', color: 'bg-red-500' },
					{ label: 'DRIVER - UN-ALLOCATE', color: 'bg-blue-500' },
					{ label: 'CUSTOMER - UN-ALLOCATE', color: 'bg-red-500' },
					{ label: 'DRIVER - ON AMEND BOOKING', color: 'bg-blue-500' },
					{ label: 'CUSTOMER - ON AMEND BOOKING', color: 'bg-red-500' },
				].map((config, index) => (
					<div
						key={index}
						className='p-4 bg-white border rounded shadow-md flex flex-col'
					>
						<div className='mb-4'>
							<span
								className={`text-white px-4 py-1 rounded-full text-sm font-medium ${config.color}`}
							>
								{config.label}
							</span>
						</div>
						{/* Radio Options */}
						<fieldset className='flex items-center space-x-6'>
							<label className='flex items-center space-x-2'>
								<input
									type='radio'
									name={`message_${index}`}
									value='none'
									className='w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500'
								/>
								<span>None</span>
							</label>
							<label className='flex items-center space-x-2'>
								<input
									type='radio'
									name={`message_${index}`}
									value='whatsapp'
									className='w-4 h-4 border-green-500 text-green-500 focus:ring-green-500'
								/>
								<span>WhatsApp</span>
							</label>
							<label className='flex items-center space-x-2'>
								<input
									type='radio'
									name={`message_${index}`}
									value='text_message'
									className='w-4 h-4 border-blue-600 text-blue-600 focus:ring-blue-600'
								/>
								<span>Text Message</span>
							</label>
						</fieldset>
					</div>
				))}
			</div>
		</div>
	);
}

export default MessageConfig;
