// import downArrow from "../assets/images/chevron-down.svg";
import { useState } from "react";
interface FilterProps {
	regionFilter: string;
	regionSetter: React.Dispatch<React.SetStateAction<string>>;
	theme: string | null;
}

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];

function Filter({ theme, regionFilter, regionSetter }: FilterProps) {
	const [toggler, setToggler] = useState(false);

	const handleButtonClick = () => {
		setToggler(!toggler);
	};

	const handleRegionClick = (region: string) => {
		regionSetter(region);
	};

	return (
		<div className="relative">
			<button
				id="dropdownDefaultButton"
				className={`${
					theme === null
						? "bg-white text-very-dark-blueT"
						: "bg-dark-blue text-white"
				} my-16 inline-flex h-20 items-center rounded-lg px-5 py-2.5 text-center text-2xl font-medium text-black drop-shadow-xl sm:w-[20rem] md:h-24 md:w-[23rem] md:text-3xl`}
				type="button"
				onClick={handleButtonClick}
			>
				Filter by Region
				<svg
					className="ml-16 h-6 w-6"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="0.8"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>

			{toggler && (
				<div
					id="dropdown"
					className="absolute z-10 w-72 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-dark-blue sm:w-full"
				>
					<ul
						className=" rounded-lg py-2 text-sm text-very-dark-blueT dark:text-white"
						aria-labelledby="dropdownDefaultButton"
					>
						{regions.map((region, i) => {
							return (
								<li key={i}>
									<a
										onClick={() => handleRegionClick(region)}
										href="#"
										className={`${
											regionFilter === region
												? "text-3xl font-bold underline dark:text-yellow-200"
												: " "
										} block px-4 py-2 text-2xl`}
									>
										{region}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Filter;
