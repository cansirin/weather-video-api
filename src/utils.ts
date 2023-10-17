import {
  interpolate,
  spring,
  SpringConfig,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {AnimationOptions, AnimationValues} from './api/Animatable/Animation';

export const useTranslate = ({
  from,
  to,
  startAtFrame = 0,
}: {
  from: number;
  to: number;
  startAtFrame?: number;
}): number => {
  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const animation = spring({
    frame: frame - startAtFrame,
    fps,
    config: {damping: 200},
  });

  return interpolate(animation, [0, 1], [from, to]);
};

interface InterpolateAnimation {
  animationSpring: number;
  to: number;
  initialValue?: number;
  defaultValue?: number;
}

export const interpolateAnimation = ({
  animationSpring,
  to,
  initialValue = 0,
  defaultValue = initialValue,
}: InterpolateAnimation) => {
  return to === undefined
    ? defaultValue
    : interpolate(animationSpring, [0, 1], [initialValue, to]);
};

interface AnimationSpringProps {
  frame: number;
  fps: number;
  options?: AnimationOptions;
}
export const animationSpring =
  (withDefaultConfig: Partial<SpringConfig>) =>
  ({
    frame,
    fps,
    options = {duration: 0, startAtFrame: 0},
  }: AnimationSpringProps) => {
    return spring({
      fps,
      frame: frame - options.startAtFrame,
      durationInFrames: options.duration,
      config: {
        ...withDefaultConfig,
      },
    });
  };

export const smoothSpring = animationSpring({
  damping: 20,
  stiffness: 7,
  overshootClamping: true,
});

const value = (currentValue: number | undefined, defaultValue: number) =>
  currentValue ? currentValue.toFixed(4) : defaultValue;

const transformStyles = (values: AnimationValues): string | null => {
  let translate: string | undefined;
  let scale: string | undefined;

  if (values.translateX || values.translateY)
    // translate = `translate(${value(values.translateX, 0)}px, ${value(
    // 	values.translateY,
    // 	0
    // )}px)`;
    translate = `translateX(${value(
      values.translateX,
      0
    )}px) translateY(${value(values.translateY, 0)}px)`;

  // We need to specifically check for undefined here, because 0 is a valid,
  // and more importantly non-default(!) scale value.
  if (values.scaleX || values.scaleY)
    scale = `scale(${value(values.scaleX, 1)}, ${value(values.scaleY, 1)})`;

  if (!translate && !scale) {
    return null;
  }

  let transform = '';

  if (translate) transform += translate;
  if (scale) transform += ` ${scale}`;

  return transform.trim();
};

export const stylesFromValues = (
  values: AnimationValues
): React.CSSProperties => {
  const properties: React.CSSProperties = {};
  const transform = transformStyles(values);

  if (values.opacity !== undefined) properties.opacity = values.opacity;

  if (transform) properties.transform = transform;

  return properties;
};
