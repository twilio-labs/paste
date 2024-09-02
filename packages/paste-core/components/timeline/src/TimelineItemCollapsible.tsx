import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  SummaryDetailToggleButton,
} from "@twilio-paste/summary-detail";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import type { TimelineItemProps } from "./types";

export const TimelineItemCollapsible = React.forwardRef<HTMLDivElement, Omit<TimelineItemProps, "title">>(
  ({ children, timestamp }, ref) => {
    return (
      <SummaryDetail ref={ref}>
        <SummaryDetailHeading>
          <SummaryDetailToggleButton />
          <SummaryDetailHeadingContent>
            <Text
              as="span"
              fontSize="fontSize20"
              color="colorTextWeak"
              fontWeight="fontWeightMedium"
              lineHeight="lineHeight20"
              marginLeft="spaceNegative30"
            >
              {timestamp}
            </Text>
          </SummaryDetailHeadingContent>
        </SummaryDetailHeading>
        <SummaryDetailContent>{children}</SummaryDetailContent>
      </SummaryDetail>
    );
  },
);
TimelineItemCollapsible.displayName = "TimelineItemCollapsible";
