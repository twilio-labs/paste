import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ComboboxListboxProps extends HTMLPasteProps<"ul"> {
  children: NonNullable<React.ReactNode>;
  /**
   *
   * @type {boolean}
   * @memberof ComboboxListboxProps
   */
  hidden: boolean;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "COMBOBOX_LISTBOX"
   * @type {BoxElementProps["element"]}
   * @memberof ComboboxListboxProps
   */
  element?: BoxProps["element"];
}

const ComboboxListbox = React.forwardRef<HTMLUListElement, ComboboxListboxProps>(
  ({ children, element = "COMBOBOX_LISTBOX", hidden, ...props }, ref) => {
    // Unmount children when hidden
    if (hidden) {
      return <Box {...safelySpreadBoxProps(props)} appearance="none" ref={ref} />;
    }

    /*
     * TODO:
     * Right now the listbox is absolutely positioned. This will
     * fail if a combobox is placed at the bottom of a screen
     * so we need upgrade the positioning using popperjs in the future.
     */
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        backgroundColor="colorBackgroundWeaker"
        borderRadius="borderRadius20"
        boxShadow="shadowElevation10"
        element={element}
        listStyleType="none"
        margin="space0"
        overflowY="auto"
        padding="space0"
        position="absolute"
        width="100%"
        maxHeight="size30"
        zIndex="zIndex20"
        marginTop="space20"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

ComboboxListbox.displayName = "ComboboxListbox";

export { ComboboxListbox };
