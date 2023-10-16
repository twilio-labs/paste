import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";

export interface UserDialogUserTextProps extends HTMLPasteProps<"div"> {
  children: string;
  element?: BoxProps["element"];
}
