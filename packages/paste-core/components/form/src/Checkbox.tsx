import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from 'react-uid';
import {styled} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {BackgroundColorOptions, SpaceOptions} from '@twilio-paste/style-props';
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

    let checkboxBackground: BackgroundColorOptions | null = null;
    if (isSelectAll) checkboxBackground = 'colorBackground';
    if ((isSelectAll && checked) || (isSelectAll && indeterminate))
      checkboxBackground = 'colorBackgroundPrimaryLightest';

    let paddingLeft: SpaceOptions | null = isSelectAll ? 'space20' : null;
    if (isSelectAllChild) paddingLeft = 'space30';

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
            display="flex"
            position="relative"
            type="checkbox"
          >
            <Box
              alignItems="center"
              as="span"
              display="flex"
              height={!indeterminate ? 'sizeSquare25' : undefined}
              position="absolute"
              top={!indeterminate ? '3px' : undefined}
              transform={!indeterminate ? 'rotate(-45deg)' : undefined}
              width="sizeSquare30"
              _before={
                !indeterminate
                  ? {
                      borderColor: disabled && checked ? 'colorBorderDark' : 'colorBorderInverse',
                      borderRadius: 'borderRadius10',
                      borderStyle: 'solid',
                      borderWidth: 'borderWidth10',
                      bottom: '0',
                      content: '""',
                      display: 'block',
                      height: 'sizeSquare25',
                      position: 'absolute',
                      width: 'size0',
                    }
                  : undefined
              }
              _after={{
                borderColor: disabled && checked ? 'colorBorderDark' : 'colorBorderInverse',
                borderRadius: 'borderRadius10',
                borderStyle: 'solid',
                borderWidth: 'borderWidth10',
                bottom: '0',
                content: '""',
                display: 'block',
                height: 'size0',
                position: !indeterminate ? 'absolute' : undefined,
                width: 'sizeSquare30',
              }}
            />
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
