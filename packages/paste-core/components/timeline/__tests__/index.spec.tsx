import { render } from "@testing-library/react";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import * as React from "react";

import { Timeline, TimelineItem } from "../src";
import { TimelineItemGroup } from "../src/TimelineItemGroup";

const ExampleTimeline: React.FC<{
  element?: string;
}> = ({ element = "TIMELINE" }) => (
  <Timeline element={element} data-testid="timeline">
    <TimelineItem data-testid="timelineItem" element={`${element}_ITEM`} title="Start" timestamp="2018-03-01:10:00">
      Event details
    </TimelineItem>

    <TimelineItem title="Inprogress" timestamp="2018-03-01:12:00">
      Event details
    </TimelineItem>

    <TimelineItem title="Complete" timestamp="2018-03-01:14:00">
      Event details
    </TimelineItem>

    <TimelineItem data-testid="timelineItemNoTimestamp" title="Item without timestamp">
      Event details
    </TimelineItem>

    <TimelineItem
      title="Icon Item"
      timestamp="2018-03-01:12:00"
      icon={UserIcon}
      data-testid="timelineItemIcon"
      element={`${element}_ITEM`}
    >
      Event details
    </TimelineItem>

    <TimelineItemGroup timestamp="2018-03-01" data-testid="timelineItemGroup" element={`${element}_ITEM_GROUP`}>
      <TimelineItem title="Inprogress" timestamp="12:00">
        Event details
      </TimelineItem>

      <TimelineItem title="Complete" timestamp="14:00">
        Event details
      </TimelineItem>

      <TimelineItem title="Item without timestamp">Event details</TimelineItem>
    </TimelineItemGroup>

    <TimelineItem
      title="Start"
      timestamp="2018-03-01:10:00"
      collapsible
      data-testid="timelineItemCollapsible"
      element={`${element}_ITEM`}
    >
      Event details
    </TimelineItem>

    <TimelineItem
      title="Item without timestamp"
      collapsible
      collapsibleHeading="custom heading"
      data-testid="timelineItemCollapsibleNoTimestamp"
    >
      Event details
    </TimelineItem>

    <TimelineItem
      title="Item with timestamp and collapsibleHeading"
      timestamp="2018-03-01:10:00"
      collapsible
      collapsibleHeading="custom heading"
      data-testid="timelineItemCollapsibleHeading"
    >
      Event details
    </TimelineItem>
  </Timeline>
);

describe("Timeline", () => {
  it("should render", () => {
    expect(document.querySelector("ol")).toBeDefined();
    expect(document.querySelector("li")).toBeDefined();
  });

  it("should display title and timestamp", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(getByTestId("timelineItem")).toHaveTextContent("Start");
    expect(getByTestId("timelineItem")).toHaveTextContent("2018-03-01:10:00");
  });

  it("should display content", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(getByTestId("timelineItem")).toHaveTextContent("Event details");
  });

  it("should display item without timestamp", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(
      getByTestId("timelineItemNoTimestamp").querySelector("[data-paste-element='TIMELINE_ITEM_TIMESTAMP']"),
    ).toBeNull();
  });

  it("should display icon item", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(getByTestId("timelineItem").querySelector("[data-paste-element='TIMELINE_ITEM_ICON']")).toBeDefined();
  });

  it("should display grouped items", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(getByTestId("timelineItemGroup")).toBeDefined();
  });

  it("should display group item timestamp", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(
      getByTestId("timelineItem").querySelector("[data-paste-element='TIMELINE_ITEM_GROUP_TIMESTAMP_DETAIL_TEXT']"),
    ).toBeDefined();
  });

  it("should display collapsible items", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(getByTestId("timelineItemCollapsible")).toBeDefined();
  });

  it("should display custom collapsible heading", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(getByTestId("timelineItemCollapsibleNoTimestamp")).toHaveTextContent("custom heading");
  });

  it("should not display custom collapsible heading text when timestamp is p", () => {
    const { getByTestId } = render(<ExampleTimeline />);
    expect(getByTestId("timelineItemCollapsibleHeading")).toHaveTextContent("2018-03-01:10:00");
  });

  describe("Customization", () => {
    it("should set element data attribute", () => {
      const { getByTestId } = render(<ExampleTimeline />);
      expect(getByTestId("timeline").getAttribute("data-paste-element")).toEqual("TIMELINE");
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_GROUP']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_SEPARATOR']`)).toBeTruthy();
      expect(
        getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_CONTENT_WRAPPER']`),
      ).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_ICON']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_ICON_WRAPPER']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_ICON_DOT']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_TITLE']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_TIMESTAMP']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_CONTENT']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='TIMELINE_ITEM_SUMMARY_DETAIL']`)).toBeTruthy();
    });

    it("should set custom element data attribute", () => {
      const { getByTestId } = render(<ExampleTimeline element="CUSTOMIZED" />);

      expect(getByTestId("timeline").getAttribute("data-paste-element")).toEqual("CUSTOMIZED");
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_GROUP']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_SEPARATOR']`)).toBeTruthy();
      expect(
        getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_CONTENT_WRAPPER']`),
      ).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_ICON']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_ICON_WRAPPER']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_ICON_DOT']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_TITLE']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_TIMESTAMP']`)).toBeTruthy();
      expect(getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_CONTENT']`)).toBeTruthy();
      expect(
        getByTestId("timeline").querySelector(`[data-paste-element='CUSTOMIZED_ITEM_SUMMARY_DETAIL']`),
      ).toBeTruthy();
    });
  });
});
