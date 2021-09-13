import * as React from 'react';
import {styled, css} from '@twilio-paste/styling-library';
import type {GenericThemeShape} from '@twilio-paste/theme';
import type {TextColorOptions} from '@twilio-paste/style-props';

import {SvgKeyframes, CircleKeyframes} from './keyframes';

type CircleStyleProps = Pick<React.SVGProps<SVGCircleElement>, 'strokeWidth' | 'fill' | 'strokeLinecap'> & {
  transformOrigin: string;
};

const circleStyleProps: CircleStyleProps = {
  fill: 'transparent',
  strokeLinecap: 'round',
  transformOrigin: '50% 50%',
};

export const StyledCircleTrack = styled.circle<{stroke: TextColorOptions}>(({stroke, theme = {}}) => {
  const {
    textColors,
    sizes: {sizeSquare30},
  } = theme as GenericThemeShape;

  const strokeColor = textColors.hasOwnProperty(stroke)
    ? textColors[stroke as keyof GenericThemeShape['textColors']]
    : stroke;

  return css({
    ...circleStyleProps,
    strokeWidth: sizeSquare30 || '0.5rem',
    stroke: strokeColor,
    opacity: 0.25,
  });
});

export const AnimatedStyledCircle = styled.circle<{stroke: TextColorOptions}>(({stroke, theme = {}}) => {
  const {
    textColors,
    sizes: {sizeSquare30},
  } = theme as GenericThemeShape;

  const strokeColor = textColors.hasOwnProperty(stroke)
    ? textColors[stroke as keyof GenericThemeShape['textColors']]
    : stroke;

  return css({
    ...circleStyleProps,
    strokeWidth: sizeSquare30 || '0.5rem',
    animation: `1.4s linear infinite both ${CircleKeyframes}`,
    strokeDasharray: '285',
    stroke: strokeColor,
    '@media screen and (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  });
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
