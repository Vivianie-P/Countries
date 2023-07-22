import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import FilterBar from "./components/FilterBar";
import CountriesList from "./components/CountriesList";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	const [region, setRegion] = useState<string>("All");
	const [userInput, setUserInput] = useState<string>("");

	return (
		<QueryClientProvider client={queryClient}>
			<div className=" w-full bg-very-dark-blue font-NunitoSans ">
				<Navbar />
				<div className="px-7 py-10">
					<SearchBar setUserInput={setUserInput} />
					<FilterBar regionSetter={setRegion} />
					<CountriesList region={region} userInput={userInput} />
				</div>
			</div>
		</QueryClientProvider>
	);
}

export default App;
