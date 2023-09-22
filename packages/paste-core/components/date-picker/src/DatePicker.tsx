import * as React from 'react';
import type { InputProps } from '@twilio-paste/input';
import { Input } from '@twilio-paste/input';

export type DatePickerProps = Omit<InputProps, 'type' | 'insertBefore' | 'insertAfter'>;

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(({ element = 'DATEPICKER', ...props }, ref) => {
  return <Input element={element} {...props} type="date" ref={ref} />;
});

DatePicker.displayName = 'DatePicker';

export { DatePicker };
