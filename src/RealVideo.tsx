import {useCurrentFrame} from 'remotion';
import {AbsoluteFill, Img} from 'remotion';
import {Animated, Move, Fade} from 'remotion-animated';
import styles from './styles.module.css';
import './default.module.css';
import {WeatherRow} from './components/WeatherRow';
import {WeatherInfo} from './components/WeatherInfo';

export const RealVideo = () => {
	return (
		<>
			<AbsoluteFill className={styles.background} />
			{/* <AbsoluteFill className={styles.WeatherRowsWrapper}> */}
			<AbsoluteFill>
				<Animated
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 72,
						justifyContent: 'space-around',
						alignItems: 'center',
						padding: '60px 0',
					}}
					animations={[
						Move({
							y: -240,
							start: 30,
						}),
					]}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<p style={{fontSize: 96}}>Happy Saturday!</p>
						<p style={{fontSize: 80}}>Location: Adana</p>
					</div>
					<Img
						src="https://cdn-icons-png.flaticon.com/512/2580/2580627.png"
						alt="image"
						width="400px"
						height="auto"
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<p style={{fontSize: 200, lineHeight: 1}}>30° C</p>
						<p style={{fontSize: 80, lineHeight: 1}}>Sunny Cloudy</p>
					</div>
					<Animated
						animations={[
							Fade({to: 0, start: 30, duration: 30}),
							Fade({
								to: 1,
								initial: 0,
								start: 70,
								duration: 30,
							}),
						]}
					>
						<WeatherInfo />
					</Animated>
				</Animated>
			</AbsoluteFill>
		</>
	);
};
