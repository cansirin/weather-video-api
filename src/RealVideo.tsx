import {AbsoluteFill} from 'remotion';
import {Animated, Fade, Move, Scale} from 'remotion-animated';
import WeatherData from './data/weather.json';
import styles from './styles.module.css';
import './default.module.css';
import {WeatherInfo} from './components/WeatherInfo';
import {Sunny} from './components/weather/Sunny';
import {WeatherSelector} from './components/weather/WeatherSelector';

interface RealVideoProps {
	cityName?: string;
}

export const RealVideo = (props: RealVideoProps) => {
	console.log(WeatherData);
	const {cityName} = props;
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
						<div className={styles.WeatherMetadata}>
							<span style={{fontSize: 96}}>Mutlu Pazartesiler!</span>
							<span style={{fontSize: 54}}>15 Ekim 2023</span>
							<Animated animations={[Scale({by: 1.8, initial: 1, start: 21})]}>
								<span style={{fontSize: 96, lineHeight: 1.7}}>{cityName}</span>
							</Animated>
						</div>
						<Sunny width={400} height={400} />
						<div className={styles.WeatherData}>
							<p style={{fontSize: 180}}>30° C</p>
							<p style={{fontSize: 80}}>Parcali Bulutlu</p>
						</div>
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
