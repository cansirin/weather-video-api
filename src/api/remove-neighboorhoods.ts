import everything from '../data/tr-cities.json';
import fs from 'fs';
import path from 'path';

interface Neighborhood {
  id: number;
  cityID: number;
  districtID: number;
  name: string;
}

interface District {
  id: number;
  cityID: number;
  name: string;
  neighborhoods?: Neighborhood[];
}
interface City {
  id: number;
  name: string;
  districts: District[];
}

(() => {
  const geoData = everything as Record<number, City>;

  const allCities = Object.values(geoData);
  allCities.forEach((city) => {
    city.districts.forEach((district) => {
      delete district.neighborhoods;
    });
  });

  fs.writeFileSync(
    path.join(__dirname, '../data/tr-wo-neighboorhood.json'),
    JSON.stringify(allCities, null, 2)
  );
})();
