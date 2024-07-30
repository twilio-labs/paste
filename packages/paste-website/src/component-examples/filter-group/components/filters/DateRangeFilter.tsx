import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DatePicker } from "@twilio-paste/date-picker";
import { Heading } from "@twilio-paste/heading";
import { HelpText } from "@twilio-paste/help-text";
import { Label } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import type { usePopoverState } from "@twilio-paste/popover";
import { TimePicker } from "@twilio-paste/time-picker";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

export const DateRangeFilter: React.FC = ({
  onApply,
  popover,
}: {
  onApply?: (
    type: string,
    value: {
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
    },
  ) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const startDateID = useUID();
  const endDateID = useUID();
  const startTimeID = useUID();
  const endTimeID = useUID();

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const [showError, setShowError] = React.useState(false);

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
                setShowError(false);
                setStartDate(e.target.value);
              }}
              value={startDate}
            />
          </Box>
          <Box>
            <Label htmlFor={startTimeID}>Start time</Label>
            <TimePicker
              id={startTimeID}
              onChange={(e) => {
                setShowError(false);
                setStartTime(e.target.value);
              }}
              value={startTime}
            />
          </Box>
        </Box>

        <Box display="flex" columnGap="space50">
          <Box>
            <Label htmlFor={endDateID}>End date</Label>
            <DatePicker
              id={endDateID}
              onChange={(e) => {
                setShowError(false);
                setEndDate(e.target.value);
              }}
              value={endDate}
            />
          </Box>
          <Box>
            <Label htmlFor={endTimeID}>End time</Label>
            <TimePicker
              id={endTimeID}
              onChange={(e) => {
                setShowError(false);
                setEndTime(e.target.value);
              }}
              value={endTime}
            />
          </Box>
        </Box>
      </Box>
      {showError ? (
        <HelpText id="date_time_help_text" variant="error">
          Please fill in all fields
        </HelpText>
      ) : null}

      <Box marginTop="space70">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
              if (startDate === "" || endDate === "" || startTime === "" || endTime === "") {
                setShowError(true);
                return;
              }
              setShowError(false);
              if (onApply && popover) {
                onApply("date-time", {
                  startDate,
                  startTime,
                  endDate,
                  endTime,
                });
                popover.hide();
              }
            }}
          >
            Apply
          </Button>
          {startDate !== "" || endDate !== "" || startTime !== "" || endTime !== "" ? (
            <Button
              variant="link"
              onClick={() => {
                setShowError(false);
                setStartDate("");
                setEndDate("");
                setStartTime("");
                setEndTime("");
              }}
            >
              Clear all
            </Button>
          ) : (
            <></>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
};
