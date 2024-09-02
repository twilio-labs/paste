import * as React from "react";

import type { Orientation } from "./types";

interface TimelineState {
  orientation: Orientation;
}

export const TimelineContext = React.createContext<TimelineState>({} as TimelineState);

export const TimelineGroupContext = React.createContext<boolean>(false);
