import { type BoxProps } from "@twilio-paste/box";
import { type InlineControlGroupProps } from "@twilio-paste/inline-control-group";

export interface VisualPickerCheckboxRadioGroupProps extends Omit<InlineControlGroupProps, "fieldStyleProps"> {
  /**
   * Sets the direction of the visual picker group
   *
   * @default "vertical"
   * @type {("horizontal" | "vertical")}
   * @memberof VisualPickerCheckboxRadioGroupProps
   */
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  element?: BoxProps["element"];
  /**
   * Provides name for the VisualPicker groups and items
   *
   * @type {string}
   * @memberof VisualPickerCheckboxRadioGroupProps
   */
  name: string;
  /**
   * Label text for the required dot in the legend
   *
   * @default "(required)"
   * @type {string}
   * @memberof VisualPickerCheckboxRadioGroupProps
   */
  i18nRequiredLabel?: string;
}
