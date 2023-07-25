import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import FilterBar from "./components/FilterBar";
import CountriesList from "./components/CountriesList";
import { useState, useLayoutEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
	const [region, setRegion] = useState<string>("All");
	const [userInput, setUserInput] = useState<string>("");

	const themeSwitch = () => {
		setTheme(theme === null ? "dark" : null);
	};

	useLayoutEffect(() => {
		console.log(theme);
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.removeItem("theme");
		}
	}, [theme]);

	return (
		<QueryClientProvider client={queryClient}>
			<div className=" w-full bg-slate-300 font-NunitoSans dark:bg-very-dark-blue ">
				<Navbar themeSwitch={themeSwitch} />
				<div className="mx-auto flex max-w-2xl flex-col px-7 py-10 sm:mx-0 sm:max-w-none sm:flex-row sm:items-center sm:justify-between">
					<SearchBar setUserInput={setUserInput} />
					<FilterBar regionSetter={setRegion} />
				</div>
				<div className="px-7 pb-10">
					<CountriesList region={region} userInput={userInput} />
				</div>
			</div>
		</QueryClientProvider>
	);
}

export default App;
