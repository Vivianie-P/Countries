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
			<div className="absolute h-full w-full bg-white opacity-95">
				<div className="z-9 mt-[95px] h-full w-full overflow-y-auto">
					<button
						onClick={closeDialog}
						className="h-20 w-32 rounded-lg bg-black text-2xl text-white"
					>
						Back
					</button>
					<div className="rounded-xl bg-white sm:items-center">
						<img
							className="my-4 h-[50rem] w-full object-cover px-10"
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
								Sub Region:{" "}
								<span className="text-2xl font-thin">{countryDetails.subregion}</span>
							</h2>
							<h2 className="font-semibold">
								Capital:{" "}
								<span className="text-2xl font-thin">{countryDetails.capital}</span>
							</h2>
							<h2 className="font-semibold">
								Top Level Domain:{" "}
								<span className="text-2xl font-thin">
									{countryDetails.topLevelDomain}
								</span>
							</h2>
							<h2 className="font-semibold">
								Currencies:{" "}
								<span className="text-2xl font-thin">{countryDetails.numericCode}</span>
							</h2>
							<h2 className="font-semibold">
								Languages:{" "}
								<span className="text-2xl font-thin">{countryDetails.independent}</span>
							</h2>
							<h2 className="font-semibold">
								Border Countries:{" "}
								<span className="text-2xl font-thin">{countryDetails.borders}</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default DetailsPage;
