import MagnifyingGlass from "../assets/images/magnifying-glass.svg";

function Search() {
	return (
		<div>
			<label className="relative text-dark-gray" htmlFor="search bar">
				<img
					className="absolute left-9 top-1/2 h-10 w-10 -translate-y-1/2 transform"
					src={MagnifyingGlass}
					alt="magnifying-glass-svg"
				/>
				<input
					className=" flex h-20 w-full items-center justify-center rounded-lg px-28 text-xl placeholder:text-dark-gray"
					type="text"
					placeholder="Search for a country..."
				/>
			</label>
		</div>
	);
}

export default Search;
