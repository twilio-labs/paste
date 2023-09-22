import * as React from "react";

import type { Variants } from "./types";

interface InPageNavigationContextValue {
  variant?: Variants;
}

const InPageNavigationContext = React.createContext<InPageNavigationContextValue>({
  variant: "default",
});

export { InPageNavigationContext };
