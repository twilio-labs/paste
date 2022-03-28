import * as React from 'react';
import {InputElement} from '@twilio-paste/input';
import type {ComboboxProps} from '../types';

const ComboboxInputSelect = React.forwardRef<HTMLInputElement, ComboboxProps>(({...props}, ref) => {
  return <InputElement paddingRight={!props.autocomplete ? 'space100' : null} type="text" ref={ref} {...props} />;
});

ComboboxInputSelect.displayName = 'ComboboxInputSelect';

export {ComboboxInputSelect};
