const CountryCard = () => {
	return (
		<div>
			<div className="m-auto mt-20 h-[360px] w-[300px] rounded-xl bg-white ">
				{/* <img src="" alt="country flag" /> */}
				<h1 className="flex text-4xl font-extrabold text-black">Germany</h1>
				<h2 className="flex items-center  text-left text-4xl font-bold text-black">
					Population: <span className="">894202490</span>
				</h2>
				<h2 className="flex text-left text-4xl font-bold text-black">
					Region: <span className="">Europe</span>
				</h2>
				<h2 className="flex text-left text-4xl font-bold text-black">
					Captial: <span className="">Berlin</span>
				</h2>
			</div>
		</div>
	);
};

export default CountryCard;
