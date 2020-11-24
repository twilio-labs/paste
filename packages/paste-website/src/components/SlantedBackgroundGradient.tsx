import * as React from 'react';
import {BackgroundColorOptions} from '@twilio-paste/style-props';
import {useTheme} from '@twilio-paste/theme';
import {useWindowSize} from '../hooks/useWindowSize';

const SKEW_ANGLE = -0.15708; // radians. -9deg
// https://codepen.io/enbee81/full/yLyrmyg
const getSkewOffset = (width: number): number => Math.ceil((Math.tan(SKEW_ANGLE) * width) / 2);

// Make this shareable between several components implementing skew (footer, hero)
export function useSlantedSkew(): [number] {
  const {width = 1740} = useWindowSize();
  return [getSkewOffset(width)];
}

interface BackgroundGradientProps {
  angle?: string;
  startColor: BackgroundColorOptions;
  endColor: BackgroundColorOptions;
}

export const SlantedBackgroundGradient: React.FC<BackgroundGradientProps> = ({
  angle,
  startColor,
  endColor,
  ...props
}) => {
  const [skewOffset] = useSlantedSkew();
  const {backgroundColors} = useTheme();

  return (
    <div
      {...props}
      css={{
        '&:before': {
          content: `" "`,
          zIndex: -1,
          position: 'absolute',
          top: `${skewOffset}px`,
          right: 0,
          bottom: 0,
          left: 0,
          transform: `skewY(${SKEW_ANGLE}rad)`,
          background: `linear-gradient(
                  ${angle !== undefined ? angle : '90deg'},
                  ${backgroundColors[startColor]} 0%,
                  ${backgroundColors[endColor]} 100%
                )`,
        },
      }}
    />
  );
};
