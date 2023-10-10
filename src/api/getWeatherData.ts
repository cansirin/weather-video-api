// import cities from '../data/tr-wo-neighboorhood.json';
import {cities} from '../data/cities.json';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

(async () => {
	const apiKey = process.env.OPEN_WEATHER_API_KEY;
	console.log(apiKey);
	const allCities = cities.map((city) => {
		const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`;
		return fetch(weatherApiUrl);
	});

	const responses = await Promise.all(allCities);
	const data = await Promise.all(responses.map((response) => response.json()));
	fs.writeFileSync(
		path.join(__dirname, '../data/weather.json'),
		JSON.stringify(data, null, 2)
	);
})();
