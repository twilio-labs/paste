import type { BoxProps } from "@twilio-paste/box";

export type InputBoxTypes =
  | "text"
  | "email"
  | "hidden"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "date"
  | "time"
  | "url";
export type Variants = "default" | "inverse";

export interface FauxInputProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  /*
   * Requiring element here instead of extending directly from BoxProps.
   * This ensures an element prop is always passed on these composite components.
   */
  element: BoxProps["element"];
  hasError?: boolean;
  readOnly?: boolean;
  type?: InputBoxTypes;
  variant?: Variants;
}
