import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import {
  type DisclosurePrimitiveInitialState,
  type DisclosurePrimitveStateReturn,
  useDisclosurePrimitiveState,
} from "@twilio-paste/disclosure-primitive";
import * as React from "react";

import { SummaryDetailContext } from "./SummaryDetailContext";

export interface SummaryDetailStateReturn extends DisclosurePrimitveStateReturn {
  [key: string]: any;
}

export interface SummaryDetailProps extends DisclosurePrimitiveInitialState {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DISCLOSURE'
   * @type {BoxProps['element']}
   * @memberof SummaryDetailProps
   */
  element?: BoxProps["element"];
  /**
   * Provide the Disclosure state returned from `useDisclosureState` if you want to control the state of the Disclosure.
   *
   * @type {DisclosureStateReturn}
   * @memberof SummaryDetailProps
   */
  state?: SummaryDetailStateReturn;
}

export const SummaryDetail = React.forwardRef<HTMLDivElement, SummaryDetailProps>(
  ({ children, element = "SUMMARY_DETAIL", state, ...props }, ref) => {
    const stateForContext = state || useDisclosurePrimitiveState(props);

    return (
      <SummaryDetailContext.Provider value={{ ...stateForContext, headerId: React.useId() }}>
        <Box
          {...safelySpreadBoxProps(props)}
          ref={ref}
          element={element}
          display="flex"
          flexDirection="column"
          rowGap="space40"
        >
          {children}
        </Box>
      </SummaryDetailContext.Provider>
    );
  },
);
SummaryDetail.displayName = "SummaryDetail";

export { useDisclosurePrimitiveState as useSummaryDetailState };
export type { DisclosurePrimitiveInitialState as SummaryDetailInitialState };
