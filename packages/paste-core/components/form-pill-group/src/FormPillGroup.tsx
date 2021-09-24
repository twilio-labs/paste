import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Composite} from '@twilio-paste/reakit-library';
import type {CompositeProps} from '@twilio-paste/reakit-library';

export interface FormPillGroupProps
  extends Omit<CompositeProps, 'unstable_virtual' | 'unstable_moves' | 'unstable_system' | 'wrapElement' | 'wrap'> {
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

/**
 * FormPillGroup should be used to wrap a collection of FormPills. It should be used in conjunction with
 * useFormPillGroupState hook
 *
 * @example
 * <FormPillGroup {...pillState} aria-label="Your favorite sports:">
 *   ...
 * </FormPillGroup>
 * @see http://paste.twilio.design/components/form-pill-group
 */
export const FormPillGroup = React.forwardRef<HTMLUListElement, FormPillGroupProps>((props, ref) => {
  return (
    <Composite as={FormPillGroupStyles} {...props} ref={ref}>
      {props.children}
    </Composite>
  );
});
