import * as React from 'react';
import {type BoxProps, Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {labelIdSuffix} from './Meter';

export interface MeterLabelProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'element'> {
  children: string;
  htmlFor: string;
}

const MeterLabel = React.forwardRef<HTMLLabelElement, MeterLabelProps>(
  ({element = 'METER_LABEL', children, htmlFor, ...labelProps}, ref) => {
    return (
      <Box display="flex" width="fit-content" element={`${element}_WRAPPER`}>
        <Label {...labelProps} as="div" element={element} id={`${htmlFor}${labelIdSuffix}`} ref={ref}>
          {children}
        </Label>
      </Box>
    );
  }
);

MeterLabel.displayName = 'MeterLabel';

export {MeterLabel};
