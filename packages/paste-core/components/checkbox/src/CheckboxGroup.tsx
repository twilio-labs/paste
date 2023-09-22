import { InlineControlGroup } from '@twilio-paste/inline-control-group';
import type { InlineControlGroupProps } from '@twilio-paste/inline-control-group';
import * as React from 'react';

import type { CheckboxProps } from './Checkbox';
import { CheckboxContext } from './CheckboxContext';

export interface CheckboxGroupProps extends InlineControlGroupProps {
  isSelectAll?: boolean;
  name: string;
  onChange?: (checked: boolean) => void;
  i18nRequiredLabel?: string;
}

const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      children,
      element = 'CHECKBOX_GROUP',
      disabled = false,
      errorText,
      isSelectAll = false,
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
      <CheckboxContext.Provider value={contextValue}>
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
          {React.Children.map(children, (child, index) => {
            return React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<CheckboxProps>, {
                  isSelectAll: isSelectAll && index === 0,
                  isSelectAllChild: isSelectAll && orientation === 'vertical' && index !== 0,
                })
              : child;
          })}
        </InlineControlGroup>
      </CheckboxContext.Provider>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };
