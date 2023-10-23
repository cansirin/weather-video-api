// Import cities from '../data/tr-wo-neighboorhood.json';
import {cities} from '../data/cities.json';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';
import {CityName} from '../types/cityName';

export function isCityName(cityName: any): cityName is CityName {
  return typeof cityName === 'string';
}

// This is a subset of the response from the weather api
export interface CityWeather {
  date: string;
  dt: number;
  weather: {
    id: number;
    main: string;
    description: string;
  };
  main: {
    temp: number;
    feelsLike: number;
    minTemp: number;
    maxTemp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}
export interface WeatherResponse {
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
  };
  list: CityWeather[];
}

export type WeatherData = {
  [key in CityName]: Omit<WeatherResponse, 'city'>;
};

const transformList = (list: any[]) => {
  return list.map((item) => {
    return {
      date: item.dt_txt,
      dt: item.dt,
      weather: {
        id: item.weather[0].id,
        main: item.weather[0].main,
        description: item.weather[0].description,
      },
      main: {
        temp: item.main.temp,
        feelsLike: item.main.feels_like,
        minTemp: item.main.temp_min,
        maxTemp: item.main.temp_max,
        humidity: item.main.humidity,
      },
      wind: {
        speed: item.wind.speed,
        deg: item.wind.deg,
      },
    };
  });
};

const transformWeatherData = (data: WeatherResponse[]) => {
  return data.reduce((acc, {city, list}) => {
    console.log(city.name, ' --CITY');
    return {
      ...acc,
      [turkishToEnglishChars(city.name.toLowerCase())]: {
        city: {id: city.id, name: city.name, coord: city.coord},
        list: transformList([...list]),
      },
    };
  }, {});
};

const turkishToEnglishChars = (text: string) => {
  return text
    .replace(/Ğ/g, 'g')
    .replace(/Ü/g, 'u')
    .replace(/Ş/g, 's')
    .replace(/I/g, 'i')
    .replace(/İ/g, 'i')
    .replace(/Ö/g, 'o')
    .replace(/Ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .toLowerCase();
};

(async () => {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const allCities = cities.map((city) => {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`;
    return fetch(weatherApiUrl);
  });

  const responses = await Promise.all(allCities);
  const data = (await Promise.all(
    responses.map((response) => response.json())
  )) as WeatherResponse[];

  console.log('data', data[0].list);
  const transformedData = transformWeatherData(data);
  fs.writeFileSync(
    path.join(__dirname, '../data/weather.json'),
    JSON.stringify(transformedData, null, 2)
  );

  const keys = Object.keys(transformedData).map(turkishToEnglishChars);
  const cityNameTypeDef = `export type CityName = '${keys.join("' | '")}';`;

  fs.writeFileSync(
    path.join(__dirname, '../types/cityName.ts'),
    cityNameTypeDef
  );
})();
