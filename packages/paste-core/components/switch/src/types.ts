import type React from 'react';
import type {BoxProps} from '@twilio-paste/box';

export interface SwitchContainerProps extends React.HTMLAttributes<HTMLLabelElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  helpText?: string | React.ReactNode;
  label?: string | React.ReactNode;
  required?: boolean;
}

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement>, Pick<BoxProps, 'element'> {
  id?: string;
  disabled?: boolean;
  on?: boolean;
  labelId?: string;
  helpTextId?: string;
  onClick?: (evt?: any) => void;
}

export interface SwitchKnobProps extends Omit<SwitchContainerProps, 'on' | 'helpText' | 'children'> {
  disabled?: boolean;
  switchIsOn: boolean;
  isHovering: boolean;
  height: string;
}
