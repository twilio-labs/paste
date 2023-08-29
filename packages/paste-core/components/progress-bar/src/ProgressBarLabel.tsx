import * as React from 'react';
import {type BoxProps} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {LABEL_SUFFIX} from './constants';

export interface ProgressBarLabelProps extends HTMLPasteProps<'div'> {
  element?: BoxProps['element'];
  children: string;
  htmlFor: string;
}

export const ProgressBarLabel = React.forwardRef<HTMLLabelElement, ProgressBarLabelProps>(
  ({element = 'PROGRESS_BAR_LABEL', children, htmlFor, ...labelProps}, ref) => {
    return (
      <Label {...labelProps} as="div" element={element} id={`${htmlFor}${LABEL_SUFFIX}`} ref={ref}>
        {children}
      </Label>
    );
  }
);

ProgressBarLabel.displayName = 'ProgressBarLabel';
