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
			<div className="h-full w-full bg-zinc-100 opacity-95">
				<div className="z-9 mt-[95px] w-full overflow-y-auto">
					<div className="flex h-full w-full flex-col md:mx-auto md:max-w-screen-2xl">
						<div className="flex items-center rounded-xl px-10">
							<button
								onClick={closeDialog}
								className="h-20 w-48 rounded-md bg-black text-3xl text-white"
							>
								Back
							</button>
						</div>
						<div className="flex w-full flex-col items-center md:flex-row">
							<div className="flex md:mx-auto md:h-full md:w-full">
								<img
									className="my-4 object-cover px-10 md:object-contain"
									src={countryDetails.flag}
									alt="country flag"
								/>
							</div>
							<div className="my-4 flex w-full flex-col gap-3 px-12 text-3xl text-black ">
								<div className="flex">
									<h1 className="mt-5 text-4xl font-extrabold">{countryDetails.name}</h1>
								</div>
								<div className="flex gap-10 text-5xl">
									<div className="flex flex-col">
										<h2 className="mt-5 font-semibold">
											Population:{" "}
											<span className="text-3xl font-thin">
												{countryDetails.population.toLocaleString("en-US")}
											</span>
										</h2>
										<h2 className="font-semibold">
											Region:{" "}
											<span className="text-3xl font-thin">{countryDetails.region}</span>
										</h2>
										<h2 className="font-semibold">
											Sub Region:{" "}
											<span className="text-3xl font-thin">
												{countryDetails.subregion}
											</span>
										</h2>
										<h2 className="mb-11 font-semibold">
											Capital:{" "}
											<span className="text-3xl font-thin">{countryDetails.capital}</span>
										</h2>
									</div>
									<div className="flex flex-col">
										<h2 className="font-semibold">
											Top Level Domain:{" "}
											<span className="text-3xl font-thin">
												{countryDetails.topLevelDomain}
											</span>
										</h2>
										<h2 className="font-semibold">
											Currencies:{" "}
											<span className="text-3xl font-thin">
												{countryDetails.numericCode}
											</span>
										</h2>
										<h2 className="mb-10 font-semibold">
											Languages:{" "}
											<span className="text-3xl font-thin">
												{countryDetails.independent}
											</span>
										</h2>
									</div>
								</div>
								<div className="flex">
									<h2 className="text-3xl font-semibold">
										Border Countries:{" "}
										<span className="text-2xl font-thin">{countryDetails.borders}</span>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default DetailsPage;
