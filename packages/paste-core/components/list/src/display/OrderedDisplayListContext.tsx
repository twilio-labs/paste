import * as React from "react";

import type { OrderedDisplayListVariants } from "../types";

interface OrderedDisplayListState {
  variant: OrderedDisplayListVariants;
}

export const OrderedDisplayListContext = React.createContext<OrderedDisplayListState>({ variant: "heading30" });
