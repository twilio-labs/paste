import { Box } from "@twilio-paste/box";
import { DatePicker } from "@twilio-paste/date-picker";
import { Heading } from "@twilio-paste/heading";
import { HelpText } from "@twilio-paste/help-text";
import { Label } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import type { usePopoverState } from "@twilio-paste/popover";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

import { FilterAction } from "../FilterAction";

export const DateRangeFilter: React.FC = ({
  onApply,
  popover,
  value,
}: {
  onApply?: (
    type: string,
    value: {
      startDate: string;
      endDate: string;
    },
  ) => void;
  popover?: ReturnType<typeof usePopoverState>;
  value?: {
    startDate: string;
    endDate: string;
  };
}) => {
  const startDateID = useUID();
  const endDateID = useUID();

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  React.useEffect(() => {
    setStartDate(value?.startDate || "");
    setEndDate(value?.endDate || "");
  }, [value, popover?.visible]);

  return (
    <Box>
      <Heading variant="heading40" as="h2">
        Custom date range
      </Heading>
      <Paragraph>All dates/times in UTC. Usage data available up to 7 days.</Paragraph>
      <Box display="flex" flexDirection="column" rowGap="space70">
        <Box display="flex" columnGap="space50">
          <Box>
            <Label htmlFor={startDateID}>Start date</Label>
            <DatePicker
              id={startDateID}
              onChange={(e) => {
                setStartDate(e.target.value);
                setShowError(false);
              }}
              value={startDate}
            />
          </Box>
          <Box>
            <Label htmlFor={endDateID}>End date</Label>
            <DatePicker
              id={endDateID}
              onChange={(e) => {
                setEndDate(e.target.value);
                setShowError(false);
              }}
              value={endDate}
            />
          </Box>
        </Box>
      </Box>

      {showError ? (
        <HelpText id="participants_help_text" variant="error">
          Please enter both start and end date
        </HelpText>
      ) : undefined}

      <FilterAction
        onApply={() => {
          if (onApply && popover) {
            if ((startDate === "" && endDate !== "") || (startDate !== "" && endDate === "")) {
              setShowError(true);
              return;
            }

            onApply("dateCompleted", {
              startDate,
              endDate,
            });
            popover.hide();
          }
        }}
        onClear={
          startDate !== "" || endDate !== ""
            ? () => {
                setStartDate("");
                setEndDate("");
                setShowError(false);
              }
            : null
        }
      />
    </Box>
  );
};
