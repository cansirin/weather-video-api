import React from 'react';
import {Animated, Scale} from 'remotion-animated';
import styles from './styles.module.css';

interface WeatherMetadataProps {
	cityName?: string;
	currentDate: Date;
}

const WeatherMetadata: React.FC<WeatherMetadataProps> = ({
	cityName,
	currentDate,
}) => {
	const daysOfWeek = [
		'Pazarlar',
		'Pazartesiler',
		'Salılar',
		'Çarşambalar',
		'Perşembeler',
		'Cumalar',
		'Cumartesiler',
	];
	const dayOfWeek = daysOfWeek[currentDate.getDay()];

	const formattedDate = currentDate.toLocaleDateString('tr-TR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div className={styles.WeatherMetadata}>
			<span style={{fontSize: 96, fontWeight: 'bold'}}>Mutlu {dayOfWeek}</span>
			<span style={{fontSize: 48}}>{formattedDate}</span>

			<Animated animations={[Scale({by: 1.8, initial: 1, start: 21})]}>
				<span style={{fontSize: 96, lineHeight: 1.7}}>{cityName}</span>
			</Animated>
		</div>
	);
};

export default WeatherMetadata;
