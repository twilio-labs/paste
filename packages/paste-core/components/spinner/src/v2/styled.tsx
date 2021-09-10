import * as React from 'react';
import {styled, css} from '@twilio-paste/styling-library';

import {SvgAnimate, CircleAnimate} from './keyframes';

type CircleStyleProps = Pick<React.SVGProps<SVGCircleElement>, 'strokeWidth' | 'fill' | 'strokeLinecap'> & {
  transformOrigin: string;
};

const circleStyleProps: CircleStyleProps = {
  fill: 'transparent',
  strokeLinecap: 'round',
  transformOrigin: '50% 50%',
  strokeWidth: 'sizeSquare30',
};

export const StyledCircleTrack = styled.circle<{stroke: string}>(({stroke}) =>
  css({
    ...circleStyleProps,
    stroke,
    opacity: 0.25,
  })
);

export const AnimatedStyledCircle = styled.circle<{stroke: string}>(({stroke}) =>
  css({
    ...circleStyleProps,
    animation: `1.4s linear infinite both ${CircleAnimate}`,
    strokeDasharray: '285',
    stroke,
    '@media screen and (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  })
);

export const StyledSvg = styled.svg(() => ({
  height: '100%',
  width: '100%',
  display: 'block',
  animation: `6s ease-in-out infinite both ${SvgAnimate}`,
  '@media screen and (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));
