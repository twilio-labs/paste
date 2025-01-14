import { secureExternalLink } from "@twilio-paste/anchor";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { InPageNavigationContext } from "./InPageNavigationContext";

const BASE_STYLES: BoxStyleProps = {
  color: "colorTextWeak",
  minWidth: "sizeSquare130",
  textAlign: "center",
  fontSize: "fontSize30",
  fontWeight: "fontWeightMedium",
  overflow: "hidden",
  position: "relative",
  textOverflow: "ellipsis",
  transition: "border-color 100ms ease, color 100ms ease",
  whiteSpace: "nowrap",
  textDecoration: "none",
  _hover: {
    borderBottomColor: "colorBorderPrimaryStronger",
    borderLeftColor: "colorBorderPrimaryStronger",
    color: "colorTextLinkStronger",
  },
  _focus: {
    boxShadow: "shadowFocusInset",
    outline: "none",
    borderRadius: "borderRadius20",
  },
};

const HORIZONTAL_BASE_STYLES: BoxStyleProps = {
  ...BASE_STYLES,
  width: "100%",
  display: "block",
  borderBottomColor: "transparent",
  borderBottomStyle: "solid",
  borderBottomWidth: "borderWidth10",
  paddingBottom: "space40",
  paddingLeft: "space30",
  paddingRight: "space30",
  paddingTop: "space40",
  borderTopLeftRadius: "borderRadius30",
  borderTopRightRadius: "borderRadius30",
  _focus: {
    borderTopLeftRadius: "borderRadius30",
    borderTopRightRadius: "borderRadius30",
    boxShadow: "shadowFocusInset",
    outline: "none",
  },
};
const VERTICAL_BASE_STYLES: BoxStyleProps = {
  ...BASE_STYLES,
  width: "auto",
  display: "block",
  borderLeftColor: "transparent",
  borderLeftStyle: "solid",
  borderLeftWidth: "borderWidth10",
  paddingBottom: "space30",
  paddingTop: "space30",
  paddingLeft: "space50",
  paddingRight: "space50",
  borderBottomRightRadius: "borderRadius30",
  borderTopRightRadius: "borderRadius30",
  whiteSpace: "break-spaces",
  _focus: {
    boxShadow: "shadowFocusInset",
    outline: "none",
    borderTopRightRadius: "borderRadius30",
    borderBottomRightRadius: "borderRadius30",
  },
};

const CURRENT_PAGE_STYLES: BoxStyleProps = {
  borderBottomColor: "colorBorderPrimary",
  borderLeftColor: "colorBorderPrimary",
  color: "colorTextLink",
  _focus: {
    borderBottom: "none",
    boxShadow: "shadowFocusInset",
    outline: "none",
  },
};

const INVERSE_STYLES: BoxStyleProps = {
  color: "colorTextInverseWeaker",
  _focus: {
    boxShadow: "shadowFocusInverseInset",
    outline: "none",
  },
  _hover: {
    borderBottomColor: "colorBorderInverse",
    borderLeftColor: "colorBorderInverse",
    color: "colorTextInverseWeaker",
  },
};

const INVERSE_CURRENT_PAGE_STYLES: BoxStyleProps = {
  borderBottomColor: "colorBorderInverseStrong",
  borderLeftColor: "colorBorderInverseStrong",
  color: "colorTextInverse",
  _focus: {
    borderBottom: "none",
    boxShadow: "shadowFocusInverseInset",
    outline: "none",
  },
};

export interface InPageNavigationItemProps extends HTMLPasteProps<"a"> {
  /**
   * Sets the InPageNavigationItem as the current page and adds `aria-current="page"`
   *
   * @default false
   * @type {boolean}
   * @memberof InPageNavigationItemProps
   */
  currentPage?: boolean;
  children: NonNullable<React.ReactNode>;
  /**
   * A URL to route to.
   *
   * @type {string}
   * @memberof InPageNavigationItemProps
   */
  href: string;
  /**
   * Accessible title for when the InPageNavigationItem is truncated. Usage is strongly recommended on all InPageNavigationItems, but especially when the text might be truncated (in vertical InPageNavigations or horizontal ones with more than 3 items).
   *
   * @type {string}
   * @memberof InPageNavigationItemProps
   */
  title?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'IN_PAGE_NAVIGATION_ITEM'
   * @type {BoxProps['element']}
   * @memberof InPageNavigationItemProps
   */
  element?: BoxProps["element"];
}

const InPageNavigationItem = React.forwardRef<HTMLLIElement, InPageNavigationItemProps>(
  ({ element = "IN_PAGE_NAVIGATION_ITEM", currentPage = false, href, children, title, ...props }, ref) => {
    const { variant, orientation } = React.useContext(InPageNavigationContext);
    const isFullWidth = variant === "fullWidth" || variant === "inverse_fullWidth";
    const isInverse = variant === "inverse" || variant === "inverse_fullWidth";
    let currentPageStyles = {};

    if (currentPage) {
      if (isInverse) currentPageStyles = INVERSE_CURRENT_PAGE_STYLES;
      else currentPageStyles = CURRENT_PAGE_STYLES;
    }

    if (orientation === "vertical") {
      return (
        <Box as="li" ref={ref} element={element} minWidth="size0" marginBottom="space20">
          <Box
            {...secureExternalLink(href)}
            {...safelySpreadBoxProps(props)}
            {...VERTICAL_BASE_STYLES}
            {...(isInverse ? INVERSE_STYLES : {})}
            {...currentPageStyles}
            as="a"
            ref={ref}
            element={`${element}_ANCHOR`}
            aria-current={currentPage ? "page" : undefined}
            href={href}
            width="100%"
            textAlign="start"
            title={title}
          >
            {children}
          </Box>
        </Box>
      );
    }

    return (
      <Box
        as="li"
        ref={ref}
        element={element}
        display="flex"
        flexBasis={isFullWidth ? "100%" : undefined}
        flexGrow={isFullWidth ? 1 : undefined}
        flexShrink={isFullWidth ? 1 : undefined}
        minWidth="size0"
      >
        <Box
          {...secureExternalLink(href)}
          {...safelySpreadBoxProps(props)}
          {...HORIZONTAL_BASE_STYLES}
          {...(isInverse ? INVERSE_STYLES : {})}
          {...currentPageStyles}
          as="a"
          ref={ref}
          element={`${element}_ANCHOR`}
          aria-current={currentPage ? "page" : undefined}
          href={href}
          title={title}
        >
          {children}
        </Box>
      </Box>
    );
  },
);

InPageNavigationItem.displayName = "InPageNavigationItem";

export { InPageNavigationItem };
