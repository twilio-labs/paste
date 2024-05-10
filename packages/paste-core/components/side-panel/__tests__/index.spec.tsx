import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@twilio-paste/button";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import {
  SidePanel,
  SidePanelBody,
  SidePanelHeader,
  SidePanelHeaderActions,
  SidePanelPageWrapper,
  SidePanelPushContentWrapper,
} from "../src";

const MockSidePanel = ({ element = "SIDE_PANEL" }: { element?: string }): JSX.Element => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Theme.Provider theme="twilio" data-testid="wrapper">
      <SidePanelPageWrapper element={`${element}_PAGE_WRAPPER`}>
        <SidePanel collapsed={collapsed} label="my side panel" id="side-panel-id" element={element}>
          <SidePanelHeader element={`${element}_HEADER`}>
            Heading
            <SidePanelHeaderActions element={`${element}_HEADER_ACTIONS`}>
              <Button data-testid="close-button" variant="secondary_icon" onClick={() => setCollapsed(!collapsed)}>
                X
              </Button>
            </SidePanelHeaderActions>
          </SidePanelHeader>
          <SidePanelBody element={`${element}_BODY`}>Body</SidePanelBody>
        </SidePanel>
        <SidePanelPushContentWrapper element={`${element}_PUSH_CONTENT_WRAPPER`}>
          Page content
        </SidePanelPushContentWrapper>
      </SidePanelPageWrapper>
    </Theme.Provider>
  );
};

describe("SidePanel", () => {
  beforeEach(() => {
    render(<MockSidePanel />);
  });
  it("should render", () => {
    expect(screen.getByRole("dialog")).toBeDefined();
  });
  it("should be removed from the DOM when collapsed", async () => {
    const closeButton = screen.getByTestId("close-button");
    await userEvent.click(closeButton);
    expect(screen.queryByRole("dialog")).toBeNull(); // queryByRole returns null if no element is found whereas getByRole throws an error
  });
  it("should have an id", () => {
    expect(screen.getByRole("dialog").getAttribute("id")).toEqual("side-panel-id");
  });
  it("should have an aria label", () => {
    expect(screen.getByLabelText("my side panel")).toBeInTheDocument();
  });
});

describe("Customization", () => {
  it("should set default element values", () => {
    render(<MockSidePanel />);
    const sidePanelWrapper = screen.getByTestId("wrapper");
    const sidePanel = screen.getByRole("dialog");
    expect(sidePanelWrapper.querySelector('[data-paste-element="SIDE_PANEL_PAGE_WRAPPER"]')).toBeInTheDocument();
    expect(
      sidePanelWrapper.querySelector('[data-paste-element="SIDE_PANEL_PUSH_CONTENT_WRAPPER"]'),
    ).toBeInTheDocument();
    expect(sidePanel.getAttribute("data-paste-element")).toEqual("SIDE_PANEL");
    expect(sidePanel.querySelector('[data-paste-element="ANIMATED_SIDE_PANEL_WRAPPER"]')).toBeInTheDocument();
    expect(sidePanel.querySelector('[data-paste-element="INNER_SIDE_PANEL"]')).toBeInTheDocument();
    expect(screen.getByText("Heading").getAttribute("data-paste-element")).toBe("SIDE_PANEL_HEADER");
    expect(screen.getByText("X").parentElement?.parentElement?.getAttribute("data-paste-element")).toBe(
      "SIDE_PANEL_HEADER_ACTIONS",
    );
    expect(screen.getByText("Body").getAttribute("data-paste-element")).toBe("SIDE_PANEL_BODY");
    expect(screen.getByText("Page content").getAttribute("data-paste-element")).toBe("SIDE_PANEL_PUSH_CONTENT_WRAPPER");
  });

  it("should set custom element values", () => {
    render(<MockSidePanel element="FTP" />);
    const sidePanelWrapper = screen.getByTestId("wrapper");
    const sidePanel = screen.getByRole("dialog");
    expect(sidePanelWrapper.querySelector('[data-paste-element="FTP_PAGE_WRAPPER"]')).toBeInTheDocument();
    expect(sidePanelWrapper.querySelector('[data-paste-element="FTP_PUSH_CONTENT_WRAPPER"]')).toBeInTheDocument();
    expect(sidePanel.getAttribute("data-paste-element")).toEqual("FTP");
    expect(sidePanel.querySelector('[data-paste-element="ANIMATED_FTP_WRAPPER"]')).toBeInTheDocument();
    expect(sidePanel.querySelector('[data-paste-element="INNER_FTP"]')).toBeInTheDocument();
    expect(screen.getByText("Heading").getAttribute("data-paste-element")).toBe("FTP_HEADER");
    expect(screen.getByText("X").parentElement?.parentElement?.getAttribute("data-paste-element")).toBe(
      "FTP_HEADER_ACTIONS",
    );
    expect(screen.getByText("Body").getAttribute("data-paste-element")).toBe("FTP_BODY");
    expect(screen.getByText("Page content").getAttribute("data-paste-element")).toBe("FTP_PUSH_CONTENT_WRAPPER");
  });
});
