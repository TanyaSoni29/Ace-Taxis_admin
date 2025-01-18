/** @format */
const BASE = import.meta.env.VITE_BASE_URL;

function App() {
	return (
		<>
			<div>
				<h1 className='text-3xl font-bold underline text-blue-500'>
					Hello world!
				</h1>
				<p className='text-black'>{BASE}</p>
			</div>
		</>
	);
}

export default App;
