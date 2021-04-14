export type AsTags = 'a' | 'button';
export type Variants = 'back' | 'forward';

export interface PaginationProps extends React.HTMLAttributes<'nav'> {
  label: string;
  children: React.ReactNode;
}

export interface PaginationItemsProps extends React.HTMLAttributes<'ul'> {
  children: React.ReactNode;
}

export interface PaginationLabelProps extends React.HTMLAttributes<'div'> {
  children: React.ReactNode;
}

export interface PaginationButtonProps extends React.HTMLAttributes<'button'> {
  as?: AsTags;
  href?: string;
}

export interface PaginationArrowProps extends PaginationButtonProps {
  label: string;
  variant: Variants;
  visibleLabel?: string;
}

export interface PaginationArrowButtonProps extends React.HTMLAttributes<'button'> {
  as?: AsTags;
  visibleLabel?: string;
}

export interface PaginationNumbersProps extends React.HTMLAttributes<'ul'> {
  children: React.ReactNode;
  pageLabel?: string;
}

export interface PaginationNumberProps extends PaginationButtonProps {
  children: React.ReactNode;
  isCurrent?: boolean;
  label: string;
}

export interface PaginationEllipsisProps extends React.HTMLAttributes<'span'> {
  label: string;
}
