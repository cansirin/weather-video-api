import {ReactNode} from 'react';
import {Title} from './HelloWorld/Title';

export const CityWithWeather = ({
	city,
	weather,
}: {
	city: ReactNode;
	weather: ReactNode;
}) => {
	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<Title titleText="ADANA" titleColor="#000" />
			{weather}
			{city}
		</div>
	);
};
