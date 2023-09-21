import type { InputProps } from "@twilio-paste/input";
import { Input } from "@twilio-paste/input";
import * as React from "react";

export type DatePickerProps = Omit<InputProps, "type" | "insertBefore" | "insertAfter"> & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DATEPICKER'
   */
  element?: InputProps["element"];
};

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(({ element = "DATEPICKER", ...props }, ref) => {
  return <Input element={element} {...props} type="date" ref={ref} />;
});

DatePicker.displayName = "DatePicker";

export { DatePicker };
