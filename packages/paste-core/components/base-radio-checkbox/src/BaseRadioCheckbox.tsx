import * as React from 'react';
import PropTypes from 'prop-types';
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
  applyHoverStyles?: boolean; // only used in Visual Picker
}
const BaseRadioCheckboxControl = React.forwardRef<HTMLSpanElement, BaseRadioCheckboxControlProps>(
  ({children, disabled, applyHoverStyles = false, element = 'BASE_RADIO_CHECKBOX_CONTROL', ...props}, ref) => {
    return (
      <SiblingBox
        as="span"
        ref={ref}
        display="flex"
        element={element}
        backgroundColor="colorBackgroundBody"
        borderColor={applyHoverStyles ? 'colorBorderPrimaryStronger' : 'colorBorder'}
        borderStyle="solid"
        borderWidth="borderWidth10"
        height="sizeSquare50"
        marginRight="space20"
        marginY="space10"
        width="sizeSquare50"
        color="colorTextWeakest"
        _hoverSibling={{
          borderColor: 'colorBorderPrimaryStronger',
          color: 'colorTextWeakest',
        }}
        _focusSibling={{
          borderColor: 'colorBorder',
          boxShadow: 'shadowFocus',
          color: 'colorTextInverse',
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
          backgroundColor: 'colorBackgroundStrong',
        }}
        _invalidSibling={{
          borderColor: 'colorBorderError',
        }}
        _invalidAndHoverSibling={{
          borderColor: 'colorBorderErrorStronger',
        }}
        _invalidAndDisabledSibling={{
          borderColor: 'colorBorderWeaker',
        }}
        _checkedAndHoverSibling={{
          borderColor: 'colorBorderPrimaryStronger',
          backgroundColor: 'colorBackgroundPrimaryStronger',
          color: 'colorTextWeakest',
        }}
        _checkedAndFocusSibling={{
          borderColor: 'colorBorderPrimary',
          backgroundColor: 'colorBackgroundPrimary',
          color: 'colorTextInverse',
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
          color: 'colorTextWeaker',
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
        _checkedAndInvalidAndDisabledSibling={{
          borderColor: 'colorBorderWeaker',
          backgroundColor: 'colorBackgroundStrong',
          color: 'colorTextWeaker',
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
      <Text as="span" color="currentColor" marginLeft="space20" element={element} ref={ref} {...props}>
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
      <Box as="span" display="block" element={element} marginLeft="space70" ref={ref}>
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
