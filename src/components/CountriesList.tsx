import countryData from "../assets/data/data.json";
import { CountryInterface } from "../Interfaces";
import CountryCard from "./CountryCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const countries: CountryInterface[] = countryData;

interface CountriesListProps {
	region: string;
	userInput: string;
}

const CountriesList = ({ region, userInput }: CountriesListProps) => {
	const [filteredCountries, setFilteredCountries] = useState(countries);

	const getCountries = (page: number) => {
		return filteredCountries.slice((page - 1) * 10, page * 10);
	};

	const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery({
		queryKey: ["query"],
		queryFn: ({ pageParam = 1 }) => getCountries(pageParam),
		getNextPageParam: (_, pages) => pages.length + 1,
		initialData: {
			pages: [countries.slice(0, 10)],
			pageParams: [1],
		},
	});

	useEffect(() => {
		let newCountries;

		if (userInput !== "") {
			newCountries = countries.filter((country) => {
				return country.name.toLowerCase().startsWith(userInput.toLowerCase());
			});
		} else {
			newCountries = countries;
		}

		if (region !== "All") {
			newCountries = newCountries.filter((country) => {
				return country.region === region;
			});
		}

		setFilteredCountries(newCountries);
	}, [region, userInput]);

	useEffect(() => {
		refetch();
	}, [filteredCountries]);

	return (
		<div className="">
			{data?.pages.map((page, i) => (
				<div key={i}>
					{page.map((country, j) => (
						<CountryCard countryInfo={country} key={j} />
					))}
				</div>
			))}
			<div className="flex justify-center items-center">
				<button
					className="bg-white text-3xl rounded-lg w-[31rem] mt-5 h-20"
					onClick={() => fetchNextPage()}
					disabled={isFetchingNextPage}
				>
					{isFetchingNextPage
						? "Loading More..."
						: (data?.pages.length ?? 0) < 3
						? "Load More"
						: "Nothing more to load"}
				</button>
			</div>
		</div>
	);
};

export default CountriesList;
