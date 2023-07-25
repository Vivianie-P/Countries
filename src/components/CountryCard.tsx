import { CountryInterface } from "../Interfaces";
interface CountryCardProps {
	countryInfo: CountryInterface;
	lastCardRef?: (element: any) => void;
}

const CountryCard = ({ countryInfo, lastCardRef }: CountryCardProps) => {
	return (
		<div
			ref={lastCardRef}
			className="h-[417px] w-full rounded-xl bg-white sm:items-center"
		>
			<img
				className="h-[200px] w-full rounded-t-xl object-cover"
				src={countryInfo.flag}
				alt="country flag"
			/>

			<div className="my-4 flex flex-col gap-3 px-12 text-left text-3xl text-black">
				<h1 className="mt-5 text-4xl font-extrabold">{countryInfo.name}</h1>
				<h2 className="mt-5 font-semibold">
					Population:{" "}
					<span className="text-2xl font-thin">
						{countryInfo.population.toLocaleString("en-US")}
					</span>
				</h2>
				<h2 className="font-semibold">
					Region: <span className="text-2xl font-thin">{countryInfo.region}</span>
				</h2>
				<h2 className="font-semibold">
					Capital: <span className="text-2xl font-thin">{countryInfo.capital}</span>
				</h2>
			</div>
		</div>
	);
};

export default CountryCard;
