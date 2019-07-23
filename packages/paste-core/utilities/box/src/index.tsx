import styled from '@emotion/styled';
import {
  borders,
  display,
  height,
  HeightProps,
  maxWidth,
  MaxWidthProps,
  minWidth,
  MinWidthProps,
  space,
  style,
  themeGet,
  width,
  WidthProps,
} from 'styled-system';
import {ThemeShape} from '@paste/theme-tokens';
import {SpacingThemeProps} from '../../../../../types';

export interface BoxProps extends HeightProps, MaxWidthProps, MinWidthProps, WidthProps, SpacingThemeProps {
  as?: string;
  backgroundColor?: keyof ThemeShape['backgroundColors'];
  borderRadius?: keyof ThemeShape['radii'];
  borderType?: keyof ThemeShape['borderTypes'];
  borderWidth?: keyof ThemeShape['borderWidths'];
}

const backgroundColor = style({
  prop: 'backgroundColor',
  cssProperty: 'backgroundColor',
  key: 'backgroundColors',
});

const BorderType = (props: BoxProps): string | null => {
  return props.borderType ? themeGet(`borderTypes.${props.borderType}`)(props) : null;
};

const Box = styled.div<BoxProps>`
  ${backgroundColor};
  ${borders};
  ${BorderType};
  ${display};
  ${height};
  ${maxWidth};
  ${minWidth};
  ${space};
  ${width};
`;

Box.defaultProps = {
  minWidth: 0,
};

export {Box};
