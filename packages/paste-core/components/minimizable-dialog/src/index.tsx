"use client";
import type { MinimizableDialogStateReturn, UseMinimizableDialogStateArgs } from "./MinimizableDialogContainer";

// for the sake of documenting the types we rename the state hook types to append Props to the name, so we can docuemnt them and not cause a breaking change.
type useMinimizableDialogInitialStateProps = UseMinimizableDialogStateArgs;
type useMinimizableDialogReturnStateProps = MinimizableDialogStateReturn;

export type { useMinimizableDialogReturnStateProps, useMinimizableDialogInitialStateProps };
export { MinimizableDialog } from "./MinimizableDialog";
export type { MinimizableDialogProps } from "./MinimizableDialog";
export { MinimizableDialogButton } from "./MinimizableDialogButton";
export type { MinimizableDialogButtonProps } from "./MinimizableDialogButton";
export { MinimizableDialogHeader } from "./MinimizableDialogHeader";
export type { MinimizableDialogHeaderProps } from "./MinimizableDialogHeader";
export { MinimizableDialogContainer, useMinimizableDialogState } from "./MinimizableDialogContainer";
export type { MinimizableDialogContainerProps, MinimizableDialogStateReturn } from "./MinimizableDialogContainer";
export { MinimizableDialogContent } from "./MinimizableDialogContent";
export type { MinimizableDialogContentProps } from "./MinimizableDialogContent";
