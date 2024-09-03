import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { Text } from "@twilio-paste/text";
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
      <TimelineItem title="Start" timestamp="2018-03-01:10:00">
        Event details
      </TimelineItem>

      <TimelineItem title="Inprogress" timestamp="2018-03-01:12:00">
        Event details
      </TimelineItem>

      <TimelineItem title="Complete" timestamp="2018-03-01:14:00">
        Event details
      </TimelineItem>

      <TimelineItem title="Item without timestamp">Event details</TimelineItem>
    </Timeline>
  );
};

export const HorizontalTimeline = (): React.ReactNode => {
  return (
    <Timeline orientation="horizontal">
      <TimelineItem title="Start" timestamp="2018-03-01:10:00">
        Event details
      </TimelineItem>

      <TimelineItem title="Inprogress" timestamp="2018-03-01:12:00">
        Event details
      </TimelineItem>

      <TimelineItem title="Complete" timestamp="2018-03-01:14:00">
        Event details
      </TimelineItem>
    </Timeline>
  );
};

export const TimelineWithIcon = (): React.ReactNode => {
  return (
    <Timeline>
      <TimelineItem title="Start" timestamp="2018-03-01:10:00" icon={UserIcon}>
        Event details
      </TimelineItem>

      <TimelineItem title="Inprogress" timestamp="2018-03-01:12:00" icon={UserIcon}>
        Event details
      </TimelineItem>

      <TimelineItem title="Complete" timestamp="2018-03-01:14:00">
        Event details
      </TimelineItem>
    </Timeline>
  );
};

export const TimelineCollapsible = (): React.ReactNode => {
  return (
    <Timeline>
      <TimelineItem title="Start" timestamp="2018-03-01:10:00" collapsible>
        Event details
      </TimelineItem>

      <TimelineItem title="Inprogress" timestamp="2018-03-01:12:00">
        Event details
      </TimelineItem>

      <TimelineItem title="Complete" timestamp="2018-03-01:14:00" collapsible>
        Event details
      </TimelineItem>

      <TimelineItem title="Item without timestamp" collapsible collapsibleHeading="custom heading">
        Event details
      </TimelineItem>
    </Timeline>
  );
};

export const TimelineGrouped = (): React.ReactNode => {
  return (
    <Timeline>
      <TimelineItem title="Start" timestamp="2018-03-01:10:00">
        Event details
      </TimelineItem>

      <TimelineItemGroup timestamp="2018-03-01">
        <TimelineItem title="Inprogress" timestamp="12:00">
          Event details
        </TimelineItem>

        <TimelineItem title="Complete" timestamp="14:00">
          Event details
        </TimelineItem>

        <TimelineItem title="Item without timestamp">Event details</TimelineItem>
      </TimelineItemGroup>
    </Timeline>
  );
};

const allItems = [
  { date: "2018-03-01:10:00", text: "Item 1" },
  { date: "2018-03-01:12:00", text: "Item 2" },
  { date: "2018-03-01:15:30", text: "Item 3" },
  { date: "2018-03-01:16:45", text: "Item 4" },
  { date: "2018-03-01:18:20", text: "Item 5" },
  { date: "2018-03-01:19:10", text: "Item 6" },
  { date: "2018-03-01:20:00", text: "Item 7" },
  { date: "2018-03-01:21:15", text: "Item 8" },
  { date: "2018-03-01:22:30", text: "Item 9" },
  { date: "2018-03-01:23:45", text: "Item 10" },
  { date: "2018-03-02:10:00", text: "Item 11" },
  { date: "2018-03-02:12:00", text: "Item 12" },
  { date: "2018-03-02:15:30", text: "Item 13" },
  { date: "2018-03-02:16:45", text: "Item 14" },
  { date: "2018-03-02:18:20", text: "Item 15" },
  { date: "2018-03-02:19:10", text: "Item 16" },
  { date: "2018-03-02:20:00", text: "Item 17" },
  { date: "2018-03-02:21:15", text: "Item 18" },
  { date: "2018-03-02:22:30", text: "Item 19" },
  { date: "2018-03-02:23:45", text: "Item 20" },
  { date: "2018-03-03:10:00", text: "Item 21" },
  { date: "2018-03-03:12:00", text: "Item 22" },
  { date: "2018-03-03:15:30", text: "Item 23" },
  { date: "2018-03-03:16:45", text: "Item 24" },
  { date: "2018-03-03:18:20", text: "Item 25" },
  { date: "2018-03-03:19:10", text: "Item 26" },
  { date: "2018-03-03:20:00", text: "Item 27" },
  { date: "2018-03-03:21:15", text: "Item 28" },
  { date: "2018-03-03:22:30", text: "Item 29" },
  { date: "2018-03-03:23:45", text: "Item 30" },
];

export const TimelineLoadMore = (): React.ReactNode => {
  const [items, setItems] = React.useState(allItems.slice(0, 3));

  const loadMore = (): void => {
    setItems(allItems.slice(0, items.length + 3));
  };

  return (
    <Timeline orientation="vertical">
      {items.map((item) => (
        <TimelineItem key={item.text} timestamp={item.date} title={item.text}>
          {item.text}
        </TimelineItem>
      ))}
      {items.length < allItems.length ? (
        <Box marginTop="space30">
          <Button onClick={loadMore} variant="secondary" size="icon_small">
            More items
          </Button>
        </Box>
      ) : null}
    </Timeline>
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
      <Timeline orientation="vertical">
        {items.map((item) => (
          <TimelineItem key={item.text} timestamp={item.date} title={item.text}>
            {item.text}
          </TimelineItem>
        ))}
      </Timeline>
      {isLoading ? (
        <Text as="div" padding="space30">
          Loading...
        </Text>
      ) : null}
    </Box>
  );
};
