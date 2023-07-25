import { useIntersection } from "@mantine/hooks";
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

	const { data, fetchNextPage, refetch } = useInfiniteQuery({
		queryKey: ["query"],
		queryFn: ({ pageParam = 1 }) => getCountries(pageParam),
		getNextPageParam: (_, pages) => pages.length + 1,
		initialData: {
			pages: [countries.slice(0, 10)],
			pageParams: [1],
		},
	});

	const listOfAllCountries = data?.pages.flatMap((page) => page);

	const { ref, entry } = useIntersection({
		root: null,
		threshold: 0.3,
	});

	useEffect(() => {
		if (entry?.isIntersecting) {
			fetchNextPage();
		}
	}, [entry]);

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
		<div className="w-full flex items-center flex-col">
			<div className=" grid w-full gap-14 sm:max-w-screen-xl justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{listOfAllCountries?.map((country, i) => {
					if (i === listOfAllCountries.length - 1)
						return <CountryCard key={i} lastCardRef={ref} countryInfo={country} />;
					return <CountryCard key={i} countryInfo={country} />;
				})}
			</div>
		</div>
	);
};

export default CountriesList;
