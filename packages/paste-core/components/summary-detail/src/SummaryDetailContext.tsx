import type { DisclosurePrimitveStateReturn } from "@twilio-paste/disclosure-primitive";
import * as React from "react";

export const SummaryDetailContext = React.createContext<DisclosurePrimitveStateReturn | undefined>(undefined);
