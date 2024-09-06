import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import React from "react";

type BaseStepProps = {
  children: NonNullable<React.ReactNode>;

  /**
   * Adds extra content to the step. This is useful for adding a description or additional information.
   *
   * @type {React.ReactNode}
   * @memberof BaseStepProps
   */
  content?: React.ReactNode;
};

type StepDivProps = HTMLPasteProps<"div"> & {
  as: "div";
  href?: never;
  onClick?: never;
};
type StepButtonProps = HTMLPasteProps<"button"> & {
  as: "button";
  onClick: HTMLPasteProps<"button">["onClick"];
  href?: never;
};
type StepAnchorProps = HTMLPasteProps<"a"> & {
  as: "a";
  href: string;
  onClick?: never;
};

type ProgressStepProps = BaseStepProps & (StepDivProps | StepButtonProps | StepAnchorProps);

export type ProgressStepCompleteProps = ProgressStepProps & {
  /**
   * Accessible title of the ProgressSuccessIcon for screen readers.
   *
   * @default 'Completed'
   * @type {string}
   * @memberof ProgressStepCompleteProps
   */
  i18nCompleteLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PROGRESS_STEP_COMPLETE'
   * @type {BoxProps['element']}
   * @memberof ProgressStepCompleteProps
   */
  element?: BoxProps["element"];
};
export type ProgressStepErrorProps = ProgressStepProps & {
  /**
   * Accessible title of the ProgressErrorIcon for screen readers.
   *
   * @default 'Error'
   * @type {string}
   * @memberof ProgressStepErrorProps
   */
  i18nErrorLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PROGRESS_STEP_ERROR'
   * @type {BoxProps['element']}
   * @memberof ProgressStepErrorProps
   */
  element?: BoxProps["element"];
};
export type ProgressStepCurrentProps = ProgressStepProps & {
  /**
   * Accessible title of the ProgressCurrentIcon for screen readers.
   *
   * @default 'Current'
   * @type {string}
   * @memberof ProgressStepCurrentProps
   */
  i18nCurrentLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PROGRESS_STEP_CURRENT'
   * @type {BoxProps['element']}
   * @memberof ProgressStepCurrentProps
   */
  element?: BoxProps["element"];
};

/**
 * Special case for incomplete steps since they're the only ones that can be disabled
 */
type IncompleteStepDivProps = HTMLPasteProps<"div"> & {
  as: "div";
  href?: never;
  onClick?: never;
  disabled?: never;
};
type IncompleteStepButtonProps = HTMLPasteProps<"button"> & {
  as: "button";
  onClick: HTMLPasteProps<"button">["onClick"];
  href?: never;
  disabled?: boolean;
};
type IncompleteStepAnchorProps = HTMLPasteProps<"a"> & {
  as: "a";
  href: string;
  onClick?: never;
  disabled?: never;
};

export type ProgressStepIncompleteProps = BaseStepProps &
  (IncompleteStepDivProps | IncompleteStepButtonProps | IncompleteStepAnchorProps) & {
    /**
     * Accessible title of the ProgressIncompleteIcon for screen readers.
     *
     * @default 'Incomplete'
     * @type {string}
     * @memberof ProgressStepIncompleteProps
     */
    i18nIncompleteLabel?: string;
    /**
     * Overrides the default element name to apply unique styles with the Customization Provider.
     *
     * @default 'PROGRESS_STEP_INCOMPLETE'
     * @type {BoxProps['element']}
     * @memberof ProgressStepIncompleteProps
     */
    element?: BoxProps["element"];
  };

export type Orientation = "horizontal" | "vertical";
