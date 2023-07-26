import MagnifyingGlass from "../assets/images/magnifying-glass.svg";
// import { useState, useEffect } from "react";

interface SearchProps {
	setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ setUserInput }: SearchProps) {
	const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
		setUserInput(e.currentTarget.value);
	};

	return (
		<div>
			<label className="relative" htmlFor="searchCountryInfo">
				<img
					className="absolute left-9 top-1/2 h-12 w-12 -translate-y-1/2 transform"
					src={MagnifyingGlass}
					alt="magnifying-glass-svg"
				/>
				<input
					className="flex h-20 w-full items-center justify-center rounded-lg px-28 text-2xl placeholder:text-dark-gray md:h-24 md:w-[45rem]"
					type="search"
					id="searchCountryInfo"
					placeholder="Search for a country..."
					onChange={handleInputChange}
				/>
			</label>
		</div>
	);
}

export default Search;
