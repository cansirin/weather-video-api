import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from './HelloWorld/Title';
import {z} from 'zod';

import {zColor} from '@remotion/zod-types';
import React from 'react';
import {Sunny} from './components/weather/Sunny';
import {Adana} from './components/cities/Adana';
import {BaseCity} from './components/cities/BaseCity';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor1,
	logoColor2,
}) => {
	// const frame = useCurrentFrame();
	// const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	// const logoTranslationProgress = spring({
	// 	frame: frame - 25,
	// 	fps,
	// 	config: {
	// 		damping: 100,
	// 	},
	// });

	// Move the logo up by 150 pixels once the transition starts
	// const logoTranslation = interpolate(
	// 	logoTranslationProgress,
	// 	[0, 1],
	// 	[0, -150]
	// );

	// Fade out the animation at the end

	return (
		<AbsoluteFill style={{backgroundColor: 'wheat'}}>
			<AbsoluteFill>
				{/* Sequences can shift the time for its children! */}
				{/* <Sequence from={10}></Sequence> */}
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence>
					<Title titleText="A D A N A" titleColor="#000" />
					<BaseCity>
						<Adana />
					</BaseCity>
				</Sequence>
				<Sequence from={15}>
					<Sunny celcius={30} scale={2} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
