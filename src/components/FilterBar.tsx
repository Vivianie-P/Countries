// import downArrow from "../assets/images/chevron-down.svg";
import { useState } from "react";
interface FilterProps {
	regionSetter: React.Dispatch<React.SetStateAction<string>>;
}

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];

function Filter({ regionSetter }: FilterProps) {
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
				className="my-16 inline-flex h-20 items-center rounded-lg bg-white px-5 py-2.5 text-center text-2xl font-medium text-black"
				type="button"
				onClick={handleButtonClick}
			>
				Filter by Region
				<svg
					className="ml-2.5 h-2.5 w-2.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>

			{toggler && (
				<div
					id="dropdown"
					className="absolute z-10 w-72 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
				>
					<ul
						className="mt-2 w-72 rounded-lg bg-white py-2 text-sm text-black"
						aria-labelledby="dropdownDefaultButton"
					>
						{regions.map((region, i) => {
							return (
								<li key={i}>
									<a
										onClick={() => handleRegionClick(region)}
										href="#"
										className="block px-4 py-2 text-2xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
