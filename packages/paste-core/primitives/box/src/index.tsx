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
  createShouldForwardProp,
  props as defaultStylingProps,
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
import {customStyleProps} from './CustomStyleProps';
import {PseudoPropStyles} from './PseudoPropStyles';

// we need size to hit the DOM for <select /> elements
const stylingPropsWithoutSize = defaultStylingProps.filter((item: string) => item !== 'size');

const shouldForwardProp = createShouldForwardProp([
  ...stylingPropsWithoutSize,
  ...Object.keys({...customStyleProps, ...PseudoPropStyles}),
]);

const UncastStyledBox = styled('div', {shouldForwardProp})<StyledBoxProps>(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, flexbox, background, border, boxShadow, position, typography, PasteStyleProps),
  getPseudoStyles,
  getCustomElementStyles
);

export const StyledBox = UncastStyledBox as StyledComponent<
  Omit<React.ComponentProps<typeof UncastStyledBox>, 'color'>
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
