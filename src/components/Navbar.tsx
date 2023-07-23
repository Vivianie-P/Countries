import CrescentMoon from "../assets/images/crescent-moon.svg";

interface NavbarInterface {
	themeSwitch: () => void;
}

function Navbar({ themeSwitch }: NavbarInterface) {
	return (
		<div className="flex h-[95px] w-full items-center justify-between dark:bg-dark-blue  bg-white px-5 text-3xl dark:text-white text-slate-800">
			<h1 className="font-NunitoSans font-bold">World Search</h1>
			<div className="flex items-center justify-between gap-3">
				<button onClick={themeSwitch}>
					<img className="h-7 w-7" src={CrescentMoon} alt="theme-toggler" />
				</button>
				<h1 className="text-3xl">Dark mode</h1>
			</div>
		</div>
	);
}

export default Navbar;
