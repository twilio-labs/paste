import styled from '@emotion/styled';
import {compose, layout, space, background, border, boxShadow, position, flexbox, system} from 'styled-system';

import {
  LayoutProps,
  SpaceProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
  PositionProps,
  FlexboxProps,
} from '@twilio-paste/types';

export interface BoxProps
  extends LayoutProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    FlexboxProps {
  as?: keyof JSX.IntrinsicElements;
}

const backgroundColor = system({
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'backgroundColors',
  },
});

const borderColor = system({
  borderColor: {
    property: 'borderColor',
    scale: 'borderColors',
  },
});

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(
    space,
    layout,
    flexbox,
    background,
    backgroundColor,
    border,
    borderColor,
    boxShadow,
    position
  )
);

Box.displayName = 'Box';
export {Box};
