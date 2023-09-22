import {
  boxShadow,
  compose,
  createShouldForwardProp,
  display,
  overflow,
  position,
  props as stylingProps,
  space,
  styled,
  typography,
  verticalAlign,
} from '@twilio-paste/styling-library';
import type { StyledComponent } from '@twilio-paste/styling-library';
import * as React from 'react';

import { customStyleProps } from './CustomStyleProps';
import { PseudoPropStyles } from './PseudoPropStyles';
import { PasteStyleProps, getCustomElementStyles, getPseudoStyles } from './StyleFunctions';
import type { StyledTextProps, TextProps } from './types';

const coreVersionNumberPlaceholder: string = '[VI]{{inject}}[/VI]';

const shouldForwardProp = createShouldForwardProp([
  ...stylingProps,
  ...Object.keys({ ...customStyleProps, ...PseudoPropStyles }),
]);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore can't work out how to stop the styled div color prop from emotion clashing with our color style prop in TextProps
export const StyledText = styled<StyledTextProps>('div', { shouldForwardProp })(
  {
    margin: 0,
    padding: 0,
  },
  compose(boxShadow, display, overflow, position, space, typography, verticalAlign, PasteStyleProps),
  getPseudoStyles,
  getCustomElementStyles,
) as StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  TextProps,
  Record<string, unknown>
>;

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { children, color = 'colorText', fontSize = 'fontSize30', lineHeight = 'lineHeight30', element = 'TEXT', ...props },
    ref,
  ) => {
    return (
      <StyledText
        data-paste-element={element}
        data-paste-core-version={coreVersionNumberPlaceholder}
        ref={ref}
        color={color}
        fontSize={fontSize}
        lineHeight={lineHeight}
        {...props}
      >
        {children}
      </StyledText>
    );
  },
);

Text.displayName = 'Text';

export { Text };
export * from './types';
export * from './SafelySpreadProps';
