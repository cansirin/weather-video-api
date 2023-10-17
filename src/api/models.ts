import everything from '../data/tr-cities.json';

const geoData = everything as Record<string, City>;

export type Point = {
  lat: number;
  lng: number;
};

export interface City extends Point {
  id: number;
  name: string;
  districts: District[];
}

const allCities = Object.values(geoData);
export const getAllCities = (): City[] => allCities;

export const getCity = (id: number) => geoData[id.toString()];

export interface District extends Point {
  id: number;
  cityID: number;
  name: string;
}

export const getDistricts = (cityID: number) => {
  return getCity(cityID).districts;
};

export const getDistrict = (cityID: number, districtID: number) => {
  const districts = getDistricts(cityID);
  return districts.find((district) => district.id === districtID);
};

export interface CityWithDistricts {
  cityName: string;
  districts: District[];
}

// Return the cached value to not re-calculate static values
const allData: Record<number, CityWithDistricts> = {};

getAllCities().forEach((city) => {
  const districts = getDistricts(city.id);
  allData[city.id] = {
    districts,
    cityName: city.name,
  };
});
