import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from '@twilio-paste/uid-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {BackgroundColorOptions, SpaceOptions} from '@twilio-paste/style-props';
import {CheckboxCheckIcon} from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import {MinusIcon} from '@twilio-paste/icons/esm/MinusIcon';
import {
  BaseRadioCheckboxControl,
  BaseRadioCheckboxLabel,
  BaseRadioCheckboxLabelText,
  BaseRadioCheckboxHelpText,
} from '@twilio-paste/base-radio-checkbox';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {RequiredDot} from '@twilio-paste/label';
import {CheckboxContext} from './CheckboxContext';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  hasError?: boolean;
  helpText?: string | React.ReactNode;
  id?: string;
  indeterminate?: boolean;
  isSelectAll?: boolean;
  isSelectAllChild?: boolean;
  checked?: boolean;
}

type HiddenCheckboxProps = Pick<
  CheckboxProps,
  'checked' | 'element' | 'disabled' | 'id' | 'indeterminate' | 'name' | 'onChange' | 'required' | 'value'
> & {
  ref?: any | undefined;
};
const HiddenCheckbox = React.forwardRef<HTMLInputElement, HiddenCheckboxProps>((props, ref) => (
  <Box
    {...props}
    ref={ref}
    as="input"
    type="checkbox"
    size="size0"
    border="none"
    overflow="hidden"
    padding="space0"
    margin="space0"
    whiteSpace="nowrap"
    textTransform="none"
    position="absolute"
    clip="rect(0 0 0 0)"
  />
));

HiddenCheckbox.displayName = 'HiddenCheckbox';

const CheckboxIcon: React.FC<{
  indeterminate: boolean | undefined;
  disabled: boolean | undefined;
  checked: boolean | undefined;
  element: BoxProps['element'];
}> = ({checked, element, disabled, indeterminate}) => {
  const color = disabled && (checked || indeterminate) ? 'colorTextIcon' : 'colorTextWeakest';

  if (indeterminate) {
    return <MinusIcon element={element} decorative color={color} size="sizeIcon10" />;
  }
  return (
    <CheckboxCheckIcon
      element={element}
      hidden={!checked}
      display={!checked ? 'none' : 'block'}
      decorative
      color={color}
      size="sizeIcon10"
    />
  );
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      element = 'CHECKBOX',
      children,
      helpText,
      id,
      indeterminate,
      isSelectAll,
      isSelectAllChild,
      required,
      ...props
    },
    ref
  ) => {
    const helpTextId = useUID();
    const checkboxGroupContext = React.useContext(CheckboxContext);

    // Prioritizing direct props values over whatever CheckboxGroupContext passes down
    const disabled = props.disabled != null ? props.disabled : checkboxGroupContext.disabled;
    const name = props.name != null ? props.name : checkboxGroupContext.name;
    const hasError = props.hasError != null ? props.hasError : checkboxGroupContext.hasError;
    const handleChange = props.onChange != null ? props.onChange : checkboxGroupContext.onChange;

    let paddingLeft: SpaceOptions | null = null;
    let checkboxBackground: BackgroundColorOptions | null = null;

    if (isSelectAll) {
      paddingLeft = 'space20';

      if (checked || indeterminate) {
        checkboxBackground = 'colorBackgroundPrimaryWeakest';
      } else if (!disabled) {
        checkboxBackground = 'colorBackground';
      }
    }
    if (isSelectAllChild) {
      paddingLeft = 'space30';
    }

    return (
      <Box
        element={element}
        backgroundColor={checkboxBackground}
        borderRadius={isSelectAll ? 'borderRadius10' : null}
        display="inline-flex"
        position="relative"
        flexDirection="column"
        padding={isSelectAll ? 'space30' : null}
        paddingBottom={isSelectAll ? 'space20' : null}
        paddingLeft={paddingLeft}
        paddingRight={isSelectAllChild ? 'space30' : null}
        paddingTop={isSelectAll ? 'space20' : null}
      >
        <HiddenCheckbox
          {...safelySpreadBoxProps(props)}
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={handleChange}
          aria-describedby={helpTextId}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-invalid={hasError}
          id={id}
          required={required}
          ref={ref}
        />
        <BaseRadioCheckboxLabel disabled={disabled} htmlFor={id}>
          <BaseRadioCheckboxControl
            alignItems="center"
            borderRadius="borderRadius10"
            element={`${element}_CONTROL`}
            disabled={disabled}
            position="relative"
            type="checkbox"
          >
            <CheckboxIcon
              element={`${element}_ICON`}
              checked={checked}
              disabled={disabled}
              indeterminate={indeterminate}
            />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText
            element={`${element}_LABEL_TEXT`}
            fontWeight={isSelectAll ? null : 'fontWeightMedium'}
          >
            <MediaObject verticalAlign="top">
              {required && (
                <MediaFigure spacing="space20">
                  <RequiredDot />
                </MediaFigure>
              )}
              <MediaBody>{children}</MediaBody>
            </MediaObject>
          </BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        {helpText && (
          <BaseRadioCheckboxHelpText element={`${element}_HELP_TEXT_WRAPPER`} helpTextId={helpTextId}>
            {helpText}
          </BaseRadioCheckboxHelpText>
        )}
      </Box>
    );
  }
);
Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  isSelectAll: PropTypes.bool,
  isSelectAllChild: PropTypes.bool,
  element: PropTypes.string,
};

export {Checkbox};
