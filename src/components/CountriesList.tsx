import { useIntersection } from "@mantine/hooks";
import countryData from "../assets/data/data.json";
import {
	CountryInterface,
	DefaultDialogInterface,
} from "../Utilities/Interfaces";
import CountryCard from "./CountryCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import DetailsPage from "./DetailsPage";

const countries: CountryInterface[] = countryData;
interface CountriesListProps {
	region: string;
	userInput: string;
	theme: string | null;
}

const CountriesList = ({ theme, region, userInput }: CountriesListProps) => {
	const [filteredCountries, setFilteredCountries] = useState(countries);
	const [dialogInfo, setDialogInfo] = useState<DefaultDialogInterface>();

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
		<div className="flex w-full flex-col items-center">
			<div className=" grid w-full items-center justify-center gap-24 sm:max-w-screen-xl sm:grid-cols-2 md:grid-cols-3 lg:max-w-screen-2xl lg:grid-cols-4">
				{listOfAllCountries?.map((country, i) => {
					if (i === listOfAllCountries.length - 1)
						return (
							<CountryCard
								key={i}
								lastCardRef={ref}
								countryInfo={country}
								setDialogInfo={setDialogInfo}
							/>
						);
					return (
						<CountryCard
							key={i}
							countryInfo={country}
							setDialogInfo={setDialogInfo}
						/>
					);
				})}
			</div>
			{dialogInfo?.isOpen && (
				<dialog
					open
					className={`${
						theme === null ? "bg-zinc-100 " : "bg-very-dark-blue"
					} fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center overflow-y-scroll`}
				>
					<DetailsPage
						theme={theme}
						countryDetails={dialogInfo.country}
						setDialogInfo={setDialogInfo}
					/>
				</dialog>
			)}
		</div>
	);
};

export default CountriesList;
