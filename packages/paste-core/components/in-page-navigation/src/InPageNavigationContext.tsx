import * as React from "react";

import type { Variants } from "./types";

interface InPageNavigationContextValue {
  variant?: Variants;
  orientation?: "horizontal" | "vertical";
}

const InPageNavigationContext = React.createContext<InPageNavigationContextValue>({
  variant: "default",
  orientation: "horizontal",
});

export { InPageNavigationContext };
