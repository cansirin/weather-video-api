import {AbsoluteFill} from 'remotion';
import {Animated, Fade, Move} from 'remotion-animated';
import WeatherData from './data/weather.json';
import styles from './styles.module.css';
import './default.module.css';
import {WeatherInfo} from './components/WeatherInfo';
import {Sunny} from './components/weather/Sunny';
import {WeatherSelector} from './components/weather/WeatherSelector';
import WeatherMetadata from './WeatherMetadata';
import {WeatherData as WeatherStatus} from './WeatherData';

interface RealVideoProps {
  cityName?: string;
  choseTime?: string;
  choseDate?: string;
}

const getCityWeatherData = (cityName: string) => {
  const cityWeatherData = WeatherData.find((item) => item[cityName]);
  return cityWeatherData ? cityWeatherData[cityName] : [];
};

const getCurrentWeather = (cityWeatherData: any[]) => {
  const currentHour = new Date().getHours();

  if (currentHour >= 9 && currentHour < 18) {
    const weather = cityWeatherData.find((entry) => {
      const dt = new Date(entry.dt * 1000);
      return dt.getHours() === 9;
    });
    return weather;
  } else if (currentHour >= 18) {
    const weather = cityWeatherData.find((entry) => {
      const dt = new Date(entry.dt * 1000);
      return dt.getHours() === 18;
    });
    return weather;
  } else {
    const nearestWeather = cityWeatherData.reduce((prev, curr) => {
      const prevDt = new Date(prev.dt * 1000);
      const currDt = new Date(curr.dt * 1000);
      return Math.abs(currDt - new Date()) < Math.abs(prevDt - new Date())
        ? curr
        : prev;
    });
    return nearestWeather;
  }
};

export const RealVideo = (props: RealVideoProps) => {
  const {cityName} = props;

  if (!cityName) {
    console.error('cityName parametresi gereklidir.');
    return null;
  }

  const cityWeatherData = getCityWeatherData(cityName);

  if (!cityWeatherData || cityWeatherData.length === 0) {
    console.error(
      `Belirtilen şehir için hava durumu verisi bulunamadı: ${cityName}`
    );
    return null;
  }

  const currentWeather = getCurrentWeather(cityWeatherData);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 0);

  return (
    <>
      <AbsoluteFill className={styles.background} />
      <AbsoluteFill>
        <WeatherSelector />
        <Animated
          animations={[
            Move({
              y: -220,
              start: 20,
            }),
          ]}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 72,
              alignItems: 'center',
              paddingTop: '60px',
            }}
          >
            <WeatherMetadata cityName={cityName} currentDate={currentDate} />
            <Sunny width={400} height={400} />
            <WeatherStatus
              temperature={currentWeather.main.temp}
              description={currentWeather.weather[0].description}
            />
            <Animated
              animations={[
                Fade({to: 0, start: 30, duration: 30}),
                Fade({
                  to: 1,
                  initial: 0,
                  start: 75,
                  duration: 20,
                }),
              ]}
            >
              <WeatherInfo />
            </Animated>
          </div>
        </Animated>
      </AbsoluteFill>
    </>
  );
};
