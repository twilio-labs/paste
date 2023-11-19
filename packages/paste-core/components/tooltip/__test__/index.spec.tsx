import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { Tooltip } from "../src";
import { StateHookExample } from "../stories/index.stories";

const TooltipWithoutTheme: React.FC<React.PropsWithChildren<{ elementName?: string }>> = ({ elementName }) => {
  return (
    <Tooltip text="Welcome to Paste!" element={elementName} data-testid="tooltip-example">
      <Button variant="primary">Open Tooltip</Button>
    </Tooltip>
  );
};

describe("Tooltip", () => {
  describe("Render", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <TooltipWithoutTheme />
      </CustomizationProvider>,
    );
    it("should render a tooltip button with aria attributes", () => {
      const renderedTooltipButton = screen.getByRole("button");
      const isReact18 = parseInt(React.version.split(".")[0], 10) >= 18;
      const expectedAriaDescribedBy = isReact18 ? "paste-tooltip-:r0:" : "paste-tooltip-1";
      expect(renderedTooltipButton.getAttribute("aria-describedby")).toEqual(expectedAriaDescribedBy);

      const renderedTooltip = screen.getByTestId("tooltip-example");
      expect(renderedTooltip.getAttribute("role")).toEqual("tooltip");
    });

    it("should render a tooltip and show/hide on button click", async () => {
      render(<StateHookExample />);

      const ButtonOne = screen.queryByTestId("show-button");
      const ButtonTwo = screen.queryByTestId("hide-button");

      let tooltip = screen.queryByTestId("state-hook-tooltip");

      if (ButtonOne === null || ButtonTwo === null || tooltip === null) {
        return;
      }
      expect(tooltip.getAttribute("hidden")).not.toBeNull();

      userEvent.click(ButtonOne);

      await waitFor(() => {
        tooltip = screen.queryByTestId("state-hook-tooltip");
      });

      if (tooltip === null) {
        return;
      }
      expect(tooltip.getAttribute("hidden")).toBeNull();

      userEvent.click(ButtonTwo);

      await waitFor(() => {
        tooltip = screen.queryByTestId("state-hook-tooltip");
      });

      if (tooltip === null) {
        return;
      }
      expect(tooltip.getAttribute("hidden")).not.toBeNull();
    });
  });

  describe("Children", () => {
    it("should not override child provided events such as onBlur or onFocus", async () => {
      const focusHandlerMock: jest.Mock = jest.fn();
      const clickHandlerMock: jest.Mock = jest.fn();
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Tooltip text="Welcome to Paste!" data-testid="tooltip-children-example">
            <Button variant="primary" onFocus={focusHandlerMock} onClick={clickHandlerMock}>
              Open Tooltip
            </Button>
          </Tooltip>
        </CustomizationProvider>,
      );
      const tooltip = screen.getByTestId("tooltip-children-example");

      expect(tooltip).not.toBeVisible();

      await waitFor(async () => {
        await screen.getByRole("button").focus();
      });

      await waitFor(() => {
        expect(tooltip).toBeVisible();
      });

      userEvent.click(screen.getByRole("button"));

      await waitFor(() => {
        expect(focusHandlerMock).toHaveBeenCalled();
        expect(clickHandlerMock).toHaveBeenCalled();
      });
    });
  });

  describe("Customization", () => {
    it("should set a default element data attribute for Tooltip", (): void => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <TooltipWithoutTheme />
        </CustomizationProvider>,
      );
      const tooltip = screen.getByTestId("tooltip-example");
      const tooltipText = screen.getByText("Welcome to Paste!");

      expect(tooltip.getAttribute("data-paste-element")).toEqual("TOOLTIP");
      expect(tooltipText.getAttribute("data-paste-element")).toEqual("TOOLTIP_TEXT");
    });

    it("should set a custom element data attribute for a custom element name on Tooltip", (): void => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <TooltipWithoutTheme elementName="CUSTOM_TOOLTIP" />
        </CustomizationProvider>,
      );
      const tooltip = screen.getByTestId("tooltip-example");
      const tooltipText = screen.getByText("Welcome to Paste!");

      expect(tooltip.getAttribute("data-paste-element")).toEqual("CUSTOM_TOOLTIP");
      expect(tooltipText.getAttribute("data-paste-element")).toEqual("CUSTOM_TOOLTIP_TEXT");
    });

    it("should add custom styling to default Tooltip", (): void => {
      render(
        <CustomizationProvider
          theme={TestTheme}
          elements={{
            TOOLTIP: {
              backgroundColor: "colorBackgroundErrorWeakest",
              borderColor: "colorBorderDestructive",
              maxWidth: "size10",
              textAlign: "center",
            },
            TOOLTIP_TEXT: {
              color: "colorTextErrorStrong",
            },
          }}
        >
          <TooltipWithoutTheme />
        </CustomizationProvider>,
      );
      const tooltip = screen.getByTestId("tooltip-example");
      const tooltipText = screen.getByText("Welcome to Paste!");

      expect(tooltip).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
      expect(tooltipText).toHaveStyleRule("color", "rgb(173, 17, 17)");
    });

    it("should add custom styling to custom named Tooltip", (): void => {
      render(
        <CustomizationProvider
          theme={TestTheme}
          elements={{
            CUSTOM_TOOLTIP: {
              backgroundColor: "colorBackgroundErrorWeakest",
              borderColor: "colorBorderDestructive",
              maxWidth: "size10",
              textAlign: "center",
            },
            CUSTOM_TOOLTIP_TEXT: {
              color: "colorTextErrorStrong",
            },
          }}
        >
          <TooltipWithoutTheme elementName="CUSTOM_TOOLTIP" />
        </CustomizationProvider>,
      );
      const tooltip = screen.getByTestId("tooltip-example");
      const tooltipText = screen.getByText("Welcome to Paste!");
      expect(tooltip).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
      expect(tooltipText).toHaveStyleRule("color", "rgb(173, 17, 17)");
    });
  });
});
