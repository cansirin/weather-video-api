import {z} from 'zod';
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
  cityName: string;
  chosenTime: string;
  chosenDate: string;
}

export const myCompSchema = z.object({
  cityName: z.string(),
  chosenTime: z.string(),
  chosenDate: z.string(),
});

const getCurrentWeather = (
  cityName: string,
  // TODO: add weather interface
  cityWeatherData: any[],
  date: string,
  time: string
) => {
  const cityWeathers = cityWeatherData.filter((item) => item[cityName])[0][
    cityName
  ];

  const weather = cityWeathers.filter((weather: any) => {
    const weatherDate = weather.dt_txt;
    const wantedDate = `${date} ${time}:00:00`;
    return weatherDate === wantedDate;
  });

  return weather;
};

export const RealVideo = (props: RealVideoProps) => {
  const {cityName} = props;

  const weather = getCurrentWeather(
    cityName,
    WeatherData,
    props.chosenDate,
    props.chosenTime
  );
  const {main, weather: weatherDescription} = weather[0] ?? {};
  const date = props.chosenDate.split('-');
  const month = parseInt(date[1], 10) - 1; // TODO: month starts from 0 -> we need to figure out something else
  const currentDate = new Date(
    parseInt(date[0], 10),
    month,
    parseInt(date[2], 10)
  );

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
              temperature={main?.temp}
              description={
                weatherDescription && weatherDescription[0].description
              }
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
