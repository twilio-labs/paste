import * as React from 'react';
import {type BoxProps} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {LABEL_SUFFIX} from './constants';

export interface MeterLabelProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'element'> {
  children: string;
  htmlFor: string;
}

const MeterLabel = React.forwardRef<HTMLLabelElement, MeterLabelProps>(
  ({element = 'METER_LABEL', children, htmlFor, ...labelProps}, ref) => {
    return (
      <Label {...labelProps} as="div" element={element} id={`${htmlFor}${LABEL_SUFFIX}`} ref={ref}>
        {children}
      </Label>
    );
  }
);

MeterLabel.displayName = 'MeterLabel';

export {MeterLabel};
