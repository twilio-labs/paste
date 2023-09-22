import {
  background,
  border,
  boxShadow,
  compose,
  createShouldForwardProp,
  flexbox,
  grid,
  layout,
  position,
  props as defaultStylingProps,
  space,
  styled,
  typography,
} from '@twilio-paste/styling-library';
import type { StyledComponent } from '@twilio-paste/styling-library';
import * as React from 'react';

import { customStyleProps } from './CustomStyleProps';
import { PseudoPropStyles } from './PseudoPropStyles';
import { PasteStyleProps, getCustomElementStyles, getPseudoStyles } from './StyleFunctions';
import type { BoxProps, StyledBoxProps } from './types';

const coreVersionNumberPlaceholder: string = '[VI]{{inject}}[/VI]';

// we need size to hit the DOM for <select /> elements
const stylingPropsWithoutSize = defaultStylingProps.filter((item: string) => item !== 'size');

const shouldForwardProp = createShouldForwardProp([
  ...stylingPropsWithoutSize,
  ...Object.keys({ ...customStyleProps, ...PseudoPropStyles }),
]);

// @ts-expect-error can't work out how to stop the styled div color prop from emotion clashing with our color style prop in BoxProps
export const StyledBox = styled('div', { shouldForwardProp })<StyledBoxProps>(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, flexbox, grid, background, border, boxShadow, position, typography, PasteStyleProps),
  getPseudoStyles,
  getCustomElementStyles,
) as unknown as StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  BoxProps,
  Record<string, unknown>
>;

const Box = React.forwardRef<HTMLElement, BoxProps>(({ children, element = 'BOX', ...props }, ref) => {
  return (
    <StyledBox data-paste-element={element} data-paste-core-version={coreVersionNumberPlaceholder} ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});

Box.displayName = 'Box';

export { Box, getCustomElementStyles };
export * from './types';
export * from './SafelySpreadProps';
