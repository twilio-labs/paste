import * as React from 'react';
import {styled, size as sizeFn, css} from '@twilio-paste/styling-library';

import {Box} from '@twilio-paste/core/box';

import {SvgAnimate, CircleAnimate} from './keyframes';

export const StyledDiv = ({size = 'sizeIcon60', children}) => (
  <Box size={size} position="relative" top="50%">
    {children}
  </Box>
);

type CircleStyleProps = Pick<React.SVGProps<SVGCircleElement>, 'strokeWidth' | 'fill' | 'strokeLinecap'> & {
  transformOrigin: string;
};
type CircleGeometryProps = Pick<React.SVGProps<SVGCircleElement>, 'cx' | 'cy' | 'r'>;

const circleGeometry: CircleGeometryProps = {
  cx: '50',
  cy: '50',
  r: '45',
};

const circleStyleProps: CircleStyleProps = {
  fill: 'transparent',
  strokeLinecap: 'round',
  transformOrigin: '50% 50%',
};

export const StyledCircleTrack = styled.circle<{stroke: string}>(({stroke}) =>
  css({
    ...circleStyleProps,
    ...circleGeometry,
    stroke,
    strokeWidth: 'sizeSquare30',
    opacity: 0.25,
  })
);

export const AnimatedStyledCircle = styled.circle<{stroke: string}>(({stroke}) =>
  css({
    ...circleStyleProps,
    ...circleGeometry,
    animation: `1.4s linear infinite both ${CircleAnimate}`,
    strokeDasharray: '285',
    strokeWidth: 'sizeSquare30',
    stroke,
    '@media screen and (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  })
);

export const StyledSvg = styled.svg(sizeFn, () => ({
  height: '100%',
  width: '100%',
  display: 'block',
  animation: `6s ease-in-out infinite both ${SvgAnimate}`,
  '@media screen and (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));
