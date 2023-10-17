import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import { StyledBase } from "@twilio-paste/theme";
import { TooltipPrimitive, TooltipPrimitiveReference, useTooltipPrimitiveState } from "@twilio-paste/tooltip-primitive";
import type { TooltipPrimitiveInitialState, TooltipPrimitiveStateReturn } from "@twilio-paste/tooltip-primitive";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { TooltipArrow } from "./TooltipArrow";

const StyledTooltip = React.forwardRef<HTMLDivElement, BoxProps>(({ style, element, ...props }, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBodyInverse"
      borderRadius="borderRadius30"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderInverse"
      element={element}
      maxWidth="size30"
      paddingX="space50"
      paddingY="space40"
      zIndex="zIndex90"
      _focus={{ outline: "none" }}
      style={style}
      ref={ref}
    />
  );
});

StyledTooltip.displayName = "StyledTooltip";

export type UseTooltipInitialStateProps = TooltipPrimitiveInitialState;
export interface TooltipStateReturn extends TooltipPrimitiveStateReturn {
  [key: string]: any;
}
export interface TooltipProps extends TooltipPrimitiveInitialState {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "TOOLTIP"
   * @type {BoxProps["element"]}
   * @memberof TooltipProps
   */
  element?: BoxProps["element"];
  children: NonNullable<React.ReactElement>;
  /**
   * The returned state from the `useTooltipState` hook.
   *
   * @type {TooltipStateReturn}
   * @memberof TooltipProps
   */
  state?: TooltipStateReturn;
  /**
   * The text content of the Tooltip.
   *
   * @type {string}
   * @memberof TooltipProps
   */
  text: string;
}

/*
 *Tooltip's current structure does not allow for customization of its arrow.
 *TODO: refactor Tooltip so that the styling of its arrow can be customized
 *using Customization Provider.
 */

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ baseId, children, element = "TOOLTIP", state, text, ...props }, ref) => {
    const tooltip = state || useTooltipPrimitiveState({ baseId: `paste-tooltip-${useUID()}`, ...props });
    return (
      <>
        {React.Children.only(
          <TooltipPrimitiveReference {...tooltip} ref={ref} {...children.props}>
            {(referenceProps) => React.cloneElement(children, referenceProps)}
          </TooltipPrimitiveReference>,
        )}
        <TooltipPrimitive element={element} {...tooltip} {...props} as={StyledTooltip}>
          {/* import Paste Theme Based Styles due to portal positioning. */}
          <StyledBase>
            <TooltipArrow {...tooltip} />
            <Text
              element={`${element}_TEXT`}
              as="span"
              color="colorTextInverse"
              fontSize="fontSize20"
              lineHeight="lineHeight10"
            >
              {text}
            </Text>
          </StyledBase>
        </TooltipPrimitive>
      </>
    );
  },
);

Tooltip.displayName = "Tooltip";
export { Tooltip };

export { useTooltipPrimitiveState as useTooltipState };
