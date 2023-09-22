import { styled } from '@twilio-paste/styling-library';

import { circleCircumference } from './constants';
import { CircleKeyframes, SvgKeyframes } from './keyframes';

export const StyledCircleTrack = styled.circle({
  transformOrigin: 'center',
  opacity: 0.25,
});

export const AnimatedStyledCircle = styled.circle<{ show: boolean }>(({ show }) => ({
  transformOrigin: 'center',
  animation: `1.5s ease-in-out infinite both ${CircleKeyframes}`,
  strokeDasharray: circleCircumference,
  opacity: show ? 1 : 0,
}));

export const StyledSvg = styled.svg({
  height: '100%',
  width: '100%',
  display: 'block',
  animation: `4.25s linear infinite both ${SvgKeyframes}`,
});
