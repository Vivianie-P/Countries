import {
	CountryInterface,
	DefaultDialogInterface,
} from "../Utilities/Interfaces";
interface CountryCardProps {
	countryInfo: CountryInterface;
	lastCardRef?: (element: any) => void;
	setDialogInfo: React.Dispatch<
		React.SetStateAction<DefaultDialogInterface | undefined>
	>;
}

const CountryCard = ({
	countryInfo,
	lastCardRef,
	setDialogInfo,
}: CountryCardProps) => {
	const handleClickDialogOpen = () => {
		setDialogInfo({
			isOpen: true,
			country: countryInfo,
		});
	};

	return (
		<div
			onClick={handleClickDialogOpen}
			ref={lastCardRef}
			className=" fade-in h-[417px] w-full transform-gpu cursor-pointer rounded-xl bg-white shadow-md dark:bg-dark-blue sm:items-center"
		>
			<img
				className=" h-[200px] w-full rounded-t-xl object-cover"
				src={countryInfo.flag}
				alt="country flag"
			/>

			<div className="my-4 flex flex-col gap-3 px-12 text-left text-3xl text-very-dark-blueT dark:text-white">
				<h1 className="mt-5 text-4xl font-extrabold">
					{countryInfo.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
				</h1>
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
