import {
	CountryInterface,
	DefaultDialogInterface,
} from "../Utilities/Interfaces";
import LeftArrow from "../assets/images/left-arrow.svg";
import WhiteLeftArrow from "../assets/images/WHT-left-arrow.svg";
import { useState } from "react";
import {
	getCountryInfoByCode,
	getCountryNameByCode,
} from "../Utilities/Functions";

interface DetailsPageProps {
	countryDetails: CountryInterface | undefined;
	setDialogInfo: React.Dispatch<
		React.SetStateAction<DefaultDialogInterface | undefined>
	>;
	theme: string | null;
}

const DetailsPage = ({
	theme,
	countryDetails,
	setDialogInfo,
}: DetailsPageProps) => {
	const [prevCountriesCodes, setPrevCountriesCodes] = useState<String[]>([]);
	const [currCountry, setCurrCountry] = useState(countryDetails);

	const closeDialog = () => {
		setDialogInfo({
			isOpen: false,
			country: undefined,
		});
	};
	const handleCountryChange = (code: string) => {
		const countryObj = getCountryInfoByCode(code);
		const prevs = prevCountriesCodes;
		prevs.push(currCountry?.alpha3Code as string);
		setPrevCountriesCodes(prevs);
		setCurrCountry(countryObj);
		// console.log(countryObj);
	};

	const goBack = () => {
		if (prevCountriesCodes.length === 0) {
			closeDialog();
		} else {
			const prevCountry = prevCountriesCodes.pop();
			const prevCountryObj = getCountryInfoByCode(prevCountry as string);
			setCurrCountry(prevCountryObj);
			// console.log("PrevC obj:", prevCountryObj);
		}
	};

	// useEffect(() => {
	// 	console.log("Current: ", currCountry);
	// 	console.log("Prev: ", prevCountriesCodes);
	// }, [currCountry]);

	return (
		currCountry && (
			<div className="h-full w-full opacity-95">
				<div className="mt-[95px] w-full md:h-full">
					<div className="flex h-full w-full flex-col md:mx-auto md:max-w-screen-2xl md:justify-center">
						<div className="relative flex items-center rounded-xl p-10">
							<img
								src={`${theme === null ? LeftArrow : WhiteLeftArrow}`}
								className="absolute left-16 top-1/2 z-10 h-7 w-7 -translate-y-1/2 transform"
								alt="left arrow SVG"
							/>
							<button
								onClick={goBack}
								className={`${
									theme === null
										? "bg-white text-very-dark-blueT"
										: "bg-dark-blue text-white"
								} h-20 w-52 rounded-md text-3xl drop-shadow-xl`}
							>
								Back
							</button>
						</div>
						<div className="flex w-full flex-col items-center md:flex-row md:gap-40">
							<div className="flex md:mx-auto md:h-full md:w-full">
								<img
									className="my-4 object-cover px-10 md:object-contain"
									src={currCountry.flag}
									alt="country flag"
								/>
							</div>
							<div
								className={`my-4 flex w-full flex-col gap-3 px-12 text-3xl ${
									theme === null ? "text-very-dark-blueT" : "text-white"
								} md:my-0 md:justify-center`}
							>
								<div className="flex">
									<h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
										{currCountry.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
									</h1>
								</div>
								<div className="flex flex-col gap-10 text-5xl md:mt-10 md:flex-row">
									<div className="flex flex-col md:gap-4">
										<h2 className="mt-5 font-semibold md:mt-0">
											Population:{" "}
											<span className="text-3xl font-thin">
												{currCountry.population.toLocaleString("en-US")}
											</span>
										</h2>
										<h2 className="font-semibold">
											Region:{" "}
											<span className="text-3xl font-thin">{currCountry.region}</span>
										</h2>
										<h2 className="font-semibold">
											Sub Region:{" "}
											<span className="text-3xl font-thin">{currCountry.subregion}</span>
										</h2>
										<h2 className="mb-11 font-semibold">
											Capital:{" "}
											<span className="text-3xl font-thin">{currCountry.capital}</span>
										</h2>
									</div>
									<div className="flex flex-col md:gap-4">
										<h2 className="font-semibold">
											Top Level Domain:{" "}
											<span className="text-3xl font-thin">
												{currCountry.topLevelDomain}
											</span>
										</h2>
										<h2 className="font-semibold">
											Currencies:{" "}
											{!currCountry?.currencies && (
												<span className="text-3xl font-thin"></span>
											)}
											{currCountry?.currencies &&
												currCountry.currencies.map((money, i) => (
													<span className="text-3xl font-thin" key={i}>
														{money.name}
													</span>
												))}
										</h2>
										<h2 className="mb-10 font-semibold">
											Languages:{" "}
											{!currCountry?.languages && (
												<span className="text-3xl font-thin"></span>
											)}
											{currCountry?.languages &&
												currCountry.languages.map((languages, i) => (
													<span className="text-3xl font-thin" key={i}>
														{languages.name}
													</span>
												))}
										</h2>
									</div>
								</div>
								<div className="flex w-full">
									<div className="flex flex-wrap gap-4 font-semibold">
										<span className="text-3xl">Border Countries: </span>
										{!currCountry?.borders && (
											<span className="rounded-md text-3xl font-thin drop-shadow-xl">
												N/A
											</span>
										)}
										{currCountry?.borders &&
											currCountry.borders.map((border, i) => (
												<button
													onClick={() => handleCountryChange(border)}
													className={`${
														theme === null
															? "bg-white text-very-dark-blueT"
															: "bg-dark-blue text-white"
													} h-16 w-44 rounded-md text-2xl font-thin drop-shadow-xl`}
													key={i}
												>
													{getCountryNameByCode(border)}
												</button>
											))}
									</div>
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
