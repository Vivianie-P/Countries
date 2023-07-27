import CrescentMoon from "../assets/images/crescent-moon.svg";
import SunLight from "../assets/images/sun.svg";

interface NavbarInterface {
	themeSwitch: () => void;
	theme: string | null;
}

function Navbar({ themeSwitch, theme }: NavbarInterface) {
	return (
		<div className="fixed top-0 z-10 w-full bg-sky-200 dark:bg-dark-blue">
			<div className="m-auto flex h-[95px] w-full items-center justify-between px-8 text-slate-800  dark:text-white md:px-16 lg:max-w-screen-2xl">
				<h1 className="font-NunitoSans text-3xl font-bold sm:text-4xl">
					World Search
				</h1>
				<div className="flex items-center justify-between gap-3">
					<button onClick={themeSwitch}>
						<img
							className="h-[2rem] w-[2rem]"
							src={theme === null ? SunLight : CrescentMoon}
							alt="theme-toggler"
						/>
					</button>
					<h1
						className={`text-2xl sm:text-3xl ${
							theme === null ? "text-slate-800" : "text-white"
						}`}
					>
						{theme === null ? "Light mode" : "Dark mode"}
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
