import {AbsoluteFill} from 'remotion';
import {BaseCity} from './components/cities/BaseCity';
import {Title} from './HelloWorld/Title';
import {useTranslate} from './utils';
import {ReactNode} from 'react';

export const CityWithWeather = ({
	city,
	weather,
}: {
	city: ReactNode;
	weather: ReactNode;
}) => {
	const moveUp = useTranslate({from: 0, to: -500, startAtFrame: 40});
	const moveLeft = useTranslate({from: 0, to: 0, startAtFrame: 40});
	const scaleDown = useTranslate({from: 1, to: 0.8, startAtFrame: 40});

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				transform: `scale(${scaleDown})
				translateX(${moveLeft}px) translateY(${moveUp}px)`,
			}}
		>
			<Title titleText="A D A N A" titleColor="#000" />
			<BaseCity>{city}</BaseCity>
			{weather}
		</AbsoluteFill>
	);
};
