import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { FormSectionContext } from './FormSectionContext';

export interface FormSectionProps extends Omit<React.ComponentPropsWithRef<'fieldset'>, 'children'> {
  element?: BoxProps['element'];
  children: React.ReactNode;
}

export const FormSection = React.forwardRef<HTMLFieldSetElement, FormSectionProps>(
  ({ children, element = 'FORM_SECTION', id: idProp, ...props }, ref) => {
    const id = idProp ? idProp : useUID();

    return (
      <FormSectionContext.Provider value={{ id }}>
        <Box
          as="fieldset"
          border="none"
          margin="space0"
          padding="space0"
          marginY="space20"
          ref={ref}
          element={element}
          display="flex"
          flexDirection="column"
          rowGap="space80"
          _first={{ marginTop: 'space0' }}
          _last={{ marginBottom: 'space0' }}
          {...safelySpreadBoxProps(props)}
          aria-describedby={`${id}-section-description`}
          id={id}
        >
          {children}
        </Box>
      </FormSectionContext.Provider>
    );
  },
);

FormSection.displayName = 'FormSection';
