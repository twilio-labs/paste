import styled from '@emotion/styled';
import * as CSS from 'csstype';
import {
  space,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  borders,
  BorderProps,
  display,
  DisplayProps,
  boxShadow,
  zIndex,
  overflow,
  style,
} from 'styled-system';

import {
  WidthProps,
  MinWidthProps,
  MaxWidthProps,
  HeightProps,
  MinHeightProps,
  MaxHeightProps,
  SpacingProps,
  BackgroundColorProps,
  BorderRadiusProps,
  BorderWidthProps,
  BorderStyleProps,
  BorderColorProps,
  BoxShadowProps,
  ZIndexProps,
} from '@twilio-paste/types';

export interface BoxProps
  extends WidthProps,
    MinWidthProps,
    MaxWidthProps,
    HeightProps,
    MinHeightProps,
    MaxHeightProps,
    SpacingProps,
    BackgroundColorProps,
    BorderRadiusProps,
    BorderWidthProps,
    BorderStyleProps,
    BorderColorProps,
    BoxShadowProps,
    ZIndexProps,
    // styled-system
    DisplayProps,
    BorderProps {
  as?: keyof JSX.IntrinsicElements;
  overflow?: CSS.OverflowProperty;
}

const backgroundColor = style({
  prop: 'backgroundColor',
  cssProperty: 'backgroundColor',
  key: 'backgroundColors',
});

const borderBottomLeftRadius = style({
  prop: 'borderBottomLeftRadius',
  cssProperty: 'borderBottomLeftRadius',
  key: 'radii',
});

const borderBottomRightRadius = style({
  prop: 'borderBottomRightRadius',
  cssProperty: 'borderBottomRightRadius',
  key: 'radii',
});

const borderTopLeftRadius = style({
  prop: 'borderTopLeftRadius',
  cssProperty: 'borderTopLeftRadius',
  key: 'radii',
});

const borderTopRightRadius = style({
  prop: 'borderTopRightRadius',
  cssProperty: 'borderTopRightRadius',
  key: 'radii',
});

const borderColor = style({
  prop: 'borderColor',
  cssProperty: 'borderColor',
  key: 'borderColors',
});

const borderBottomWidth = style({
  prop: 'borderBottomWidth',
  cssProperty: 'borderBottomWidth',
  key: 'borderWidths',
});

const borderLeftWidth = style({
  prop: 'borderLeftWidth',
  cssProperty: 'borderLeftWidth',
  key: 'borderWidths',
});

const borderRightWidth = style({
  prop: 'borderRightWidth',
  cssProperty: 'borderRightWidth',
  key: 'borderWidths',
});

const borderTopWidth = style({
  prop: 'borderTopWidth',
  cssProperty: 'borderTopWidth',
  key: 'borderWidths',
});

const Box = styled.div<BoxProps>`
  ${backgroundColor};
  ${borders};
  ${borderColor}
  ${borderBottomWidth}
  ${borderLeftWidth}
  ${borderRightWidth}
  ${borderTopWidth}
  ${borderBottomLeftRadius};
  ${borderBottomRightRadius};
  ${borderTopLeftRadius};
  ${borderTopRightRadius};
  ${display};
  ${width};
  ${minWidth};
  ${maxWidth};
  ${height};
  ${minHeight};
  ${maxHeight};
  ${boxShadow};
  ${space};
  ${zIndex};
  ${overflow};
`;

Box.defaultProps = {
  minWidth: 'size0',
};

export {Box};
