import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import FilterBar from "./components/Filter";
import CountryCard from "./components/CountryCard";
function App() {
	return (
		<div className="h-screen w-full bg-very-dark-blue font-NunitoSans ">
			<Navbar />
			<div className="px-7 py-10">
				<SearchBar />
				<FilterBar />
				<CountryCard />
			</div>
		</div>
	);
}

export default App;
