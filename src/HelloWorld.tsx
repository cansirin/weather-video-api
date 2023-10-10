import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from './HelloWorld/Title';
import {z} from 'zod';

import {zColor} from '@remotion/zod-types';
import React from 'react';
import {Sunny} from './components/weather/Sunny';
import {Adana} from './components/cities/Adana';

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

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'wheat'}}>
			<AbsoluteFill>
				{/* Sequences can shift the time for its children! */}
				{/* <Sequence from={10}></Sequence> */}
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence>
					<Adana />
				</Sequence>
				<Sequence from={15}>
					<Title titleText="ADANA" titleColor="#000" />
					<Sunny celcius={30} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
