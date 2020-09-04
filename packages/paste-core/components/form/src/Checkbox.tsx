import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from 'react-uid';
import {styled} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {BackgroundColorOptions, SpaceOptions} from '@twilio-paste/style-props';
import {CheckboxCheckIcon} from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import {MinusIcon} from '@twilio-paste/icons/esm/MinusIcon';
import {
  BaseRadioCheckboxControl,
  BaseRadioCheckboxLabel,
  BaseRadioCheckboxLabelText,
  BaseRadioCheckboxHelpText,
} from './shared/BaseRadioCheckbox';

/* eslint-disable emotion/syntax-preference */
const HiddenCheckbox = styled.input({
  border: '0',
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  width: '1px',
});
/* eslint-enable */

const CheckboxIcon: React.FC<{
  indeterminate: boolean | undefined;
  disabled: boolean | undefined;
  checked: boolean | undefined;
}> = ({disabled, checked, indeterminate}) => {
  const color = disabled && (checked || indeterminate) ? 'colorTextInverse' : 'colorTextInverse';

  if (indeterminate) {
    return <MinusIcon decorative color={color} />;
  }
  return <CheckboxCheckIcon hidden={!checked} decorative color={color} />;
};

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: NonNullable<React.ReactNode>;
  hasError?: boolean;
  helpText?: string | React.ReactNode;
  id: string;
  indeterminate?: boolean;
  isSelectAll?: boolean;
  isSelectAllChild?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {id, checked, children, helpText, disabled, hasError, indeterminate, isSelectAllChild, isSelectAll, ...props},
    ref
  ) => {
    const helpTextId = useUID();

    let paddingLeft: SpaceOptions | null = null;
    let checkboxBackground: BackgroundColorOptions | null = null;

    if (isSelectAll) {
      paddingLeft = 'space20';

      if (checked || indeterminate) {
        checkboxBackground = 'colorBackgroundPrimaryLightest';
      } else if (!disabled) {
        checkboxBackground = 'colorBackground';
      }
    }
    if (isSelectAllChild) {
      paddingLeft = 'space30';
    }

    return (
      <Box
        backgroundColor={checkboxBackground}
        borderRadius={isSelectAll ? 'borderRadius10' : null}
        display="inline-flex"
        flexDirection="column"
        padding={isSelectAll ? 'space30' : null}
        paddingBottom={isSelectAll ? 'space20' : null}
        paddingLeft={paddingLeft}
        paddingRight={isSelectAllChild ? 'space30' : null}
        paddingTop={isSelectAll ? 'space20' : null}
      >
        <HiddenCheckbox
          {...props}
          aria-describedby={helpTextId}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-invalid={hasError}
          checked={checked}
          disabled={disabled}
          id={id}
          ref={ref}
          type="checkbox"
        />
        <BaseRadioCheckboxLabel disabled={disabled} htmlFor={id}>
          <BaseRadioCheckboxControl
            alignItems="center"
            borderRadius="borderRadius10"
            disabled={disabled}
            position="relative"
          >
            <CheckboxIcon checked={checked} disabled={disabled} indeterminate={indeterminate} />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText fontWeight={isSelectAll ? null : 'fontWeightNormal'}>
            {children}
          </BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        {helpText && <BaseRadioCheckboxHelpText helpTextId={helpTextId}>{helpText}</BaseRadioCheckboxHelpText>}
      </Box>
    );
  }
);
Checkbox.displayName = 'Checkbox';

if (process.env.NODE_ENV === 'development') {
  Checkbox.propTypes = {
    children: PropTypes.node.isRequired,
    hasError: PropTypes.bool,
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    id: PropTypes.string.isRequired,
    indeterminate: PropTypes.bool,
    isSelectAll: PropTypes.bool,
    isSelectAllChild: PropTypes.bool,
    value: PropTypes.string.isRequired,
  };
}

export {Checkbox};
