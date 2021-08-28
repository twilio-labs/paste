import * as React from 'react';
import {
  styled,
  compose,
  layout,
  space,
  background,
  typography,
  border,
  boxShadow,
  position,
  flexbox,
} from '@twilio-paste/styling-library';
import type {StyledComponent} from '@twilio-paste/styling-library';
import {
  isDeprecatedBackgroundColorTokenProp,
  isDeprecatedBorderColorTokenProp,
  isDeprecatedBoxShadowTokenProp,
  isDeprecatedTextColorTokenProp,
} from '@twilio-paste/style-props';
import type {BoxProps, StyledBoxProps} from './types';
import {getPseudoStyles, PasteStyleProps, getCustomElementStyles} from './StyleFunctions';

// @ts-ignore can't work out how to stop the styled div color prop from emotion clashing with our color style prop in BoxProps
export const StyledBox = styled.div<StyledBoxProps>(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, flexbox, background, border, boxShadow, position, typography, PasteStyleProps),
  getPseudoStyles,
  getCustomElementStyles
) as StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  BoxProps,
  Record<string, unknown>
>;

const Box = React.forwardRef<HTMLElement, BoxProps>(({children, element = 'BOX', ...props}, ref) => {
  return (
    <StyledBox data-paste-element={element} ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});

Box.displayName = 'Box';
Box.propTypes = {
  backgroundColor: isDeprecatedBackgroundColorTokenProp,
  borderColor: isDeprecatedBorderColorTokenProp,
  boxShadow: isDeprecatedBoxShadowTokenProp,
  color: isDeprecatedTextColorTokenProp,
};

export {Box, getCustomElementStyles};
export * from './types';
export * from './SafelySpreadProps';
