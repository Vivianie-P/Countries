import CrescentMoon from "../assets/images/crescent-moon.svg";

function Navbar() {
	return (
		<div className="flex h-[95px] w-full items-center justify-between bg-dark-blue px-5 text-3xl text-white">
			<h1 className="font-NunitoSans font-bold">World Search</h1>
			<div className="flex items-center justify-between gap-3">
				<img className="h-7 w-7" src={CrescentMoon} alt="theme-toggler" />
				<h1 className="text-3xl">Dark mode</h1>
			</div>
		</div>
	);
}

export default Navbar;
