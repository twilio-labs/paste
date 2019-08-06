import styled from '@emotion/styled';
import {
  top,
  right,
  bottom,
  left,
  zIndex,
  TopProps,
  BottomProps,
  LeftProps,
  RightProps,
  ZIndexProps,
} from 'styled-system';
import {Box, BoxProps} from '@twilio-paste/box';

type AbsolutePositions =
  | 'fill'
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'top_fill'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'bottom_fill'
  | 'left'
  | 'left_top'
  | 'left_bottom'
  | 'left_fill'
  | 'right'
  | 'right_top'
  | 'right_bottom'
  | 'right_fill';

interface AbsoluteProps extends TopProps, BottomProps, LeftProps, RightProps, ZIndexProps, BoxProps {
  position?: AbsolutePositions;
}

type PositionStyles = {
  top?: 0;
  right?: 0;
  bottom?: 0;
  left?: 0;
};

const LEFT_OPTIONS = [
  'fill',
  'left',
  'left_top',
  'left_bottom',
  'left_fill',
  'top_left',
  'top_fill',
  'bottom_left',
  'bottom_fill',
];

const RIGHT_OPTIONS = [
  'fill',
  'right',
  'right_top',
  'right_bottom',
  'right_fill',
  'top_right',
  'top_fill',
  'bottom_right',
  'bottom_fill',
];

const TOP_OPTIONS = [
  'fill',
  'top',
  'top_right',
  'top_left',
  'top_fill',
  'right_top',
  'right_fill',
  'left_top',
  'left_fill',
];

const BOTTOM_OPTIONS = [
  'fill',
  'bottom',
  'bottom_right',
  'bottom_left',
  'bottom_fill',
  'right_bottom',
  'right_fill',
  'left_bottom',
  'left_fill',
];

const position = ({position = 'fill'}: AbsoluteProps): PositionStyles => {
  const positionStyles: PositionStyles = {};

  if (LEFT_OPTIONS.includes(position)) {
    positionStyles.left = 0;
  }
  if (RIGHT_OPTIONS.includes(position)) {
    positionStyles.right = 0;
  }
  if (TOP_OPTIONS.includes(position)) {
    positionStyles.top = 0;
  }
  if (BOTTOM_OPTIONS.includes(position)) {
    positionStyles.bottom = 0;
  }
  return positionStyles;
};

const Absolute = styled(Box)<AbsoluteProps>`
  position: absolute;
  ${zIndex}
  ${position}
  ${top}
  ${right}
  ${bottom}
  ${left}
`;

Absolute.defaultProps = {
  position: 'fill',
};

export {Absolute, AbsolutePositions};
