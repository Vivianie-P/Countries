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
import Loader from "./Loader";

const countries: CountryInterface[] = countryData;
interface CountriesListProps {
	regionFilter: string;
	userInput: string;
	theme: string | null;
}

const CARDS_PER_PAGE = 10;

const CountriesList = ({
	theme,
	regionFilter,
	userInput,
}: CountriesListProps) => {
	const [dialogInfo, setDialogInfo] = useState<DefaultDialogInterface>();

	const getCountries = async (page: number) => {
		await new Promise((resolve) => setTimeout(resolve, 250));
		let newCountries;

		if (userInput !== "") {
			newCountries = countries.filter((country) => {
				return country.name.toLowerCase().startsWith(userInput.toLowerCase());
			});
		} else {
			newCountries = countries;
		}

		if (regionFilter !== "All") {
			newCountries = newCountries.filter((country) => {
				return country.region === regionFilter;
			});
		}
		return newCountries.slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE);
	};

	const { data, fetchNextPage, refetch, isFetching, hasNextPage } =
		useInfiniteQuery({
			queryKey: ["query"],
			queryFn: ({ pageParam = 1 }) => getCountries(pageParam),
			getNextPageParam: (lastPage, pages) =>
				lastPage.length === CARDS_PER_PAGE ? pages.length + 1 : undefined,
			initialData: {
				pages: [countries.slice(0, CARDS_PER_PAGE)],
				pageParams: [1],
			},
			refetchOnWindowFocus: false,
		});

	const listOfAllCountries = data?.pages.flatMap((page) => page);

	const { ref, entry } = useIntersection({
		root: null,
		threshold: 0.3,
	});

	useEffect(() => {
		console.log("data:", data);
		console.log("is fetching info", isFetching);
		console.log("is", hasNextPage);
	}, [data, isFetching]);

	useEffect(() => {
		if (entry?.isIntersecting && hasNextPage) {
			fetchNextPage();
		}
	}, [entry]);

	useEffect(() => {
		refetch();
	}, [userInput, regionFilter]);

	return (
		<div className="flex w-full flex-col items-center">
			{isFetching && !entry?.isIntersecting ? (
				<Loader />
			) : (
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
			)}
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
