import * as React from 'react';
import {BackgroundColorOptions} from '@twilio-paste/style-props';
import {useTheme} from '@twilio-paste/theme';
import {useWindowSize} from '../hooks/useWindowSize';

// https://codepen.io/enbee81/full/yLyrmyg
const getSkewOffset = (width: number, skewAngle: number): number => Math.floor((Math.tan(skewAngle) * width) / 2);

// -9deg in radians.
export const HOMEPAGE_SKEW_ANGLE = -0.15708;

// Make this shareable between several components implementing skew (footer, hero)
export function useSlantedSkew(angle: number | undefined = HOMEPAGE_SKEW_ANGLE): [number] {
  const {width = 1740} = useWindowSize();
  return [getSkewOffset(width, angle)];
}

interface BackgroundGradientProps {
  skewAngle?: number;
  gradientAngle?: string;
  startColor: BackgroundColorOptions;
  endColor: BackgroundColorOptions;
  styles?: React.CSSProperties;
}

export const SlantedBackgroundGradient: React.FC<BackgroundGradientProps> = ({
  startColor,
  endColor,
  skewAngle = HOMEPAGE_SKEW_ANGLE,
  gradientAngle = '90deg',
  styles,
  ...props
}) => {
  const [skewOffset] = useSlantedSkew(skewAngle);
  const {backgroundColors} = useTheme();

  return (
    <div
      css={{
        '&:before': {
          content: `" "`,
          zIndex: -1,
          position: 'absolute',
          // Fixes anti-aliasing
          // https://stackoverflow.com/questions/6492027/css-transform-jagged-edges-in-chrome/36549674#36549674
          outline: '1px solid transparent',
          right: 0,
          bottom: 0,
          left: 0,
          top: `${skewOffset}px`,
          transform: `skewY(${skewAngle}rad)`,
          transition: 'top 400ms ease',
          background: `linear-gradient(
            ${gradientAngle},
            ${backgroundColors[startColor]} 0%,
            ${backgroundColors[endColor]} 100%
          )`,
          ...styles,
        },
      }}
      {...props}
    />
  );
};
