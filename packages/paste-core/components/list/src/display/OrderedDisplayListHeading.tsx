import { Heading } from "@twilio-paste/heading";
import * as React from "react";

import type { OrderedDisplayListHeadingProps } from "../types";
import { OrderedDisplayListContext } from "./OrderedDisplayListContext";

export const OrderedDisplayListHeading = React.forwardRef<HTMLHeadingElement, OrderedDisplayListHeadingProps>(
  ({ children, element = "ORDERED_DISPLAY_LIST_HEADING", as = "div", ...props }, ref) => {
    const { variant } = React.useContext(OrderedDisplayListContext);

    return (
      <Heading {...props} ref={ref} as={as} variant={variant} element={element} marginBottom="space0">
        {children}
      </Heading>
    );
  },
);

OrderedDisplayListHeading.displayName = "OrderedDisplayListHeading";
