import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  type SummaryDetailProps,
  useSummaryDetailState,
} from "../src";

const MockSummaryDetail: React.FC<{
  visible?: SummaryDetailProps["visible"];
}> = ({ visible }) => {
  return (
    <Theme.Provider theme="default">
      <SummaryDetail baseId="summary-detail" visible={visible}>
        <SummaryDetailHeading data-testid="summary-detail-heading">Some summary text</SummaryDetailHeading>
        <SummaryDetailContent data-testid="summary-detail-content">Some detail content</SummaryDetailContent>
      </SummaryDetail>
    </Theme.Provider>
  );
};

const MockDefaultElementSummaryDetail = (): JSX.Element => {
  return (
    <SummaryDetail data-testid="summary-detail">
      <SummaryDetailHeading data-testid="summary-detail-heading">Clickable heading</SummaryDetailHeading>
      <SummaryDetailContent data-testid="summary-detail-content">SummaryDetail content</SummaryDetailContent>
    </SummaryDetail>
  );
};

const MockCustomElementSummaryDetail = (): JSX.Element => {
  return (
    <SummaryDetail element="MY_SUMMARY_DETAIL" data-testid="summary-detail" visible>
      <SummaryDetailHeading element="MY_SUMMARY_DETAIL_HEADING" data-testid="summary-detail-heading">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
      </SummaryDetailHeading>
      <SummaryDetailContent element="MY_SUMMARY_DETAIL_CONTENT" data-testid="summary-detail-content">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
        pharetra augue.
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
      <SummaryDetail state={summaryDetail}>
        <SummaryDetailHeading data-testid="summary-detail-heading">SummaryDetail heading</SummaryDetailHeading>
        <SummaryDetailContent data-testid="summary-detail-content">SummaryDetail content</SummaryDetailContent>
      </SummaryDetail>
    </Theme.Provider>
  );
};

describe("SummaryDetail", () => {
  describe("Render", () => {
    it("should render a summary-detail button with aria attributes", () => {
      render(<MockSummaryDetail />);
      const renderedSummaryDetailButton = screen.getByTestId("summary-detail-heading").firstChild;
      expect(renderedSummaryDetailButton.getAttribute("aria-expanded")).toEqual("false");
      expect(renderedSummaryDetailButton.getAttribute("aria-controls")).toEqual("summary-detail");
    });
    it("should render a summary-detail open", async () => {
      await waitFor(() => {
        render(<MockSummaryDetail visible />);
      });
      const renderedSummaryDetailButton = screen.getByRole("button");
      expect(renderedSummaryDetailButton.getAttribute("aria-expanded")).toEqual("true");
    });
    it("should update attributes when clicked", async () => {
      render(<MockSummaryDetail />);
      const renderedSummaryDetailButton = screen.getByRole("button");
      userEvent.click(renderedSummaryDetailButton);
      expect(renderedSummaryDetailButton.getAttribute("aria-expanded")).toEqual("true");
    });
    it("should render a summary-detail open and update attributes when clicked using a state hook", async () => {
      render(<StateHookMock />);
      const toggleButton = screen.getByTestId("external-toggle");
      const summaryDetailButton = screen.getByTestId("summary-detail-heading").firstChild;
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

      expect(renderedSummaryDetail.getAttribute("data-paste-element")).toEqual("SUMMARY_DETAIL");
      expect(renderedSummaryDetailHeading.getAttribute("data-paste-element")).toEqual("SUMMARY_DETAIL_HEADING");
      expect(renderedSummaryDetailContent.getAttribute("data-paste-element")).toEqual("SUMMARY_DETAIL_CONTENT");
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

      expect(renderedSummaryDetail.getAttribute("data-paste-element")).toEqual("MY_SUMMARY_DETAIL");
      expect(renderedSummaryDetailHeading.getAttribute("data-paste-element")).toEqual("MY_SUMMARY_DETAIL_HEADING");
      expect(renderedSummaryDetailContent.getAttribute("data-paste-element")).toEqual("MY_SUMMARY_DETAIL_CONTENT");
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
            SUMMARY_DETAIL_HEADING_ICON: { color: "colorTextIconError" },
          }}
        >
          <MockDefaultElementSummaryDetail />
        </CustomizationProvider>,
      );

      const renderedSummaryDetailHeading = screen.getByTestId("summary-detail-heading");
      const renderedSummaryDetail = screen.getByTestId("summary-detail");
      const renderedSummaryDetailContent = screen.getByTestId("summary-detail-content");

      expect(renderedSummaryDetail).toHaveStyleRule("padding", "2.25rem");
      expect(renderedSummaryDetailHeading).toHaveStyleRule("color", "rgb(255, 255, 255)");
      expect(renderedSummaryDetailHeading).toHaveStyleRule("background-color", "rgb(117, 12, 12)");
      expect(renderedSummaryDetailContent).toHaveStyleRule("color", "rgb(173, 17, 17)");
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
            MY_SUMMARY_DETAIL_HEADING_ICON: { color: "colorTextIconError" },
          }}
        >
          <MockCustomElementSummaryDetail />
        </CustomizationProvider>,
      );
      const renderedSummaryDetailHeading = screen.getByTestId("summary-detail-heading");
      const renderedSummaryDetail = screen.getByTestId("summary-detail");
      const renderedSummaryDetailContent = screen.getByTestId("summary-detail-content");

      expect(renderedSummaryDetail).toHaveStyleRule("padding", "2.25rem");
      expect(renderedSummaryDetailHeading).toHaveStyleRule("color", "rgb(255, 255, 255)");
      expect(renderedSummaryDetailHeading).toHaveStyleRule("background-color", "rgb(117, 12, 12)");
      expect(renderedSummaryDetailContent).toHaveStyleRule("color", "rgb(173, 17, 17)");
    });
  });
});
