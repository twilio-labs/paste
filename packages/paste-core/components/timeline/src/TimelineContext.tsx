import * as React from "react";

import type { Orientation } from "./types";

interface TimelineState {
  orientation: Orientation;
}

export const TimelineContext = React.createContext<TimelineState>({} as TimelineState);
