import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";

export type AsTags = "a" | "button";
export type Variants = "back" | "forward";

type Element = BoxElementProps["element"];

export interface PaginationProps extends HTMLPasteProps<"nav"> {
  /**
   * Accessible label for Pagination, used as the aria-label.
   *
   * @default 'PAGINATION'
   * @type {BoxProps['element']}
   * @memberof PaginationProps
   */
  label: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PAGINATION'
   * @type {BoxProps['element']}
   * @memberof PaginationProps
   */
  element?: Element;
  children: React.ReactNode;
}

export interface PaginationItemsProps extends HTMLPasteProps<"ul"> {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PAGINATION_ITEMS'
   * @type {BoxProps['element']}
   * @memberof PaginationItemsProps
   */
  element?: Element;
}

export interface PaginationLabelProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PAGINATION_LABEL'
   * @type {BoxProps['element']}
   * @memberof PaginationLabelProps
   */
  element?: Element;
}

export interface PaginationButtonProps extends HTMLPasteProps<"button"> {
  as?: AsTags;
  href?: string;
}

export interface PaginationArrowProps extends PaginationButtonProps {
  /**
   *
   * @type {boolean}
   * @memberof PaginationArrowProps
   */
  disabled?: boolean;
  /**
   *
   * @default 'false'
   * @type {boolean}
   * @memberof PaginationArrowProps
   */
  isFocused?: boolean;
  /**
   *
   * @default 'false'
   * @type {boolean}
   * @memberof PaginationArrowProps
   */
  isHovered?: boolean;
  /**
   * Used as the title for the back or forward button icon.
   *
   * @default 'back'
   * @type {Variants}
   * @memberof PaginationArrowProps
   */
  label: string;
  /**
   * Visible text of the button or anchor.
   *
   * @default 'back'
   * @type {Variants}
   * @memberof PaginationArrowProps
   */
  variant: Variants;
  /**
   * Visible text of the button or anchor.
   *
   * @type {string}
   * @memberof PaginationArrowProps
   */
  visibleLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PAGINATION_ARROW'
   * @type {BoxProps['element']}
   * @memberof PaginationArrowProps
   */
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
  /**
   * Page label text used in `PaginationLabel`.
   *
   * @type {string}
   * @memberof PaginationNumbersProps
   */
  pageLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PAGINATION_NUMBERS'
   * @type {BoxProps['element']}
   * @memberof PaginationNumbersProps
   */
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
  /**
   * Applies the current page styles and aria-current property to the PaginationNumber.
   *
   * @type {boolean}
   * @memberof PaginationNumberProps
   */
  isCurrent?: boolean;
  /**
   * Accessible label for PaginationNumber, used as the aria-label.
   *
   * @type {string}
   * @memberof PaginationNumberProps
   */
  label: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PAGINATION_NUMBER'
   * @type {BoxProps['element']}
   * @memberof PaginationNumberProps
   */
  element?: Element;
}

export interface PaginationEllipsisProps extends HTMLPasteProps<"span"> {
  /**
   * Accessible label for PaginationEllipsis, used as the aria-label.
   *
   * @type {string}
   * @memberof PaginationEllipsisProps
   */
  label: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PAGINATION_ELLIPSIS'
   * @type {BoxProps['element']}
   * @memberof PaginationEllipsisProps
   */
  element?: Element;
}
