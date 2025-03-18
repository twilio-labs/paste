"use client";
import type { AccountSwitcherInitialState, AccountSwitcherStateReturn } from "./useAccountSwitcher";

// for the sake of documenting the types we rename the state hook types to append Props to the name, so we can docuemnt them and not cause a breaking change.
type AccountSwitcherStateReturnProps = AccountSwitcherStateReturn;
type AccountSwitcherInitialStateProps = AccountSwitcherInitialState;

export type { AccountSwitcherStateReturnProps, AccountSwitcherInitialStateProps };
export { AccountSwitcherBadge } from "./AccountSwitcherBadge";
export type { AccountSwitcherBadgeProps } from "./AccountSwitcherBadge";
export { AccountSwitcher } from "./AccountSwitcher";
export type { AccountSwitcherProps } from "./AccountSwitcher";
export { AccountSwitcherItem } from "./AccountSwitcherItem";
export type { AccountSwitcherItemProps } from "./AccountSwitcherItem";
export { AccountSwitcherItemRadio } from "./AccountSwitcherItemRadio";
export type { AccountSwitcherItemRadioProps } from "./AccountSwitcherItemRadio";
export { AccountSwitcherGroup } from "./AccountSwitcherGroup";
export type { AccountSwitcherGroupProps } from "./AccountSwitcherGroup";
export { AccountSwitcherSeparator } from "./AccountSwitcherSeparator";
export type { AccountSwitcherSeparatorProps } from "./AccountSwitcherSeparator";
export { useAccountSwitcherState } from "./useAccountSwitcher";
