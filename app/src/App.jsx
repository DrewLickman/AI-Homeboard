/* eslint-disable react/prop-types */
import './App.css'
import AiCardBoard from './components/AiCardBoard.jsx';

function App() {

	const SortButton = ({ text }) =>
	{
		return (
		<button className="border-2 m-2 p-1 rounded-lg">
			{text}
		</button>);
	};

	return (
		<>
			<h1 className="border-2 text-center">AI Homeboard</h1>

			<div className="flex flex-row">

				{/* News and Updates Column */}
				<div className="border-2 min-w-sm max-w-sm h-screen text-center">Latest News and Updates</div>
				
				{/* Sorting and Filtering, and AI Card Board */}
				<div className="flex flex-col">
					<div className="border-2 min-h-12">
						
						<div className="inline">
							<span className="ml-2">Sort:</span>
							<SortButton text="🔥Popularity"/>
							<SortButton text="🔁Recently Updated"/>
							<SortButton text="🔠A-Z"/>
						</div>

						<hr className="border-2"></hr>

						<div className="inline">
							<span className="ml-2">Filter:</span>
							<SortButton text="🗣Chat"/>
							<SortButton text="🎤Voice"/>
							<SortButton text="📸Images"/>
							<SortButton text="🎥Video"/>
							<SortButton text="👓3D Models"/>
							<SortButton text="🧬Specialized"/>
						</div>
						<input
							className="border-2 m-2 p-1 rounded-lg"
							placeholder="Search"
						></input>
						
					</div>
					<div className="border-2 flex-auto  h-screen">
						<div className="">
							<AiCardBoard/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
