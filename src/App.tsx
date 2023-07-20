import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import FilterBar from "./components/Filter";
import CountriesList from "./components/CountriesList";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className=" w-full bg-very-dark-blue font-NunitoSans ">
				<Navbar />
				<div className="px-7 py-10">
					<SearchBar />
					<FilterBar />
					<CountriesList />
				</div>
			</div>
		</QueryClientProvider>
	);
}

export default App;
