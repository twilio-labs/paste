import { Box } from "@twilio-paste/box";
import { Portal } from "@twilio-paste/reakit-library";
import * as React from "react";

import { ListBoxPositioner } from "./ListboxPositioner";

/*
 * This component renders the listbox in an absolutely positioned Box when `usePortal={false}`.
 * Portal and ListBoxPositioner shouldn't be used when the Combobox is placed in a Popover.
 * Using Combobox in a Popover was previously causing interaction issues because of the Portal that Popover uses.
 * Because ListBoxPositioner isn't used when `usePortal={false}`, the listbox won't change position based on the window
 * (e.g. moving above the input box when the Combobox is at the bottom of the window).
 */

export const ListboxWrapper: React.FC<{
  inputBoxRef: React.RefObject<HTMLElement | null>;
  parentRef: React.RefObject<HTMLElement | null>;
  usePortal: boolean;
  children: React.ReactNode;
}> = ({ inputBoxRef, parentRef, usePortal, children }) => {
  if (!usePortal)
    return (
      <Box position="absolute" top="100%" width="100%">
        {children}
      </Box>
    );
  return (
    <Portal>
      <ListBoxPositioner inputBoxRef={inputBoxRef} dropdownBoxRef={parentRef}>
        {children}
      </ListBoxPositioner>
    </Portal>
  );
};
ListboxWrapper.displayName = "ListboxWrapper";
