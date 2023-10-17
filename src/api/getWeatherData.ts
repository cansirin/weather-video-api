// import cities from '../data/tr-wo-neighboorhood.json';
import {cities} from '../data/cities.json';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

export interface CityWeather {
  id: string;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}
export interface OpenWeatherApiWeatherResponse {
  city: {
    id: number;
    name: string;
  };
  list: CityWeather[];
}

export interface WeatherData {
  [key: string]: OpenWeatherApiWeatherResponse;
}

const transformWeatherData = (data: OpenWeatherApiWeatherResponse[]) => {
  return data.map(({city, list}) => {
    return {
      [city.name]: [...list],
    } as unknown as WeatherData;
  });
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
  )) as OpenWeatherApiWeatherResponse[];
  const transformedData = transformWeatherData(data);
  fs.writeFileSync(
    path.join(__dirname, '../data/weather.json'),
    JSON.stringify(transformedData, null, 2)
  );
})();
