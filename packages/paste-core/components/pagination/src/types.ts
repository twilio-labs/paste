import type {BoxElementProps} from '@twilio-paste/box';

export type AsTags = 'a' | 'button';
export type Variants = 'back' | 'forward';

type Element = BoxElementProps['element'];

export interface PaginationProps extends React.HTMLAttributes<'nav'> {
  label: string;
  element?: Element;
  children: React.ReactNode;
}

export interface PaginationItemsProps extends React.HTMLAttributes<'ul'> {
  children: React.ReactNode;
  element?: Element;
}

export interface PaginationLabelProps extends React.HTMLAttributes<'div'> {
  children: React.ReactNode;
  element?: Element;
}

export interface PaginationButtonProps extends React.HTMLAttributes<'button'> {
  as?: AsTags;
  href?: string;
}

export interface PaginationArrowProps extends PaginationButtonProps {
  disabled?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  label: string;
  variant: Variants;
  visibleLabel?: string;
  element?: Element;
}

export interface PaginationArrowButtonProps extends React.HTMLAttributes<'button'> {
  as?: AsTags;
  disabled?: boolean;
  visibleLabel?: string;
  element?: Element;
}

export interface PaginationNumbersProps extends React.HTMLAttributes<'ul'> {
  children: React.ReactNode;
  pageLabel?: string;
  element?: Element;
}

export interface PaginationArrowIconWrapperProps {
  children: React.ReactNode;
  isFocused?: boolean;
  isHovered?: boolean;
  element?: Element;
}

export interface PaginationNumberProps extends PaginationButtonProps {
  children: React.ReactNode;
  isCurrent?: boolean;
  label: string;
  element?: Element;
}

export interface PaginationEllipsisProps extends React.HTMLAttributes<'span'> {
  label: string;
  element?: Element;
}
