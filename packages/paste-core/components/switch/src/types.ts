import type React from 'react';
import type {BoxProps} from '@twilio-paste/box';
import type {TextProps} from '@twilio-paste/text';

export interface SwitchContainerProps extends React.HTMLAttributes<HTMLLabelElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  helpText?: string | React.ReactNode;
  label?: string | React.ReactNode;
  required?: boolean;
}

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement>, Pick<BoxProps, 'element'> {
  switchId?: string;
  disabled?: boolean;
  on?: boolean;
  labelId?: string;
  onClick?: () => void;
}

export interface SwitchKnobProps extends Omit<SwitchContainerProps, 'on' | 'helpText' | 'children'> {
  disabled?: boolean;
  switchIsOn: boolean;
  isHovering: boolean;
  height: string;
}

export interface SwitchHelpTextProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  helpTextId: string;
}

export interface SwitchLabelTextProps extends Omit<TextProps, 'as'>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
}
