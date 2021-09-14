import * as React from 'react';
import {styled} from '@twilio-paste/styling-library';

import {SvgKeyframes, CircleKeyframes} from './keyframes';

type CircleStyleProps = Pick<React.SVGProps<SVGCircleElement>, 'strokeWidth' | 'fill' | 'strokeLinecap'> & {
  transformOrigin: string;
};

const circleStyleProps: CircleStyleProps = {
  fill: 'transparent',
  strokeLinecap: 'round',
  transformOrigin: '50% 50%',
};

export const StyledCircleTrack = styled.circle(() => {
  return {
    ...circleStyleProps,
    stroke: 'currentColor',
    opacity: 0.25,
  };
});

export const AnimatedStyledCircle = styled.circle<{show: boolean}>(({show}) => {
  return {
    ...circleStyleProps,
    animation: `1.4s linear infinite both ${CircleKeyframes}`,
    strokeDasharray: '285',
    stroke: 'currentColor',
    '@media screen and (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
    opacity: show ? 1 : 0,
  };
});

export const StyledSvg = styled.svg(() => ({
  height: '100%',
  width: '100%',
  display: 'block',
  animation: `6s ease-in-out infinite both ${SvgKeyframes}`,
  '@media screen and (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));
