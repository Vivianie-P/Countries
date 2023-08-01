import countryData from "../assets/data/data.json";

export const getCountryInfoByCode = (code: string) => {
	const countryInfo = countryData?.find((country) => {
		if (country.alpha3Code === code) {
			return country;
		}
	});
	return countryInfo;
};

export const getCountryNameByCode = (code: string) => {
	const countryInfo = countryData?.find((country) => {
		if (country.alpha3Code === code) {
			return country;
		}
	});
	return countryInfo?.name;
};
