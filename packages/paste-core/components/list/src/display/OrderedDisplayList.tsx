import { Box } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import { safelySpreadTextProps } from "@twilio-paste/text";
import * as React from "react";

import type { OrderedDisplayListProps, OrderedDisplayListVariants } from "../types";
import { OrderedDisplayListContext } from "./OrderedDisplayListContext";

const GapStyles = {
  heading20: "space100",
  heading30: "space90",
  heading40: "space80",
  heading50: "space70",
  heading60: "space60",
};

const StyledOrderedList = styled(Box)(({ variant }: { variant: OrderedDisplayListVariants }) => {
  return css({
    counterReset: "list-counter",
    margin: "space0",
    padding: "space0",
    listStyle: "none",
    display: "grid",
    gap: GapStyles[variant],
  });
});

export const OrderedDisplayList = React.forwardRef<HTMLOListElement, OrderedDisplayListProps>(
  (
    {
      children,
      element = "ORDERED_DISPLAY_LIST",
      marginTop,
      marginBottom = "space70",
      variant = "heading30",
      ...props
    },
    ref,
  ) => {
    return (
      <OrderedDisplayListContext.Provider value={{ variant }}>
        <StyledOrderedList
          {...safelySpreadTextProps(props)}
          as="ol"
          element={element}
          marginTop={marginTop}
          marginBottom={marginBottom}
          ref={ref}
          variant={variant}
        >
          {children}
        </StyledOrderedList>
      </OrderedDisplayListContext.Provider>
    );
  },
);
OrderedDisplayList.displayName = "OrderedDisplayList";
