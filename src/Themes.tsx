const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");

const iconToggle = () => {
	moonIcon?.classList.toggle("display-none");
	sunIcon?.classList.toggle("display-none");
};

const themeCheck = () => {
	if (userTheme === "dark" || !userTheme) {
		document.documentElement.classList.add("dark");
		moonIcon?.classList.add("display-none");
		return;
	}
	sunIcon?.classList.add("display-none");
};

const themeSwitch = () => {
	if (document.documentElement.classList.contains("dark")) {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
		iconToggle();
		return;
	}
	document.documentElement.classList.add("dark");
	localStorage.setItem("theme", "dark");
	iconToggle();
};

sunIcon?.addEventListener("click", () => {
	themeSwitch();
});

moonIcon?.addEventListener("click", () => {
	themeSwitch();
});

themeCheck();
