import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";

export interface UserDialogUserTextProps extends HTMLPasteProps<"div"> {
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @type {BoxProps["element"]}
   * @memberof UserDialogUserTextProps
   */
  element?: BoxProps["element"];
}
