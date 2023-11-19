import {
  type PopoverInitialState as NonModalDialogPrimitivePopoverInitialState,
  type PopoverStateReturn as NonModalDialogPrimitiveStateReturn,
  usePopoverState as _usePopoverState,
} from "@twilio-paste/reakit-library";

/*
 * Fixes issue where the popover would not open in a portal
 * when using the state hook directly
 */
export const useNonModalDialogPrimitiveState = (
  options: NonModalDialogPrimitivePopoverInitialState,
): NonModalDialogPrimitiveStateReturn => {
  return _usePopoverState({ modal: true, ...options });
};

export {
  Popover as NonModalDialogPrimitive,
  PopoverDisclosure as NonModalDialogDisclosurePrimitive,
  PopoverArrow as NonModalDialogArrowPrimitive,
} from "@twilio-paste/reakit-library";

export type { NonModalDialogPrimitivePopoverInitialState, NonModalDialogPrimitiveStateReturn };
export type {
  PopoverState as NonModalDialogPrimitiveState,
  PopoverProps as NonModalDialogPrimitiveProps,
  PopoverDisclosureProps as NonModalDialogDisclosurePrimitiveProps,
  PopoverArrowProps as NonModalDialogArrowPrimitiveProps,
} from "@twilio-paste/reakit-library";
