import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { useDisclosurePrimitiveState } from "@twilio-paste/disclosure-primitive";
import type { DisclosurePrimitiveInitialState } from "@twilio-paste/disclosure-primitive";
import * as React from "react";

import { DisclosureContext } from "./DisclosureContext";
import type { DisclosureStateReturn, DisclosureVariants } from "./types";

export interface DisclosureProps extends DisclosurePrimitiveInitialState {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DISCLOSURE'
   * @type {BoxProps['element']}
   * @memberof DisclosureProps
   */
  element?: BoxProps["element"];
  children: NonNullable<React.ReactNode>;
  /**
   * Provide the Disclosure state returned from `useDisclosureState` if you want to control the state of the Disclosure.
   *
   * @type {DisclosureStateReturn}
   * @memberof DisclosureProps
   */
  state?: DisclosureStateReturn;
  /**
   * Changes the styling on the component based on the variant selected.
   *
   * @default 'default'
   * @type {DisclosureVariants}
   * @memberof DisclosureProps
   */
  variant?: DisclosureVariants;
}

const Disclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(
  ({ children, element = "DISCLOSURE", variant = "default", state, ...props }, ref) => {
    const disclosure = state || useDisclosurePrimitiveState({ animated: true, ...props });
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [isHeadingHovered, setIsHeadingHovered] = React.useState(false);

    const disclosureContext = {
      disclosure,
      variant,
      isHeadingHovered,
      setIsHeadingHovered,
      isDisabled,
      setIsDisabled,
    };

    return (
      <DisclosureContext.Provider value={disclosureContext}>
        <Box {...safelySpreadBoxProps(props)} variant={variant} element={element} ref={ref}>
          {children}
        </Box>
      </DisclosureContext.Provider>
    );
  },
);
Disclosure.displayName = "Disclosure";

export { Disclosure };

export { useDisclosurePrimitiveState as useDisclosureState };
