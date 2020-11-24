import {styled, themeGet} from '@twilio-paste/styling-library';
import {BackgroundColorOptions} from '@twilio-paste/style-props';

// https://codepen.io/enbee81/full/yLyrmyg
const SKEW_ANGLE = -0.191986; // radians. -11deg
const SKEW_PADDING = Math.ceil((Math.tan(SKEW_ANGLE) * 1440) / 2);

interface BackgroundGradientProps {
  startColor: BackgroundColorOptions;
  endColor: BackgroundColorOptions;
}

// Note: to use, parent must be position=relative, since this is absolute.
export const SlantedBackgroundGradient = styled.div<BackgroundGradientProps>`
  &:before {
    content: ' ';
    z-index: -1;
    position: absolute;
    top: ${SKEW_PADDING}px;
    right: 0;
    bottom: 0;
    left: 0;
    backface-visibility: hidden;
    transform: skewY(${SKEW_ANGLE}rad);
    background: linear-gradient(
      90deg,
      ${props => themeGet(`backgroundColors.${props.startColor}`)} 0%,
      ${props => themeGet(`backgroundColors.${props.endColor}`)} 100%
    );
  }
`;
