import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {InputProps} from '@twilio-paste/input';
import {Input} from '@twilio-paste/input';

export type DatePickerProps = Omit<InputProps, 'type' | 'insertBefore' | 'insertAfter'>;

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(({element = 'DATEPICKER', ...props}, ref) => {
  return <Input element={element} {...props} type="date" ref={ref} />;
});

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
  disabled: PropTypes.bool,
  element: PropTypes.string,
  hasError: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export {DatePicker};
