import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { Paragraph } from "@twilio-paste/paragraph";
import { SkeletonLoader } from "@twilio-paste/skeleton-loader";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { Timeline, TimelineItem } from "../src";
import { TimelineItemGroup } from "../src/TimelineItemGroup";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Timeline",
  component: Timeline,
};

export const DefaultTimeline = (): React.ReactNode => {
  return (
    <Timeline>
      <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:01:00 pm">
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItem title="Event Title" timestamp="August 11, 2024 | 12:01:00 pm">
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItem title="Event Title" timestamp="August 12, 2024 | 12:01:00 pm">
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItem title="Event without timestamp">
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>
    </Timeline>
  );
};

export const TimelineWithIcon = (): React.ReactNode => {
  return (
    <Timeline>
      <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:01:00 pm" icon={UserIcon}>
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:02:00 pm" icon={UserIcon}>
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:03:00 pm">
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>
    </Timeline>
  );
};

export const TimelineCollapsible = (): React.ReactNode => {
  return (
    <Timeline>
      <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:01:00 pm" collapsible>
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:02:00 pm">
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:03:00 pm" collapsible>
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItem title="Event without timestamp" collapsible collapsibleHeading="See more details">
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>
    </Timeline>
  );
};

export const TimelineGrouped = (): React.ReactNode => {
  return (
    <Timeline>
      <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:01:00 pm">
        <Paragraph marginBottom="space0">Event details</Paragraph>
      </TimelineItem>

      <TimelineItemGroup timestamp="August 10, 2024">
        <TimelineItem title="Event Title" timestamp="12:01:00 pm">
          <Paragraph marginBottom="space0">Event details</Paragraph>
        </TimelineItem>

        <TimelineItem title="Event Title" timestamp="12:02:00 pm">
          <Paragraph marginBottom="space0">Event details</Paragraph>
        </TimelineItem>

        <TimelineItem title="Event without timestamp">
          <Paragraph marginBottom="space0">Event details</Paragraph>
        </TimelineItem>
      </TimelineItemGroup>
    </Timeline>
  );
};

const allItems = [
  { date: "August 10, 2024", text: "Event Title" },
  { date: "August 11, 2024", text: "Event Title" },
  { date: "August 12, 2024", text: "Event Title" },
  { date: "August 13, 2024", text: "Event Title" },
  { date: "August 14, 2024", text: "Event Title" },
  { date: "August 15, 2024", text: "Event Title" },
  { date: "August 16, 2024", text: "Event Title" },
  { date: "August 17, 2024", text: "Event Title" },
  { date: "August 18, 2024", text: "Event Title" },
  { date: "August 19, 2024", text: "Event Title" },
  { date: "August 20, 2024", text: "Event Title" },
  { date: "August 21, 2024", text: "Event Title" },
  { date: "August 22, 2024", text: "Event Title" },
  { date: "August 23, 2024", text: "Event Title" },
  { date: "August 24, 2024", text: "Event Title" },
  { date: "August 25, 2024", text: "Event Title" },
  { date: "August 26, 2024", text: "Event Title" },
  { date: "August 27, 2024", text: "Event Title" },
  { date: "August 28, 2024", text: "Event Title" },
  { date: "August 29, 2024", text: "Event Title" },
  { date: "August 30, 2024", text: "Event Title" },
  { date: "August 01, 2024", text: "Event Title" },
  { date: "August 02, 2024", text: "Event Title" },
  { date: "August 03, 2024", text: "Event Title" },
  { date: "August 04, 2024", text: "Event Title" },
  { date: "August 05, 2024", text: "Event Title" },
  { date: "August 06, 2024", text: "Event Title" },
  { date: "August 07, 2024", text: "Event Title" },
  { date: "August 08, 2024", text: "Event Title" },
  { date: "August 09, 2024", text: "Event Title" },
];

export const TimelineLoadMore = (): React.ReactNode => {
  const [items, setItems] = React.useState(allItems.slice(0, 3));

  const loadMore = (): void => {
    setItems(allItems.slice(0, items.length + 3));
  };

  return (
    <>
      <Timeline>
        {items.map((item) => (
          <TimelineItem key={item.text} timestamp={item.date} title={item.text}>
            <Paragraph marginBottom="space0">{item.text}</Paragraph>
          </TimelineItem>
        ))}
      </Timeline>
      {items.length < allItems.length ? (
        <Box marginTop="space30">
          <Button onClick={loadMore} variant="secondary" size="icon_small">
            Load more
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export const TimelineInfiniteScroll = (): React.ReactNode => {
  const [items, setItems] = React.useState(allItems.slice(0, 10));
  const [isLoading, setIsLoading] = React.useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>): void => {
    if (items.length >= allItems.length) return;

    const target = event.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      setIsLoading(true);
      setTimeout(() => {
        setItems(allItems.slice(0, items.length + 10));
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <Box maxHeight="480px" overflowY="auto" onScroll={handleScroll}>
      <Timeline>
        {items.map((item) => (
          <TimelineItem key={item.text} timestamp={item.date} title={item.text}>
            <Paragraph marginBottom="space0">{item.text}</Paragraph>
          </TimelineItem>
        ))}
      </Timeline>
      {isLoading ? (
        <Box display="flex" flexDirection="column" rowGap="space30" maxWidth="180px">
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </Box>
      ) : null}
    </Box>
  );
};

export const TimelineCustomization = (): React.ReactNode => {
  const currentTheme = useTheme();

  return (
    <Stack orientation="horizontal" spacing="space60">
      <CustomizationProvider
        theme={currentTheme}
        elements={{
          TIMELINE: {
            "li>div:first-child::after": {
              borderLeftWidth: "borderWidth30",
              borderLeftColor: "colorBorderStrong",
            },
          },
          TIMELINE_ITEM_ICON_DOT: {
            backgroundColor: "colorBackgroundBrand20",
            borderRadius: "borderRadius10",
          },
          TIMELINE_ITEM_TITLE: {
            color: "colorTextLink",
            fontStyle: "italic",
          },
          TIMELINE_ITEM_TIMESTAMP: {
            color: "colorTextWarning",
          },
          TIMELINE_ITEM_CONTENT: {
            borderLeftWidth: "borderWidth20",
            borderLeftStyle: "solid",
            borderLeftColor: "colorBorderStrong",
            paddingLeft: "space60",
          },
          TIMELINE_ITEM_ICON: {
            borderRadius: "borderRadiusCircle",
            borderWidth: "borderWidth10",
            borderStyle: "solid",
            borderColor: "colorBorderStrong",
            padding: "space20",
            width: "sizeIcon40",
            height: "sizeIcon40",
            color: "colorTextLink",
          },
        }}
      >
        <Timeline>
          <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:38:03 pm">
            <Paragraph marginBottom="space0">Event details</Paragraph>
          </TimelineItem>

          <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:48:03 pm">
            <Paragraph marginBottom="space0">Event details</Paragraph>
          </TimelineItem>

          <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:58:03 pm">
            <Paragraph marginBottom="space0">Event details</Paragraph>
          </TimelineItem>

          <TimelineItem title="Event without timestamp">
            <Paragraph marginBottom="space0">Event details</Paragraph>
          </TimelineItem>

          <TimelineItem title="Event Title" timestamp="August 10, 2024 | 12:08:03 pm" icon={UserIcon}>
            <Paragraph marginBottom="space0">Event details</Paragraph>
          </TimelineItem>
        </Timeline>
      </CustomizationProvider>
    </Stack>
  );
};

TimelineCustomization.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
