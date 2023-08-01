import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import FilterBar from "./components/FilterBar";
import CountriesList from "./components/CountriesList";
import { useState, useLayoutEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
	const [regionFilter, setRegionFilter] = useState<string>("All");
	const [userInput, setUserInput] = useState<string>("");

	const themeSwitch = () => {
		setTheme(theme === null ? "dark" : null);
	};

	useLayoutEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
			document.documentElement.style.setProperty("--loader-bg", "#ffffff");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.removeItem("theme");
			document.documentElement.style.setProperty("--loader-bg", "#111517");
		}
	}, [theme]);

	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-[100vh] w-full bg-zinc-100 font-NunitoSans dark:bg-very-dark-blue">
				<Navbar theme={theme} themeSwitch={themeSwitch} />

				<div className="mx-auto mt-[95px] flex max-w-2xl flex-col px-7 py-10 sm:mx-0 sm:max-w-none sm:flex-row sm:items-center sm:justify-between lg:mx-auto lg:max-w-screen-2xl 2xl:p-0">
					<SearchBar theme={theme} setUserInput={setUserInput} />
					<FilterBar
						theme={theme}
						regionFilter={regionFilter}
						regionSetter={setRegionFilter}
					/>
				</div>
				<div className="px-7 pb-10">
					<CountriesList
						theme={theme}
						regionFilter={regionFilter}
						userInput={userInput}
					/>
				</div>
			</div>
		</QueryClientProvider>
	);
}

export default App;
