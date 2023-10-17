import React from 'react';
import styles from './styles.module.css';

interface WeatherDataProps {
	temperature: number;
	description: string;
}

export const WeatherData: React.FC<WeatherDataProps> = ({
	temperature,
	description,
}) => {
	return (
		<div className={styles.WeatherData}>
			<p style={{fontSize: 180}}>{temperature}° C</p>
			<p style={{fontSize: 80}}>{description}</p>
		</div>
	);
};
