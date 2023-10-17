import {AbsoluteFill} from 'remotion';
import {Animated, Fade, Move, Scale} from 'remotion-animated';
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
}

export const RealVideo = (props: RealVideoProps) => {
  console.log(WeatherData);
  const cityName = props.cityName;

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  return (
    <>
      <AbsoluteFill className={styles.background} />
      {/* <AbsoluteFill className={styles.WeatherRowsWrapper}> */}
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
            {/* -WeatherMetadata adinda bir component yarat
 -proplari gun  ismi tarih Sehir ismi cityName olsun
 -WeatherData diye bir component yarat 
 -proplari C derece ve WeatherStatus
 
 
 
 
 */}

            <WeatherMetadata cityName={cityName} currentDate={currentDate} />

            <Sunny width={400} height={400} />
            <WeatherStatus temperature={31} description={'Parcali Bulutlu'} />
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
