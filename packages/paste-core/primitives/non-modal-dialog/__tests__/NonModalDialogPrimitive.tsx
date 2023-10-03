import { act, fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";

import {
  NonModalDialogArrowPrimitive,
  NonModalDialogDisclosurePrimitive,
  NonModalDialogPrimitive,
  type NonModalDialogPrimitivePopoverInitialState,
  useNonModalDialogPrimitiveState,
} from "../src";

const Example: React.FC<{ options?: NonModalDialogPrimitivePopoverInitialState }> = ({
  options = { placement: "bottom-end" },
}) => {
  const popover = useNonModalDialogPrimitiveState(options);
  return (
    <div data-testid="wrapper">
      <NonModalDialogDisclosurePrimitive {...popover}>Open Popover</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...popover} aria-label="Welcome">
        <NonModalDialogArrowPrimitive {...popover} />
        Welcome to Reakit!
      </NonModalDialogPrimitive>
    </div>
  );
};
Example.displayName = "Example";

describe("NonModalDialogPrimitive", () => {
  describe("portal behavior", () => {
    test("renders in a portal under when nothing is provided into hook", async () => {
      render(<Example />);

      const wrapper = screen.getByTestId("wrapper");
      const button = screen.getByText("Open Popover");
      const popover = screen.getByText("Welcome to Reakit!");
      expect(wrapper).toBeInTheDocument();
      expect(popover).not.toBeVisible();

      await act(async () => {
        fireEvent.click(button);
      });

      expect(popover).toBeVisible();

      // Check if popover is in portal
      expect(wrapper).not.toContainElement(popover);
    });
  });
});
