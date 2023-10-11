import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {ReactNode} from 'react';

export const BaseCity = ({children}: {children: ReactNode}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const opacity = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
			}}
		>
			<div style={{opacity}}>{children}</div>
		</AbsoluteFill>
	);
};
