import * as React from 'react';
import PropTypes from 'prop-types';
import {InlineControlGroup} from '@twilio-paste/inline-control-group';
import type {InlineControlGroupProps} from '@twilio-paste/inline-control-group';

import {SwitchContext} from './SwitchContext';

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
    ref
  ) => {
    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event.target.checked);
        }
      },
      [onChange]
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
  }
);

SwitchGroup.displayName = 'SwitchGroup';

if (process.env.NODE_ENV === 'development') {
  SwitchGroup.propTypes = {
    name: PropTypes.string.isRequired,
    element: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    errorText: PropTypes.string,
    helpText: PropTypes.string,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    i18nRequiredLabel: PropTypes.string,
  };
}

export {SwitchGroup};
