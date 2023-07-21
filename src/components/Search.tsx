import MagnifyingGlass from "../assets/images/magnifying-glass.svg";

function Search() {
	// This handle change function gets the info from the search bar
	// const handleInputChange = (e:string) => {
	// 	console.log(e.currentTarget.value)
	// }

	return (
		<div>
			<label className="relative" htmlFor="search bar">
				<img
					className="absolute left-9 top-1/2 h-12 w-12 -translate-y-1/2 transform"
					src={MagnifyingGlass}
					alt="magnifying-glass-svg"
				/>
				<input
					className=" flex h-20 w-full items-center justify-center rounded-lg px-28 text-2xl placeholder:text-dark-gray"
					type="search"
					placeholder="Search for a country..."
				/>
			</label>
		</div>
	);
}

export default Search;
