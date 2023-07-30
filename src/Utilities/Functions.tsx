import countryData from "../assets/data/data.json";

// export const Functions = () => {

//   return
// }

// I want this func. below to get the countrys' info. that cooresponds with the specific code and
// then I want to update a piece of state with the object that is being returned from this function

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
