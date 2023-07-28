import MagnifyingGlass from "../assets/images/magnifying-glass.svg";
import BLKMagnifyingGlass from "../assets/images/magnifying-glassBLK.svg";

interface SearchProps {
	setUserInput: React.Dispatch<React.SetStateAction<string>>;
	theme: string | null;
}

function Search({ setUserInput, theme }: SearchProps) {
	const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
		setUserInput(e.currentTarget.value);
	};

	return (
		<div>
			<label className="relative" htmlFor="searchCountryInfo">
				<img
					className="absolute left-9 top-1/2 z-10 h-8 w-8 -translate-y-1/2 transform"
					src={theme === null ? BLKMagnifyingGlass : MagnifyingGlass}
					alt="magnifying-glass-svg"
				/>
				<input
					className={` ${
						theme === null
							? "bg-white placeholder:text-dark-gray"
							: "bg-dark-blue placeholder:text-white"
					} flex h-20 w-full items-center justify-center rounded-lg px-28 text-2xl drop-shadow-xl md:h-24 md:w-[45rem] lg:text-3xl`}
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
