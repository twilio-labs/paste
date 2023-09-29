import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";

export type AsTags = "a" | "button";
export type Variants = "back" | "forward";

type Element = BoxElementProps["element"];

export interface PaginationProps extends HTMLPasteProps<"nav"> {
  label: string;
  element?: Element;
  children: React.ReactNode;
}

export interface PaginationItemsProps extends HTMLPasteProps<"ul"> {
  children: React.ReactNode;
  element?: Element;
}

export interface PaginationLabelProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  element?: Element;
}

export interface PaginationButtonProps extends HTMLPasteProps<"button"> {
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

export interface PaginationArrowButtonProps extends HTMLPasteProps<"button"> {
  as?: AsTags;
  disabled?: boolean;
  visibleLabel?: string;
  element?: Element;
}

export interface PaginationNumbersProps extends HTMLPasteProps<"ul"> {
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

export interface PaginationEllipsisProps extends HTMLPasteProps<"span"> {
  label: string;
  element?: Element;
}
