import * as React from 'react';
import { type BoxProps, Box } from '@twilio-paste/box';
import { Label } from '@twilio-paste/label';
import { Text } from '@twilio-paste/text';
import type { HTMLPasteProps } from '@twilio-paste/types';

import { LABEL_SUFFIX } from './constants';

export interface MeterLabelProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'element'> {
  children: string;
  htmlFor: string;
  valueLabel?: string;
}

const MeterLabel = React.forwardRef<HTMLLabelElement, MeterLabelProps>(
  ({ element = 'METER_LABEL', children, htmlFor, valueLabel, ...labelProps }, ref) => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        element={`${element}_WRAPPER`}
      >
        <Label {...labelProps} as="div" element={element} id={`${htmlFor}${LABEL_SUFFIX}`} ref={ref}>
          {children}
        </Label>
        {valueLabel && (
          <Text
            as="span"
            fontWeight="fontWeightSemibold"
            textAlign="end"
            marginBottom="space20"
            marginLeft="space20"
            aria-hidden="true"
            element={`${element}_VALUE_LABEL`}
          >
            {valueLabel}
          </Text>
        )}
      </Box>
    );
  },
);

MeterLabel.displayName = 'MeterLabel';

export { MeterLabel };
