import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Composite} from '@twilio-paste/reakit-library';
import type {CompositeProps} from '@twilio-paste/reakit-library';

export interface FormPillGroupProps extends CompositeProps {
  'aria-label': string;
  element?: string;
  children: React.ReactNode;
}

const FormPillGroupStyles = React.forwardRef<HTMLUListElement, FormPillGroupProps>(
  ({element = 'FORM_PILL_GROUP', ...props}, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      role="listbox"
      margin="space0"
      padding="space0"
      display="flex"
      columnGap="space30"
    >
      {props.children}
    </Box>
  )
);

export const FormPillGroup = React.forwardRef<HTMLUListElement, FormPillGroupProps>((props, ref) => {
  return (
    <Composite as={FormPillGroupStyles} {...props} ref={ref}>
      {props.children}
    </Composite>
  );
});
