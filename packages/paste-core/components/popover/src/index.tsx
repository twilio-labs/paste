import type { PopoverStateReturn } from "./PopoverContainer";

// for the sake of documenting the types we rename the state hook types to append Props to the name, so we can docuemnt them and not cause a breaking change.
type PopoverStateReturnProps = PopoverStateReturn;

export type { PopoverStateReturnProps };
export { PopoverContainer, usePopoverState } from "./PopoverContainer";
export type { PopoverContainerProps } from "./PopoverContainer";
export { Popover } from "./Popover";
export type { PopoverProps } from "./Popover";
export { PopoverButton } from "./PopoverButton";
export { PopoverBadgeButton } from "./PopoverBadgeButton";
export type { PopoverButtonProps, PopoverBadgeButtonProps } from "./types";
