import { type BoxProps } from "@twilio-paste/box";
import { type InlineControlGroupProps } from "@twilio-paste/inline-control-group";

export interface VisualPickerCheckboxRadioGroupProps extends InlineControlGroupProps {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  element?: BoxProps["element"];
  name: string;
  i18nRequiredLabel?: string;
}
