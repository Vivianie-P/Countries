import { CountryInterface } from "../Interfaces";
interface CountryCardProps {
	countryInfo: CountryInterface;
}

const CountryCard = (props: CountryCardProps) => {
	return (
		<div>
			<div className="m-auto mt-20 h-[417px] w-[310px] rounded-xl bg-white ">
				<img
					className="h-[200px] w-full rounded-t-xl object-cover"
					src={props.countryInfo.flag}
					alt="country flag"
				/>

				<div className="my-4 flex flex-col gap-3 pl-12 text-left text-3xl text-black">
					<h1 className="mt-5 text-4xl font-extrabold">{props.countryInfo.name}</h1>
					<h2 className="mt-5 font-semibold">
						Population:
						<span className="text-2xl font-thin">
							{props.countryInfo.population.toLocaleString("en-US")}
						</span>
					</h2>
					<h2 className="font-semibold">
						Region:{" "}
						<span className="text-2xl font-thin">{props.countryInfo.region}</span>
					</h2>
					<h2 className="font-semibold">
						Capital:{" "}
						<span className="text-2xl font-thin">{props.countryInfo.capital}</span>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default CountryCard;
