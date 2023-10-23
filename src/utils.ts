import {WeatherData} from './api/getWeatherData';
import {CityName} from './types/cityName';

export const getCurrentWeather = (
  cityWeatherData: WeatherData,
  cityName: CityName,
  date: string,
  time: string
) => {
  const {list: cityWeathers} = cityWeatherData[cityName];
  return cityWeathers.filter((weather) => {
    const weatherDate = weather.date;
    const wantedDate = `${date} ${time}:00:00`;
    return weatherDate === wantedDate;
  });
};

export const getAllDaysWeather = (
  cityWeatherData: WeatherData,
  cityName: CityName,
  time: string,
  date?: string
) => {
  const cityWeathers = cityWeatherData[cityName] ?? {};
  if (!cityWeathers.list) {
    return [];
  }
  return cityWeathers.list.filter((weather) => {
    const weatherDate = weather.date;
    let wantedDate = `${time}:00:00`;
    if (date) wantedDate = `${date} ${time}:00:00`;
    return weatherDate.includes(wantedDate);
  });
};
