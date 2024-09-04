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
  ({ children, timestamp, element }, ref) => {
    return (
      <SummaryDetail element={`${element}_SUMMARY_DETAIL`} ref={ref}>
        <SummaryDetailHeading element={`${element}_SUMMARY_DETAIL_HEADING`}>
          <SummaryDetailToggleButton element={`${element}_SUMMARY_DETAIL_TOGGLE_BUTTON`} />
          <SummaryDetailHeadingContent element={`${element}_SUMMARY_DETAIL_HEADING_CONTENT`}>
            <Text
              element={`${element}_TIMESTAMP`}
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
        <SummaryDetailContent element={`${element}_SUMMARY_DETAIL_CONTENT`}>{children}</SummaryDetailContent>
      </SummaryDetail>
    );
  },
);
TimelineItemCollapsible.displayName = "TimelineItemCollapsible";
