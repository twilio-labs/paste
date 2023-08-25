import * as React from 'react';

import type {InputProps} from '@twilio-paste/input';
import {Input} from '@twilio-paste/input';

export type TimePickerProps = Omit<InputProps, 'type' | 'insertBefore' | 'insertAfter' | 'step'>;

const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  // @ts-expect-error because ts doesn't like destructuring the step prop after omitting it from the type
  ({step: _step, element = 'TIMEPICKER', ...props}, ref) => {
    return <Input element={element} {...props} type="time" ref={ref} />;
  }
);

TimePicker.displayName = 'TimePicker';

export {TimePicker};
