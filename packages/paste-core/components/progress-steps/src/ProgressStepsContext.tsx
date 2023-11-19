import * as React from "react";

import type { Orientation } from "./types";

interface ProgressStepsState {
  orientation: Orientation;
}

export const ProgressStepsContext = React.createContext<ProgressStepsState>({} as ProgressStepsState);
