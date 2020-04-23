import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {Text, TextProps} from '@twilio-paste/text';
import {FormLabel, FormLabelProps} from '../FormLabel';
import {FormHelpText} from '../FormHelpText';
import {SiblingBox, SiblingBoxProps} from './SiblingBox';

export interface BaseRadioCheckboxControlProps extends SiblingBoxProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
}
const BaseRadioCheckboxControl: React.FC<BaseRadioCheckboxControlProps> = ({children, disabled, ...props}) => {
  return (
    <SiblingBox
      as="span"
      display="flex"
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderInput"
      borderStyle="solid"
      borderWidth="borderWidth10"
      height="sizeSquare50"
      margin="space20"
      width="sizeSquare50"
      _hoverSibling={{
        borderColor: 'colorBorderPrimary',
      }}
      _focusSibling={{
        borderColor: 'colorBorderPrimaryDarker',
        boxShadow: 'shadowFocus',
      }}
      _activeSibling={
        !disabled
          ? {
              borderColor: 'colorBorderPrimaryDarker',
              backgroundColor: 'colorBackgroundPrimaryDarker',
            }
          : undefined
      }
      _checkedSibling={{
        borderColor: 'colorBorderPrimary',
        backgroundColor: 'colorBackgroundPrimary',
      }}
      _disabledSibling={{
        borderColor: 'colorBorder',
      }}
      _invalidSibling={{
        borderColor: 'colorBorderError',
      }}
      _checkedAndFocusSibling={{
        borderColor: 'colorBorderPrimaryDark',
        backgroundColor: 'colorBackgroundPrimaryDark',
      }}
      _checkedAndActiveSibling={
        !disabled
          ? {
              borderColor: 'colorBorderPrimary',
              backgroundColor: 'colorBackgroundPrimary',
            }
          : undefined
      }
      _checkedAndDisabledSibling={{
        borderColor: 'colorBorder',
        backgroundColor: 'colorBackgroundDark',
      }}
      _checkedAndInvalidSibling={{
        borderColor: 'colorBorderError',
        backgroundColor: 'colorBackgroundError',
      }}
      {...props}
    >
      {children}
    </SiblingBox>
  );
};
BaseRadioCheckboxControl.displayName = 'BaseRadioCheckboxControl';
if (process.env.NODE_ENV === 'development') {
  BaseRadioCheckboxControl.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
  };
}

export interface BaseRadioCheckboxLabelProps extends FormLabelProps {
  children: NonNullable<React.ReactNode>;
}
const BaseRadioCheckboxLabel: React.FC<BaseRadioCheckboxLabelProps> = ({children, ...props}) => {
  return (
    <FormLabel {...props} marginBottom="space0">
      <Box as="span" display="flex">
        {children}
      </Box>
    </FormLabel>
  );
};
BaseRadioCheckboxLabel.displayName = 'BaseRadioCheckboxLabel';
if (process.env.NODE_ENV === 'development') {
  BaseRadioCheckboxLabel.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export interface BaseRadioCheckboxLabelTextProps extends Omit<TextProps, 'as'> {
  children: NonNullable<React.ReactNode>;
}
const BaseRadioCheckboxLabelText: React.FC<BaseRadioCheckboxLabelTextProps> = ({children, ...props}) => {
  return (
    <Text as="span" color="currentColor" marginLeft="space20" fontWeight="fontWeightNormal" {...props}>
      {children}
    </Text>
  );
};
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
const BaseRadioCheckboxHelpText: React.FC<BaseRadioCheckboxHelpTextProps> = ({children, helpTextId}) => {
  return (
    <Box as="span" display="block" marginLeft="space80">
      <FormHelpText id={helpTextId} marginTop="space0">
        {children}
      </FormHelpText>
    </Box>
  );
};
BaseRadioCheckboxHelpText.displayName = 'BaseRadioCheckboxHelpText';
if (process.env.NODE_ENV === 'development') {
  BaseRadioCheckboxHelpText.propTypes = {
    children: PropTypes.node.isRequired,
    helpTextId: PropTypes.string.isRequired,
  };
}

export {BaseRadioCheckboxHelpText, BaseRadioCheckboxControl, BaseRadioCheckboxLabel, BaseRadioCheckboxLabelText};
