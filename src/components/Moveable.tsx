import {AbsoluteFill} from 'remotion';
import {useTranslate} from '../utils';

interface MoveProps {
	from: number;
	to: number;
	startAtFrame: number;
}
interface MoveableProps {
	sequence: MoveProps[];
}
export const Moveable = (props: MoveableProps) => {
	const sequence = props.sequence;
	const scaleDown = useTranslate({from: 4, to: 4, startAtFrame: 40});

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				transform: `scale(${scaleDown})
				 translateY(${moveDown}px)`,
			}}
		>
			<div
				style={{
					padding: '6px',
					backgroundColor: 'skyblue',
					display: 'flex',
					alignItems: 'center',
					gap: '10px',
					borderRadius: '10px',
					fontSize: '20px',
					fontWeight: 'bold',
					color: 'white',
				}}
			>
				<svg
					width="48"
					height="48"
					viewBox="0 0 128 128"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M111.955 66.5117C110.637 66.4438 109.63 65.3198 109.63 64C109.63 62.6802 110.637 61.5562 111.955 61.4883L117.005 61.2278C118.617 61.1446 120 62.3851 120 64C120 65.6149 118.617 66.8553 117.005 66.7722L111.955 66.5117ZM103.521 41.1787C104.182 42.3208 105.618 42.7936 106.793 42.1936L111.289 39.8982C112.732 39.1616 113.309 37.3865 112.497 35.9845C111.686 34.5825 109.864 34.2057 108.507 35.0892L104.276 37.8426C103.17 38.5623 102.861 40.0366 103.521 41.1787ZM86.8213 24.4786C87.9634 25.1395 89.4377 24.8305 90.1574 23.7245L92.9108 19.4933C93.7942 18.1356 93.4175 16.3141 92.0155 15.5028C90.6135 14.6915 88.8384 15.2684 88.1018 16.711L85.8064 21.2071C85.2064 22.3824 85.6792 23.8176 86.8213 24.4786ZM64 18.3704C65.3198 18.3704 66.4438 17.3633 66.5117 16.0453L66.7722 10.9954C66.8553 9.38262 65.6149 8 64 8C62.3851 8 61.1446 9.38262 61.2278 10.9954L61.4883 16.0453C61.5562 17.3633 62.6802 18.3704 64 18.3704ZM41.1787 24.4786C42.3208 23.8176 42.7936 22.3824 42.1936 21.2071L39.8982 16.711C39.1616 15.2684 37.3865 14.6915 35.9845 15.5028C34.5825 16.3141 34.2057 18.1356 35.0892 19.4933L37.8426 23.7245C38.5623 24.8305 40.0366 25.1395 41.1787 24.4786ZM24.4786 41.1787C25.1395 40.0366 24.8305 38.5623 23.7245 37.8426L19.4933 35.0892C18.1356 34.2058 16.3141 34.5825 15.5028 35.9845C14.6915 37.3865 15.2684 39.1616 16.711 39.8982L21.2071 42.1936C22.3824 42.7936 23.8176 42.3208 24.4786 41.1787ZM16.0453 61.4883C17.3633 61.5562 18.3704 62.6802 18.3704 64C18.3704 65.3198 17.3633 66.4438 16.0453 66.5117L10.9954 66.7722C9.38262 66.8554 8 65.6149 8 64C8 62.3851 9.38262 61.1446 10.9954 61.2278L16.0453 61.4883ZM24.4786 86.8213C23.8176 85.6792 22.3824 85.2064 21.2071 85.8064L16.711 88.1018C15.2684 88.8384 14.6915 90.6135 15.5028 92.0155C16.3141 93.4175 18.1356 93.7943 19.4933 92.9108L23.7245 90.1574C24.8305 89.4377 25.1395 87.9634 24.4786 86.8213ZM41.1787 103.521C40.0366 102.861 38.5623 103.17 37.8426 104.276L35.0892 108.507C34.2058 109.864 34.5825 111.686 35.9845 112.497C37.3865 113.309 39.1616 112.732 39.8982 111.289L42.1936 106.793C42.7936 105.618 42.3208 104.182 41.1787 103.521ZM64 109.63C62.6802 109.63 61.5562 110.637 61.4883 111.955L61.2278 117.005C61.1446 118.617 62.3851 120 64 120C65.6149 120 66.8554 118.617 66.7722 117.005L66.5117 111.955C66.4438 110.637 65.3198 109.63 64 109.63ZM86.8213 103.521C85.6792 104.182 85.2064 105.618 85.8064 106.793L88.1018 111.289C88.8384 112.732 90.6135 113.309 92.0155 112.497C93.4175 111.686 93.7943 109.864 92.9108 108.507L90.1574 104.276C89.4377 103.17 87.9634 102.861 86.8213 103.521ZM103.521 86.8213C102.861 87.9634 103.17 89.4377 104.276 90.1574L108.507 92.9108C109.864 93.7942 111.686 93.4175 112.497 92.0155C113.309 90.6135 112.732 88.8384 111.289 88.1018L106.793 85.8064C105.618 85.2064 104.182 85.6792 103.521 86.8213Z"
						fill="#FFD400"
					/>
					<path
						d="M102.37 64C102.37 85.1914 85.1914 102.37 64 102.37C42.8086 102.37 25.6296 85.1914 25.6296 64C25.6296 42.8086 42.8086 25.6296 64 25.6296C85.1914 25.6296 102.37 42.8086 102.37 64Z"
						fill="#FFD400"
					/>
				</svg>
				Cok derece
			</div>
		</AbsoluteFill>
	);
};
