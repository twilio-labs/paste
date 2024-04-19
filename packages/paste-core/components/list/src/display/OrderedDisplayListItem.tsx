import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import * as React from "react";

import type { OrderedDisplayListItemProps, OrderedDisplayListVariants } from "../types";
import { OrderedDisplayListContext } from "./OrderedDisplayListContext";

/* Used to size the list item counter */
const VariantStyles = {
  heading20: {
    before: {
      width: "sizeSquare100",
      fontSize: "fontSize70",
      lineHeight: "lineHeight70",
    },
    element: {
      fontSize: "fontSize40",
      lineHeight: "lineHeight40",
    },
  },
  heading30: {
    before: {
      width: "sizeSquare80",
      fontSize: "fontSize60",
      lineHeight: "lineHeight60",
    },
    element: {
      fontSize: "fontSize40",
      lineHeight: "lineHeight40",
    },
  },
  heading40: {
    before: {
      width: "sizeSquare70",
      fontSize: "fontSize40",
      lineHeight: "lineHeight40",
    },
    element: {
      fontSize: "fontSize30",
      lineHeight: "lineHeight30",
    },
  },
  heading50: {
    before: {
      width: "sizeSquare60",
      fontSize: "fontSize30",
      lineHeight: "lineHeight30",
    },
    element: {
      fontSize: "fontSize30",
      lineHeight: "lineHeight30",
    },
  },
  heading60: {
    before: {
      width: "sizeSquare60",
      fontSize: "fontSize20",
      lineHeight: "lineHeight20",
    },
    element: {
      fontSize: "fontSize20",
      lineHeight: "lineHeight20",
    },
  },
};

const StyledOrderedListItem = styled(Box)(({ variant }: { variant: OrderedDisplayListVariants }) => {
  const variantStyles = VariantStyles[variant];

  return css({
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    alignItems: "start",
    gap: "space70",
    ...variantStyles.element,

    "&:before": {
      display: "inline-block",
      position: "relative",
      counterIncrement: "list-counter",
      content: "counter(list-counter)",
      color: "colorTextWeak",
      textAlign: "right",
      fontWeight: "fontWeightSemibold",
      ...variantStyles.before,
    },
  });
});

export const OrderedDisplayListItem = React.forwardRef<HTMLLIElement, OrderedDisplayListItemProps>(
  ({ children, element = "ORDERED_DISPLAY_LIST_ITEM", ...props }, ref) => {
    const { variant } = React.useContext(OrderedDisplayListContext);

    /*
     * We need to wrap children in a div in order to apply the grid styles correctly when there are n children.
     * The div keeps children's count to 1.
     */
    return (
      <StyledOrderedListItem {...safelySpreadBoxProps(props)} as="li" element={element} variant={variant} ref={ref}>
        <div>{children}</div>
      </StyledOrderedListItem>
    );
  },
);
OrderedDisplayListItem.displayName = "OrderedDisplayListItem";
