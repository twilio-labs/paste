import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {top, right, bottom, left, zIndex, styleFn} from 'styled-system';
import {Box, BoxProps} from '@twilio-paste/box';

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

export type Presets =
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

export interface AbsoluteProps extends BoxProps {
  preset?: Presets;
}

interface PositionStyles {
  top?: 0;
  right?: 0;
  bottom?: 0;
  left?: 0;
}

const preset: styleFn = ({preset: _preset}) => {
  const positionStyles: PositionStyles = {};

  if (_preset == null) {
    return positionStyles;
  }

  if (LEFT_OPTIONS.includes(_preset)) {
    positionStyles.left = 0;
  }
  if (RIGHT_OPTIONS.includes(_preset)) {
    positionStyles.right = 0;
  }
  if (TOP_OPTIONS.includes(_preset)) {
    positionStyles.top = 0;
  }
  if (BOTTOM_OPTIONS.includes(_preset)) {
    positionStyles.bottom = 0;
  }
  return positionStyles;
};

const Absolute = styled(Box)<AbsoluteProps>(preset, zIndex, top, right, bottom, left, {
  position: 'absolute',
});

Absolute.defaultProps = {
  preset: 'fill',
};

if (process.env.NODE_ENV === 'development') {
  Absolute.propTypes = {
    preset: PropTypes.oneOf([
      'fill',
      'top',
      'top_left',
      'top_right',
      'top_fill',
      'bottom',
      'bottom_left',
      'bottom_right',
      'bottom_fill',
      'left',
      'left_top',
      'left_bottom',
      'left_fill',
      'right',
      'right_top',
      'right_bottom',
      'right_fill',
    ]),
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  };
}

export {Absolute};
