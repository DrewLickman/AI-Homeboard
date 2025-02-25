/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
import './styles/global.css'; // Import the global styles
import AiCardBoard from './components/AiCardBoard.jsx';
import NewsCardBoard from './components/NewsCardBoard.jsx';

function App() {
	// State for sorting and filtering
	const [sortOption, setSortOption] = useState('popularity');
	const [activeFilters, setActiveFilters] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	// Sort button component with active state and futuristic styling
	const SortButton = ({ text, value, icon }) => {
		const isActive = sortOption === value;
		return (
			<button
				className={`m-2 p-2 rounded-lg transition-all duration-300 relative overflow-hidden ${isActive
						? 'bg-gradient-to-r from-cyan-600 to-pink-600 text-white border border-cyber-cyan-400 shadow-neon-cyan'
						: 'bg-dark-700 text-gray-300 border border-gray-600 hover:border-cyber-cyan-500 hover:text-cyan-300 hover:shadow-neon-cyan'
					}`}
				onClick={() => setSortOption(value)}
			>
				<span className={`${isActive ? 'opacity-30 absolute inset-0 cyber-grid-bg' : 'hidden'}`}></span>
				<span className="relative">{icon} {text}</span>
			</button>
		);
	};

	// Filter button component with toggle functionality and futuristic styling
	const FilterButton = ({ text, value, icon }) => {
		const isActive = activeFilters.includes(value);

		const toggleFilter = () => {
			if (isActive) {
				setActiveFilters(activeFilters.filter(filter => filter !== value));
			} else {
				setActiveFilters([...activeFilters, value]);
			}
		};

		return (
			<button
				className={`m-2 p-2 rounded-lg transition-all duration-300 relative overflow-hidden ${isActive
						? 'bg-gradient-to-r from-pink-600 to-yellow-600 text-white border border-cyber-magenta-400 shadow-neon-magenta'
						: 'bg-dark-700 text-gray-300 border border-gray-600 hover:border-cyber-magenta-500 hover:text-pink-300 hover:shadow-neon-magenta'
					}`}
				onClick={toggleFilter}
			>
				<span className={`${isActive ? 'opacity-30 absolute inset-0 cyber-grid-bg' : 'hidden'}`}></span>
				<span className="relative">{icon} {text}</span>
			</button>
		);
	};

	// Handle search input changes
	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div className="cyber-container">
			<header className="cyber-header">
				<div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none"></div>
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-400 to-transparent blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-pink-400 to-transparent blur-3xl"></div>
				</div>
				<h1 className="text-center text-4xl font-bold text-white text-shadow-neon-cyan tracking-wider">AI Homeboard</h1>
			</header>

			<div className="container mx-auto my-4 flex flex-col md:flex-row gap-4">
				{/* News and Updates Column */}
				<div className="md:w-1/4 cyber-card-pink">
					<div className="bg-gradient-to-r from-cyan-600 to-magenta-600 p-3 text-xl font-semibold text-white relative">
						<div className="absolute inset-0 bg-black opacity-20"></div>
						<span className="relative">Latest News and Updates</span>
					</div>
					<div className="p-2">
						<NewsCardBoard />
					</div>
				</div>

				{/* Sorting and Filtering, and AI Card Board */}
				<div className="md:w-3/4 flex flex-col gap-4">
					<div className="cyber-card">
						<div className="mb-2">
							<span className="font-semibold text-cyan-400 mr-2">Sort:</span>
							<div className="flex flex-wrap">
								<SortButton text="Popularity" value="popularity" icon="🔥" />
								<SortButton text="Recently Updated" value="recent" icon="🔁" />
								<SortButton text="A-Z" value="alphabetical" icon="🔠" />
							</div>
						</div>

						<hr className="my-3 border-cyber-cyan-900" />

						<div className="mb-2">
							<span className="font-semibold text-pink-400 mr-2">Filter:</span>
							<div className="flex flex-wrap">
								<FilterButton text="Chat" value="chat" icon="🗣️" />
								<FilterButton text="Voice" value="voice" icon="🎤" />
								<FilterButton text="Images" value="images" icon="📸" />
								<FilterButton text="Video" value="video" icon="🎥" />
								<FilterButton text="3D Models" value="3d" icon="👓" />
								<FilterButton text="Specialized" value="specialized" icon="🧬" />
							</div>
						</div>

						<div className="relative">
							<input
								className="cyber-input pl-10"
								placeholder="Search AI models..."
								value={searchQuery}
								onChange={handleSearchChange}
							/>
							<span className="absolute left-3 top-2.5 text-cyan-400">🔍</span>
						</div>
					</div>

					<div className="cyber-card-yellow">
						<AiCardBoard
							sortOption={sortOption}
							activeFilters={activeFilters}
							searchQuery={searchQuery}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;