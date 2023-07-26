import { CountryInterface, DefaultDialogInterface } from "../Interfaces";

interface DetailsPageProps {
	countryDetails: CountryInterface | undefined;
	setDialogInfo: React.Dispatch<
		React.SetStateAction<DefaultDialogInterface | undefined>
	>;
}

const DetailsPage = ({ countryDetails, setDialogInfo }: DetailsPageProps) => {
	const closeDialog = () => {
		setDialogInfo({
			isOpen: false,
			country: undefined,
		});
	};

	return (
		countryDetails && (
			<div>
				<button onClick={closeDialog} className="text-2xl">
					Back
				</button>
				<div className="h-[417px] w-full rounded-xl bg-white sm:items-center">
					<img
						className="h-[200px] w-full rounded-t-xl object-cover"
						src={countryDetails.flag}
						alt="country flag"
					/>

					<div className="my-4 flex flex-col gap-3 px-12 text-left text-3xl text-black">
						<h1 className="mt-5 text-4xl font-extrabold">{countryDetails.name}</h1>
						<h2 className="mt-5 font-semibold">
							Population:{" "}
							<span className="text-2xl font-thin">
								{countryDetails.population.toLocaleString("en-US")}
							</span>
						</h2>
						<h2 className="font-semibold">
							Region:{" "}
							<span className="text-2xl font-thin">{countryDetails.region}</span>
						</h2>
						<h2 className="font-semibold">
							Capital:{" "}
							<span className="text-2xl font-thin">{countryDetails.capital}</span>
						</h2>
					</div>
				</div>
			</div>
		)
	);
};

export default DetailsPage;
