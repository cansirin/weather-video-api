import {Img} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {WeatherRow} from './WeatherRow';

export const WeatherInfo = () => {
	const frame = useCurrentFrame();
	const gecis = 60;

	const component =
		frame > gecis ? (
			<div style={{display: 'flex', flexDirection: 'column', gap: 100}}>
				<WeatherRow rowNumber={1} />
				<WeatherRow rowNumber={2} />
				<WeatherRow rowNumber={3} />
				<WeatherRow rowNumber={4} />
			</div>
		) : (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginTop: 60,
					gap: 100,
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Img
						src="https://cdn-icons-png.flaticon.com/512/172/172922.png"
						alt="image"
						width="180px"
						height="auto"
					/>
					<p style={{fontSize: 64}}>16km/hr</p>
					<p style={{fontSize: 60, color: '#fff'}}>Rüzgar</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Img
						src="https://cdn-icons-png.flaticon.com/512/1582/1582886.png"
						alt="image"
						width="180px"
						height="auto"
					/>
					<p style={{fontSize: 64}}>29%</p>
					<p style={{fontSize: 60, color: '#fff'}}>Nem</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Img
						src="https://cdn-icons-png.flaticon.com/512/175/175913.png"
						alt="image"
						width="180px"
						height="auto"
					/>
					<p style={{fontSize: 64}}>48%</p>
					<p style={{fontSize: 60, color: '#fff'}}>Yağış</p>
				</div>
			</div>
		);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 140,
			}}
		>
			{component}
		</div>
	);
};
