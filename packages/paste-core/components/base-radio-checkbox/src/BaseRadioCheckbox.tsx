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

export interface BaseRadioCheckboxControlProps extends SiblingBoxProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
}
const BaseRadioCheckboxControl = React.forwardRef<HTMLSpanElement, BaseRadioCheckboxControlProps>(
  ({children, disabled, ...props}, ref) => {
    return (
      <SiblingBox
        as="span"
        ref={ref}
        display="flex"
        backgroundColor="colorBackgroundBody"
        borderColor="colorBorder"
        borderStyle="solid"
        borderWidth="borderWidth10"
        height="sizeSquare50"
        marginX="space20"
        marginY="space10"
        width="sizeSquare50"
        _hoverSibling={{
          borderColor: 'colorBorderPrimaryStrong',
        }}
        _focusSibling={{
          borderColor: 'colorBorderPrimaryStrong',
          boxShadow: 'shadowFocus',
        }}
        _activeSibling={
          !disabled
            ? {
                borderColor: 'colorBorderPrimaryStronger',
                backgroundColor: 'colorBackgroundPrimaryStronger',
              }
            : undefined
        }
        _checkedSibling={{
          borderColor: 'colorBorderPrimary',
          backgroundColor: 'colorBackgroundPrimary',
        }}
        _disabledSibling={{
          borderColor: 'colorBorderWeaker',
        }}
        _invalidSibling={{
          borderColor: 'colorBorderError',
        }}
        _invalidAndHoverSibling={{
          borderColor: 'colorBorderErrorStrong',
        }}
        _checkedAndHoverSibling={{
          borderColor: 'colorBorderPrimaryStronger',
          backgroundColor: 'colorBackgroundPrimaryStrong',
        }}
        _checkedAndFocusSibling={{
          borderColor: 'colorBorderPrimaryStronger',
          backgroundColor: 'colorBackgroundPrimaryStrong',
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
        }}
        _checkedAndInvalidSibling={{
          borderColor: 'colorBorderError',
          backgroundColor: 'colorBackgroundError',
        }}
        _checkedAndInvalidAndHoverSibling={{
          borderColor: 'colorBorderErrorStrong',
          backgroundColor: 'colorBackgroundErrorStrong',
        }}
        {...props}
      >
        {children}
      </SiblingBox>
    );
  }
);
BaseRadioCheckboxControl.displayName = 'BaseRadioCheckboxControl';
if (process.env.NODE_ENV === 'development') {
  BaseRadioCheckboxControl.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
  };
}

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
if (process.env.NODE_ENV === 'development') {
  BaseRadioCheckboxLabel.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export interface BaseRadioCheckboxLabelTextProps extends Omit<TextProps, 'as'> {
  children: NonNullable<React.ReactNode>;
}
const BaseRadioCheckboxLabelText = React.forwardRef<HTMLSpanElement, BaseRadioCheckboxLabelTextProps>(
  ({children, ...props}, ref) => {
    return (
      <Text as="span" color="currentColor" marginLeft="space20" fontWeight="fontWeightNormal" ref={ref} {...props}>
        {children}
      </Text>
    );
  }
);
BaseRadioCheckboxLabelText.displayName = 'BaseRadioCheckboxLabelText';
if (process.env.NODE_ENV === 'development') {
  BaseRadioCheckboxLabelText.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export interface BaseRadioCheckboxHelpTextProps {
  children: NonNullable<React.ReactNode>;
  helpTextId: string;
}
const BaseRadioCheckboxHelpText = React.forwardRef<HTMLSpanElement, BaseRadioCheckboxHelpTextProps>(
  ({children, helpTextId}, ref) => {
    return (
      <Box as="span" display="block" marginLeft="space80" ref={ref}>
        <HelpText id={helpTextId} marginTop="space0">
          {children}
        </HelpText>
      </Box>
    );
  }
);
BaseRadioCheckboxHelpText.displayName = 'BaseRadioCheckboxHelpText';
if (process.env.NODE_ENV === 'development') {
  BaseRadioCheckboxHelpText.propTypes = {
    children: PropTypes.node.isRequired,
    helpTextId: PropTypes.string.isRequired,
  };
}

export {BaseRadioCheckboxHelpText, BaseRadioCheckboxControl, BaseRadioCheckboxLabel, BaseRadioCheckboxLabelText};
