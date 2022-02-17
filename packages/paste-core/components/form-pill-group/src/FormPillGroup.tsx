import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {useUID} from '@twilio-paste/uid-library';
import {Composite} from '@twilio-paste/reakit-library';
import type {CompositeProps} from '@twilio-paste/reakit-library';

export interface FormPillGroupProps
  extends Omit<CompositeProps, 'unstable_virtual' | 'unstable_moves' | 'unstable_system' | 'wrapElement' | 'wrap'> {
  'aria-label': string;
  element?: string;
  children: React.ReactNode;
  i18nKeyboardControls?: string;
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
      flexWrap="wrap"
      rowGap="space30"
      columnGap="space30"
    >
      {props.children}
    </Box>
  )
);

FormPillGroupStyles.displayName = 'StyledFormPillGroup';

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
export const FormPillGroup = React.forwardRef<HTMLUListElement, FormPillGroupProps>(
  ({i18nKeyboardControls = 'Press Delete or Backspace to remove. Press Enter to toggle selection.', ...props}, ref) => {
    const keyboardControlsId = useUID();
    return (
      <>
        <Composite as={FormPillGroupStyles} {...props} ref={ref} aria-describedby={keyboardControlsId}>
          {props.children}
        </Composite>
        <ScreenReaderOnly id={keyboardControlsId}>{i18nKeyboardControls}</ScreenReaderOnly>
      </>
    );
  }
);

FormPillGroup.displayName = 'FormPillGroup';
