import type { DisclosurePrimitveStateReturn } from "@twilio-paste/disclosure-primitive";
import * as React from "react";

export interface SummaryDetailContextProps extends DisclosurePrimitveStateReturn {
  headerId: string | undefined;
}

export const SummaryDetailContext = React.createContext<SummaryDetailContextProps | undefined>(undefined);
