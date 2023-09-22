import { InlineControlGroup } from '@twilio-paste/inline-control-group';
import type { InlineControlGroupProps } from '@twilio-paste/inline-control-group';
import * as React from 'react';

import { SwitchContext } from './SwitchContext';

export interface SwitchGroupProps extends InlineControlGroupProps {
  name: string;
  onChange?: (checked: boolean) => void;
}

const SwitchGroup = React.forwardRef<HTMLFieldSetElement, SwitchGroupProps>(
  (
    {
      children,
      element = 'SWITCH_GROUP',
      disabled = false,
      errorText,
      name,
      onChange,
      orientation = 'vertical',
      i18nRequiredLabel = '(required)',
      ...props
    },
    ref,
  ) => {
    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event.target.checked);
        }
      },
      [onChange],
    );

    const contextValue = React.useMemo(() => {
      return {
        disabled,
        name,
        onChange: onChangeHandler,
        hasError: errorText ? true : undefined,
      };
    }, [disabled, name, onChangeHandler]);

    return (
      <SwitchContext.Provider value={contextValue}>
        <InlineControlGroup
          {...props}
          element={element}
          disabled={disabled}
          errorText={errorText}
          name={name}
          orientation={orientation}
          ref={ref}
          i18nRequiredLabel={i18nRequiredLabel}
        >
          {children}
        </InlineControlGroup>
      </SwitchContext.Provider>
    );
  },
);

SwitchGroup.displayName = 'SwitchGroup';

export { SwitchGroup };
