export interface CountryInterface {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: string[];
	capital?: string;
	altSpellings?: string[];
	subregion: string;
	region: string;
	population: number;
	latlng?: number[];
	demonym: string;
	area?: number;
	timezones: string[];
	borders?: string[];
	nativeName: string;
	numericCode: string;
	currencies?: Currency[];
	languages: Language[];
	translations: Translation;
	flag: string;
	flags: Flags;
	cioc?: string;
	regionalBlocs?: RegionalBloc[];
	independent: boolean;
}

// I created these types because they're the nested properties in the data.JSON file
type Currency = {
	code: string;
	name: string;
	symbol: string;
};

type Language = {
	iso639_1?: string;
	iso639_2: string;
	name: string;
	nativeName?: string;
};

type Translation = {
	br: string;
	pt: string;
	nl: string;
	hr: string;
	fa?: string;
	de: string;
	es: string;
	fr: string;
	ja: string;
	it: string;
	hu: string;
};

type RegionalBloc = {
	acronym?: string;
	name: string;
	otherNames?: string[];
};

type Flags = {
	svg: string;
	png: string;
};

// Below are more interface/types for the rest of this project
