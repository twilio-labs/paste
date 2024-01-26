import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  type SummaryDetailProps,
  SummaryDetailToggleButton,
  useSummaryDetailState,
} from "../src";

const MockSummaryDetail: React.FC<{
  visible?: SummaryDetailProps["visible"];
}> = ({ visible }) => {
  return (
    <Theme.Provider theme="default">
      <SummaryDetail baseId="summary-detail" visible={visible} data-testid="summary-detail">
        <SummaryDetailHeading data-testid="summary-detail-heading">
          <SummaryDetailToggleButton data-testid="summary-detail-toggle-button" />
          <SummaryDetailHeadingContent data-testid="summary-detail-heading-content">
            Inbound Call
          </SummaryDetailHeadingContent>
        </SummaryDetailHeading>
        <SummaryDetailContent data-testid="summary-detail-content">Agent: John Doe</SummaryDetailContent>
      </SummaryDetail>
    </Theme.Provider>
  );
};

const MockDefaultElementSummaryDetail = (): JSX.Element => {
  return (
    <SummaryDetail baseId="summary-detail" data-testid="summary-detail">
      <SummaryDetailHeading data-testid="summary-detail-heading">
        <SummaryDetailToggleButton aria-label="BOOP" data-testid="summary-detail-toggle-button" />
        <SummaryDetailHeadingContent data-testid="summary-detail-heading-content">
          Inbound Call
        </SummaryDetailHeadingContent>
      </SummaryDetailHeading>
      <SummaryDetailContent data-testid="summary-detail-content">Agent: John Doe</SummaryDetailContent>
    </SummaryDetail>
  );
};

const MockCustomElementSummaryDetail = (): JSX.Element => {
  return (
    <SummaryDetail element="MY_SUMMARY_DETAIL" baseId="summary-detail" data-testid="summary-detail">
      <SummaryDetailHeading element="MY_SUMMARY_DETAIL_HEADING" data-testid="summary-detail-heading">
        <SummaryDetailToggleButton
          element="MY_SUMMARY_DETAIL_TOGGLE_BUTTON"
          aria-label="BOOP"
          data-testid="summary-detail-toggle-button"
        />
        <SummaryDetailHeadingContent
          element="MY_SUMMARY_DETAIL_HEADING_CONTENT"
          data-testid="summary-detail-heading-content"
        >
          Inbound Call
        </SummaryDetailHeadingContent>
      </SummaryDetailHeading>
      <SummaryDetailContent element="MY_SUMMARY_DETAIL_CONTENT" data-testid="summary-detail-content">
        Agent: John Doe
      </SummaryDetailContent>
    </SummaryDetail>
  );
};

const StateHookMock = (): JSX.Element => {
  const summaryDetail = useSummaryDetailState();
  return (
    <Theme.Provider theme="default">
      <button
        onClick={() => {
          summaryDetail.toggle();
        }}
        type="button"
        data-testid="external-toggle"
      >
        Toggle summaryDetail
      </button>
      <SummaryDetail state={summaryDetail} baseId="summary-detail" data-testid="summary-detail">
        <SummaryDetailHeading element="FOO_HEADING" data-testid="summary-detail-heading">
          <SummaryDetailToggleButton
            element="FOO_TOGGLE_BUTTON"
            aria-label="BOOP"
            data-testid="summary-detail-toggle-button"
          />
          <SummaryDetailHeadingContent element="FOO_HEADING_CONTENT" data-testid="summary-detail-heading-content">
            Inbound Call
          </SummaryDetailHeadingContent>
        </SummaryDetailHeading>
        <SummaryDetailContent element="FOO_CONTENT" data-testid="summary-detail-content">
          Agent: John Doe
        </SummaryDetailContent>
      </SummaryDetail>
    </Theme.Provider>
  );
};

