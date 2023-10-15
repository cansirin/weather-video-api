import {AbsoluteFill} from 'remotion';
import styles from './styles.module.css';
import {Sunny} from './components/weather/Sunny';
import {Animated, Move, Scale} from 'remotion-animated';
import {CityWithWeather} from './CityWithWeather';
import {Adana} from './components/cities/Adana';

export const RealVideo = () => {
	return (
		<>
			<AbsoluteFill className={styles.background} />
			<AbsoluteFill>
				<AbsoluteFill className={styles.WeatherRowsWrapper}>
					<Animated
						animations={[
							Move({
								y: 0,
								initialY: -1200,
							}),
						]}
					>
						<CityWithWeather
							city={<Adana />}
							weather={<Sunny celcius={30} scale={2} />}
						/>
					</Animated>
				</AbsoluteFill>
				{/* <div className={styles.WeatherRowsWrapper}> */}
				{/* 	<Sunny celcius={30} scale={1} /> */}
				{/* </div> */}
			</AbsoluteFill>
		</>
	);
};
