import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {TextProps} from '@twilio-paste/text';
import {Text} from '@twilio-paste/text';
import type {SiblingBoxProps} from '@twilio-paste/sibling-box';
import {SiblingBox} from '@twilio-paste/sibling-box';
import type {LabelProps} from '@twilio-paste/label';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import type {BoxProps} from '@twilio-paste/box';

export interface BaseRadioCheckboxControlProps extends SiblingBoxProps, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
}
const BaseRadioCheckboxControl = React.forwardRef<HTMLSpanElement, BaseRadioCheckboxControlProps>(
  ({children, disabled, element = 'BASE_RADIO_CHECKBOX_CONTROL', ...props}, ref) => {
    return (
      <SiblingBox
        as="span"
        ref={ref}
        display="flex"
        element={element}
        backgroundColor="colorBackgroundBody"
        borderColor="colorBorder"
        borderStyle="solid"
        borderWidth="borderWidth10"
        height="sizeSquare50"
        marginX="space20"
        marginY="space10"
        width="sizeSquare50"
        color="colorTextWeakest"
        _hoverSibling={{
          borderColor: 'colorBorderPrimaryStronger',
          color: 'colorTextWeakest',
        }}
        _focusSibling={{
          borderColor: 'colorBorderPrimaryStronger',
          boxShadow: 'shadowFocus',
          color: 'colorTextWeakest',
        }}
        _activeSibling={
          !disabled
            ? {
                borderColor: 'colorBorderPrimaryStronger',
                backgroundColor: 'colorBackgroundPrimaryStronger',
                color: 'colorTextWeakest',
              }
            : undefined
        }
        _checkedSibling={{
          borderColor: 'colorBorderPrimary',
          backgroundColor: 'colorBackgroundPrimary',
          color: 'colorTextInverse',
        }}
        _disabledSibling={{
          borderColor: 'colorBorderWeaker',
        }}
        _invalidSibling={{
          borderColor: 'colorBorderError',
        }}
        _invalidAndHoverSibling={{
          borderColor: 'colorBorderErrorStronger',
        }}
        _checkedAndHoverSibling={{
          borderColor: 'colorBorderPrimaryStronger',
          backgroundColor: 'colorBackgroundPrimaryStronger',
          color: 'colorTextWeakest',
        }}
        _checkedAndFocusSibling={{
          borderColor: 'colorBorderPrimaryStronger',
          backgroundColor: 'colorBackgroundPrimaryStronger',
          color: 'colorTextWeakest',
        }}
        _checkedAndActiveSibling={
          !disabled
            ? {
                borderColor: 'colorBorderPrimaryStronger',
                backgroundColor: 'colorBackgroundPrimaryStronger',
              }
            : undefined
        }
        _checkedAndDisabledSibling={{
          borderColor: 'colorBorderWeaker',
          backgroundColor: 'colorBackgroundStrong',
          color: 'colorTextWeakest',
        }}
        _checkedAndInvalidSibling={{
          borderColor: 'colorBorderError',
          backgroundColor: 'colorBackgroundError',
          color: 'colorTextInverse',
        }}
        _checkedAndInvalidAndHoverSibling={{
          borderColor: 'colorBorderErrorStronger',
          backgroundColor: 'colorBackgroundErrorStronger',
        }}
        {...props}
      >
        {children}
      </SiblingBox>
    );
  }
);
BaseRadioCheckboxControl.displayName = 'BaseRadioCheckboxControl';
BaseRadioCheckboxControl.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export interface BaseRadioCheckboxLabelProps extends LabelProps {
  children: NonNullable<React.ReactNode>;
}
const BaseRadioCheckboxLabel = React.forwardRef<HTMLLabelElement, BaseRadioCheckboxLabelProps>(
  ({children, ...props}, ref) => {
    return (
      <Label {...props} marginBottom="space0" ref={ref}>
        <Box as="span" display="flex">
          {children}
        </Box>
      </Label>
    );
  }
);
BaseRadioCheckboxLabel.displayName = 'BaseRadioCheckboxLabel';
BaseRadioCheckboxLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export interface BaseRadioCheckboxLabelTextProps extends Omit<TextProps, 'as'>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
}
const BaseRadioCheckboxLabelText = React.forwardRef<HTMLSpanElement, BaseRadioCheckboxLabelTextProps>(
  ({children, element = 'BASE_RADIO_CHECKBOX_LABEL_TEXT', ...props}, ref) => {
    return (
      <Text
        as="span"
        color="currentColor"
        marginLeft="space20"
        fontWeight="fontWeightMedium"
        element={element}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);
BaseRadioCheckboxLabelText.displayName = 'BaseRadioCheckboxLabelText';
BaseRadioCheckboxLabelText.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export interface BaseRadioCheckboxHelpTextProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  helpTextId: string;
}
const BaseRadioCheckboxHelpText = React.forwardRef<HTMLSpanElement, BaseRadioCheckboxHelpTextProps>(
  ({children, helpTextId, element = 'BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER'}, ref) => {
    return (
      <Box as="span" display="block" element={element} marginLeft="space80" ref={ref}>
        <HelpText id={helpTextId} marginTop="space0">
          {children}
        </HelpText>
      </Box>
    );
  }
);
BaseRadioCheckboxHelpText.displayName = 'BaseRadioCheckboxHelpText';
BaseRadioCheckboxHelpText.propTypes = {
  children: PropTypes.node.isRequired,
  helpTextId: PropTypes.string.isRequired,
  element: PropTypes.string,
};

export {BaseRadioCheckboxHelpText, BaseRadioCheckboxControl, BaseRadioCheckboxLabel, BaseRadioCheckboxLabelText};