describe("SummaryDetail", () => {
  describe("Render", () => {
    it("should render a summary-detail button with aria attributes", () => {
      render(<MockDefaultElementSummaryDetail />);
      const renderedSummaryDetailButton = screen.getByTestId("summary-detail-toggle-button");
      expect(renderedSummaryDetailButton.getAttribute("aria-expanded")).toEqual("false");
      expect(renderedSummaryDetailButton.getAttribute("aria-controls")).toEqual("summary-detail");
      expect(renderedSummaryDetailButton.getAttribute("aria-label")).toEqual("BOOP");
      expect(renderedSummaryDetailButton.getAttribute("aria-labelledby")).toBe(null);
    });
    it("should overwrite aria-labelledby if passing an aria-label", () => {
      render(<MockSummaryDetail />);
      const renderedSummaryDetailButton = screen.getByTestId("summary-detail-toggle-button");
      expect(renderedSummaryDetailButton.getAttribute("aria-label")).toEqual(null);
      expect(renderedSummaryDetailButton.getAttribute("aria-labelledby")).not.toBe(null);
    });

    it("should render a summary-detail open", async () => {
      await waitFor(() => {
        render(<MockSummaryDetail visible />);
      });
      const renderedSummaryDetailButton = screen.getByRole("button");
      const summaryDetailContent = screen.getByTestId("summary-detail-content");
      expect(renderedSummaryDetailButton.getAttribute("aria-expanded")).toEqual("true");
      expect(summaryDetailContent).toBeVisible();
    });

    it("should toggle open state correctly", async () => {
      render(<MockSummaryDetail />);
      const summaryDetailButton = screen.getByTestId("summary-detail-toggle-button");
      const summaryDetailContent = screen.getByTestId("summary-detail-content");
      expect(summaryDetailButton.getAttribute("aria-expanded")).toEqual("false");
      expect(summaryDetailContent).not.toBeVisible();
      userEvent.click(summaryDetailButton);
      expect(summaryDetailButton.getAttribute("aria-expanded")).toEqual("true");
      waitFor(() => {
        expect(summaryDetailContent).toBeVisible();
      });
    });

    it("should toggle open state correctly when using a state hook", async () => {
      render(<StateHookMock />);
      const toggleButton = screen.getByTestId("external-toggle");
      const summaryDetailButton = screen.getByTestId("summary-detail-toggle-button");
      const summaryDetailContent = screen.getByTestId("summary-detail-content");
      expect(summaryDetailButton.getAttribute("aria-expanded")).toEqual("false");
      expect(summaryDetailContent).not.toBeVisible();
      userEvent.click(toggleButton);
      expect(summaryDetailButton.getAttribute("aria-expanded")).toEqual("true");
      waitFor(() => {
        expect(summaryDetailContent).toBeVisible();
      });
    });
  });

  describe("Customization", () => {
    it("should set an element data attribute for SummaryDetail components", () => {
      render(
        <Theme.Provider theme="default">
          <MockDefaultElementSummaryDetail />
        </Theme.Provider>,
      );

      const renderedSummaryDetailHeading = screen.getByTestId("summary-detail-heading");
      const renderedSummaryDetail = screen.getByTestId("summary-detail");
      const renderedSummaryDetailContent = screen.getByTestId("summary-detail-content");
      const renderedSummaryDetailHeadingContent = screen.getByTestId("summary-detail-heading-content");
      const renderedSummaryDetailToggleButton = screen.getByTestId("summary-detail-toggle-button");

      expect(renderedSummaryDetail.getAttribute("data-paste-element")).toEqual("SUMMARY_DETAIL");
      expect(renderedSummaryDetailHeading.getAttribute("data-paste-element")).toEqual("SUMMARY_DETAIL_HEADING");
      expect(renderedSummaryDetailContent.getAttribute("data-paste-element")).toEqual("SUMMARY_DETAIL_CONTENT");
      expect(renderedSummaryDetailHeadingContent.getAttribute("data-paste-element")).toEqual(
        "SUMMARY_DETAIL_HEADING_CONTENT",
      );
      expect(renderedSummaryDetailToggleButton.getAttribute("data-paste-element")).toEqual(
        "SUMMARY_DETAIL_TOGGLE_BUTTON",
      );
    });

    it("should set a custom element data attribute for custom named SummaryDetail components", () => {
      render(
        <Theme.Provider theme="default">
          <MockCustomElementSummaryDetail />
        </Theme.Provider>,
      );

      const renderedSummaryDetailHeading = screen.getByTestId("summary-detail-heading");
      const renderedSummaryDetail = screen.getByTestId("summary-detail");
      const renderedSummaryDetailContent = screen.getByTestId("summary-detail-content");
      const renderedSummaryDetailHeadingContent = screen.getByTestId("summary-detail-heading-content");
      const renderedSummaryDetailToggleButton = screen.getByTestId("summary-detail-toggle-button");

      expect(renderedSummaryDetail.getAttribute("data-paste-element")).toEqual("MY_SUMMARY_DETAIL");
      expect(renderedSummaryDetailHeading.getAttribute("data-paste-element")).toEqual("MY_SUMMARY_DETAIL_HEADING");
      expect(renderedSummaryDetailContent.getAttribute("data-paste-element")).toEqual("MY_SUMMARY_DETAIL_CONTENT");
      expect(renderedSummaryDetailHeadingContent.getAttribute("data-paste-element")).toEqual(
        "MY_SUMMARY_DETAIL_HEADING_CONTENT",
      );
      expect(renderedSummaryDetailToggleButton.getAttribute("data-paste-element")).toEqual(
        "MY_SUMMARY_DETAIL_TOGGLE_BUTTON",
      );
    });

    it("should add custom styles to SummaryDetail components", () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            SUMMARY_DETAIL: { padding: "space100" },
            SUMMARY_DETAIL_CONTENT: { color: "colorTextErrorStrong" },
            SUMMARY_DETAIL_HEADING: { color: "colorTextWeakest", backgroundColor: "colorBackgroundDestructiveStrong" },
            SUMMARY_DETAIL_HEADING_CONTENT: { color: "colorTextIconError" },
            SUMMARY_DETAIL_TOGGLE_BUTTON: { borderColor: "colorBorderError" },
          }}
        >
          <MockDefaultElementSummaryDetail />
        </CustomizationProvider>,
      );

      const renderedSummaryDetailHeading = screen.getByTestId("summary-detail-heading");
      const renderedSummaryDetail = screen.getByTestId("summary-detail");
      const renderedSummaryDetailContent = screen.getByTestId("summary-detail-content");
      const renderedSummaryDetailHeadingContent = screen.getByTestId("summary-detail-heading-content");
      const renderedSummaryDetailToggleButton = screen.getByTestId("summary-detail-toggle-button");

      expect(renderedSummaryDetail).toHaveStyleRule("padding", "2.25rem");
      expect(renderedSummaryDetailHeading).toHaveStyleRule("color", "rgb(255, 255, 255)");
      expect(renderedSummaryDetailHeading).toHaveStyleRule("background-color", "rgb(117, 12, 12)");
      expect(renderedSummaryDetailContent).toHaveStyleRule("color", "rgb(173, 17, 17)");
      expect(renderedSummaryDetailHeadingContent).toHaveStyleRule("color", "rgb(214, 31, 31)");
      expect(renderedSummaryDetailToggleButton).toHaveStyleRule("border-color", "rgb(214, 31, 31)");
    });

    it("should add custom styles to custom named SummaryDetail components", () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            MY_SUMMARY_DETAIL: { padding: "space100" },
            MY_SUMMARY_DETAIL_CONTENT: { color: "colorTextErrorStrong" },
            MY_SUMMARY_DETAIL_HEADING: {
              color: "colorTextWeakest",
              backgroundColor: "colorBackgroundDestructiveStrong",
            },
            MY_SUMMARY_DETAIL_HEADING_CONTENT: { color: "colorTextIconError" },
            MY_SUMMARY_DETAIL_TOGGLE_BUTTON: { borderColor: "colorBorderError" },
          }}
        >
          <MockCustomElementSummaryDetail />
        </CustomizationProvider>,
      );
      const renderedSummaryDetailHeading = screen.getByTestId("summary-detail-heading");
      const renderedSummaryDetail = screen.getByTestId("summary-detail");
      const renderedSummaryDetailContent = screen.getByTestId("summary-detail-content");
      const renderedSummaryDetailHeadingContent = screen.getByTestId("summary-detail-heading-content");
      const renderedSummaryDetailToggleButton = screen.getByTestId("summary-detail-toggle-button");

      expect(renderedSummaryDetail).toHaveStyleRule("padding", "2.25rem");
      expect(renderedSummaryDetailHeading).toHaveStyleRule("color", "rgb(255, 255, 255)");
      expect(renderedSummaryDetailHeading).toHaveStyleRule("background-color", "rgb(117, 12, 12)");
      expect(renderedSummaryDetailContent).toHaveStyleRule("color", "rgb(173, 17, 17)");
      expect(renderedSummaryDetailHeadingContent).toHaveStyleRule("color", "rgb(214, 31, 31)");
      expect(renderedSummaryDetailToggleButton).toHaveStyleRule("border-color", "rgb(214, 31, 31)");
    });
  });
});
