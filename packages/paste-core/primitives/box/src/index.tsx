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
} from '@twilio-paste/style-props';

export interface BoxProps
  extends React.HTMLAttributes<any>,
    LayoutProps,
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

const Box = styled.div(
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
) as React.FC<BoxProps>;

Box.displayName = 'Box';
export {Box};
export * from './SafelySpreadProps';
