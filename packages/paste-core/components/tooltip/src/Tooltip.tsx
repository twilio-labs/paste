import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { KeyboardKey, KeyboardKeyGroup } from "@twilio-paste/keyboard-key";
import { Stack } from "@twilio-paste/stack";
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
  children: NonNullable<React.ReactElement<any>>;
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
  actionHeader?: never;
  keyCombinationsActions?: never;
}

interface KeyboardActions {
  name: string;
  eventKeyCombination: string[];
  disabled?: boolean;
}

export interface KeyboardKeyTooltipProps
  extends Omit<TooltipProps, "text" | "keyCombinationsActions" | "actionHeader"> {
  text?: never;
  /**
   * The mapping of action names to their respective key combinations.
   *
   * @type {Array<KeyboardActions>}
   * @memberof KeyboardKeyTooltipProps
   */
  keyCombinationsActions: Array<KeyboardActions>;
  /**
   * The header content of the Tooltip.
   *
   * @type {string}
   * @memberof KeyboardKeyTooltipProps
   */
  actionHeader?: string;
}

// Union will stop users from adding types from both TooltipProps and KeyboardKeyTooltipProps at the same time.
export type TooltipVariantProps = TooltipProps | KeyboardKeyTooltipProps;

/*
 *Tooltip's current structure does not allow for customization of its arrow.
 *TODO: refactor Tooltip so that the styling of its arrow can be customized
 *using Customization Provider.
 */

const Tooltip = React.forwardRef<HTMLDivElement, TooltipVariantProps>(
  ({ baseId, children, element = "TOOLTIP", state, text, actionHeader, keyCombinationsActions, ...props }, ref) => {
    const tooltip = state || useTooltipPrimitiveState({ baseId: `paste-tooltip-${useUID()}`, ...props });

    return (
      <>
        {React.Children.only(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <TooltipPrimitiveReference {...tooltip} ref={ref} {...(children.props as any)}>
            {(referenceProps) => React.cloneElement(children, referenceProps)}
          </TooltipPrimitiveReference>,
        )}
        <TooltipPrimitive element={element} {...tooltip} {...props} as={StyledTooltip}>
          {/* import Paste Theme Based Styles due to portal positioning. */}
          <StyledBase>
            <TooltipArrow {...tooltip} />
            {text && !keyCombinationsActions && (
              <Text
                element={`${element}_TEXT`}
                as="span"
                color="colorTextInverse"
                fontSize="fontSize20"
                lineHeight="lineHeight10"
              >
                {text}
              </Text>
            )}
            {keyCombinationsActions && !text && (
              <Box color="colorTextInverse" fontSize="fontSize20" lineHeight="lineHeight10">
                <Stack orientation="vertical" spacing="space40">
                  {actionHeader && (
                    <Text
                      element={`${element}_HEADER`}
                      fontWeight="fontWeightSemibold"
                      as="p"
                      color="inherit"
                      fontSize="inherit"
                      lineHeight="inherit"
                    >
                      {actionHeader}
                    </Text>
                  )}
                  {keyCombinationsActions.map((action, idx) => (
                    <Box display="flex" key={`action-${idx}`} justifyContent="space-between">
                      {action.name && (
                        <Text
                          element={`${element}_ACTION_TEXT`}
                          as="span"
                          color="inherit"
                          fontSize="inherit"
                          lineHeight="inherit"
                          marginRight="space70"
                        >
                          {action.name}
                        </Text>
                      )}
                      <KeyboardKeyGroup
                        variant="inverse"
                        element={`${element}_ACTION_KEY_GROUP`}
                        disabled={action.disabled}
                      >
                        {action.eventKeyCombination.map((key, i) => (
                          <KeyboardKey key={`key-${idx}-${i}`} element={`${element}_ACTION_KEY`}>
                            {key}
                          </KeyboardKey>
                        ))}
                      </KeyboardKeyGroup>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
          </StyledBase>
        </TooltipPrimitive>
      </>
    );
  },
);

Tooltip.displayName = "Tooltip";
export { Tooltip };

export { useTooltipPrimitiveState as useTooltipState };
