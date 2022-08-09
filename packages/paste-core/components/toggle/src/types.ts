import type React from 'react';
import type {BoxProps} from '@twilio-paste/box';
import type {TextProps} from '@twilio-paste/text';

export interface ToggleProps extends React.HTMLAttributes<HTMLDivElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  helpText?: string | React.ReactNode;
  id?: string;
  on?: boolean;
  onClick?: () => void;
  required?: boolean;
}

export interface ToggleKnobProps extends Omit<ToggleProps, 'on' | 'helpText' | 'children'> {
  toggleIsOn: boolean;
  isHovering: boolean;
}

export interface ToggleHelpTextProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  helpTextId: string;
}

export interface ToggleLabelTextProps extends Omit<TextProps, 'as'>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
}
