import { InputElement } from '@twilio-paste/input';
import * as React from 'react';

import type { ComboboxProps } from '../types';

const ComboboxInputSelect = React.forwardRef<HTMLInputElement, ComboboxProps>(({ ...props }, ref) => {
  return (
    <InputElement
      paddingRight={props.autocomplete ? undefined : 'space100'}
      cursor={props.autocomplete ? undefined : 'pointer'}
      readOnly={!props.autocomplete}
      type="text"
      ref={ref}
      {...props}
    />
  );
});

ComboboxInputSelect.displayName = 'ComboboxInputSelect';

export { ComboboxInputSelect };
