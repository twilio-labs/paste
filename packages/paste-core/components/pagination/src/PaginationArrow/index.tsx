import * as React from "react";

import type { PaginationArrowProps } from "../types";
import { handleLinkValidation } from "../utils";
import { PaginationBackArrow } from "./PaginationBackArrow";
import { PaginationForwardArrow } from "./PaginationForwardArrow";

const PaginationArrow = React.forwardRef<HTMLButtonElement, PaginationArrowProps>(
  (
    {
      as = "button",
      element = "PAGINATION_ARROW",
      disabled,
      href,
      isHovered,
      label,
      variant = "back",
      visibleLabel,
      ...props
    },
    ref,
  ) => {
    const [hovered, setHovered] = React.useState(false);
    const [focused, setFocused] = React.useState(false);
    handleLinkValidation({ as, href });
    return variant === "back" ? (
      <PaginationBackArrow
        {...props}
        element={element}
        ref={ref}
        as={as}
        disabled={disabled}
        href={href}
        isFocused={focused}
        isHovered={hovered}
        label={label}
        variant={variant}
        visibleLabel={visibleLabel}
        onMouseEnter={(event) => {
          if (typeof props.onMouseEnter === "function") {
            props.onMouseEnter(event);
          }
          setHovered(true);
        }}
        onMouseLeave={(event) => {
          if (typeof props.onMouseLeave === "function") {
            props.onMouseLeave(event);
          }
          setHovered(false);
        }}
        onFocus={(event) => {
          if (typeof props.onFocus === "function") {
            props.onFocus(event);
          }
          setFocused(true);
        }}
        onBlur={(event) => {
          if (typeof props.onBlur === "function") {
            props.onBlur(event);
          }
          setFocused(false);
        }}
      />
    ) : (
      <PaginationForwardArrow
        {...props}
        element={element}
        ref={ref}
        as={as}
        disabled={disabled}
        href={href}
        isFocused={focused}
        isHovered={hovered}
        label={label}
        variant={variant}
        visibleLabel={visibleLabel}
        onMouseEnter={(event) => {
          if (typeof props.onMouseEnter === "function") {
            props.onMouseEnter(event);
          }
          setHovered(true);
        }}
        onMouseLeave={(event) => {
          if (typeof props.onMouseLeave === "function") {
            props.onMouseLeave(event);
          }
          setHovered(false);
        }}
        onFocus={(event) => {
          if (typeof props.onFocus === "function") {
            props.onFocus(event);
          }
          setFocused(true);
        }}
        onBlur={(event) => {
          if (typeof props.onBlur === "function") {
            props.onBlur(event);
          }
          setFocused(false);
        }}
      />
    );
  },
);

PaginationArrow.displayName = "PaginationArrow";

export { PaginationArrow };
