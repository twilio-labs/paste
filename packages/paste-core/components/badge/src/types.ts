import type {ReactNode} from 'react';
import {ButtonProps} from '@twilio-paste/button';

export type BadgeVariants = 'info' | 'default' | 'warning' | 'error' | 'success' | 'new';
export type BadgeBaseElements = 'button' | 'span' | 'a';
export interface BadgeProps extends Omit<ButtonProps, 'variant' | 'as'> {
  variant: BadgeVariants;
  children: NonNullable<ReactNode>;
  as?: BadgeBaseElements;
}
