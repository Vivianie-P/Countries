import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import FilterBar from "./components/Filter";
import CountryCard from "./components/CountryCard";
function App() {
	return (
		<div className="h-screen w-full bg-slate-600">
			<Navbar />
			<SearchBar />
			<FilterBar />
			<CountryCard />
		</div>
	);
}

export default App;
