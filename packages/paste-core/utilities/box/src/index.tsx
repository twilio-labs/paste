import styled from '@emotion/styled';
import {
  compose,
  space,
  layout,
  flexbox,
  background,
  border,
  boxShadow,
  zIndex,
  DisplayProps,
  OverflowProps,
  system,
} from 'styled-system';

import {
  SizingProps,
  SpacingProps,
  BackgroundColorProps,
  BorderProps,
  BoxShadowProps,
  ZIndexProps,
} from '@twilio-paste/types';

export interface BoxProps
  extends SizingProps,
    SpacingProps,
    BackgroundColorProps,
    BorderProps,
    BoxShadowProps,
    ZIndexProps,
    // styled-system
    DisplayProps,
    OverflowProps {
  as?: keyof JSX.IntrinsicElements;
}

const backgroundColor = system({
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'backgroundColors',
  },
});

const Box = styled.div<BoxProps>(
  compose(
    space,
    layout,
    flexbox,
    background,
    backgroundColor,
    border,
    boxShadow,
    zIndex
  )
);

Box.defaultProps = {
  minWidth: 'size0',
};

export {Box};
