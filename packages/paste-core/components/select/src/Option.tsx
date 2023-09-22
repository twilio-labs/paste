import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { HTMLPasteProps } from '@twilio-paste/types';
import * as React from 'react';

import type { Element } from './types';

export interface OptionProps extends HTMLPasteProps<'option'> {
  value: string;
  children: React.ReactNode;
  element?: Element;
}

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(({ children, element = 'OPTION', ...props }, ref) => {
  if (props.selected) {
    // eslint-disable-next-line no-console
    console.warn('"selected" is a blocked prop on this component, please use "value" on the select element.');
  }
  return (
    <Box
      as="option"
      ref={ref}
      {...safelySpreadBoxProps(props)}
      element={element}
      size={undefined}
      height={undefined}
      width={undefined}
      backgroundColor="inherit"
      color="inherit"
      fontFamily="inherit"
      lineHeight="lineHeight50"
      paddingTop="space30"
      paddingBottom="space30"
      paddingLeft="space20"
    >
      {children}
    </Box>
  );
});

Option.displayName = 'Option';

export { Option };
