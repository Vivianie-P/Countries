import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import FilterBar from "./components/FilterBar";
import CountriesList from "./components/CountriesList";
import { useState, useLayoutEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const [region, setRegion] = useState<string>("All");
	const [userInput, setUserInput] = useState<string>("");

	const themeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useLayoutEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	}, [theme]);

	return (
		<QueryClientProvider client={queryClient}>
			<div className=" w-full dark:bg-very-dark-blue font-NunitoSans bg-white ">
				<Navbar themeSwitch={themeSwitch} />
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
