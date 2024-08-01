import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DatePicker } from "@twilio-paste/date-picker";
import { Label } from "@twilio-paste/label";
import type { usePopoverState } from "@twilio-paste/popover";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

import { DATE_RANGES } from "../../constants";

export const DateRangeFilter: React.FC = ({
  onApply,
  popover,
}: {
  onApply?: (
    type: string,
    value: {
      startDate: string;
      endDate: string;
    },
  ) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const startDateID = useUID();
  const endDateID = useUID();

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<string>("");

  function getStartDate(): string {
    switch (selectedDate) {
      case "1": {
        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1);
        return oneDayAgo.toISOString();
      }
      case "7": {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        return sevenDaysAgo.toISOString();
      }
      case "14": {
        const fourteenDaysAgo = new Date();
        fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
        return fourteenDaysAgo.toISOString();
      }
      default: {
        return startDate;
      }
    }
  }

  return (
    <Box>
      <RadioGroup
        name="date-range"
        legend="Date range"
        onChange={(value) => {
          setSelectedDate(value);
        }}
        value={selectedDate || ""}
      >
        {DATE_RANGES.map(({ name, value }) => (
          <Radio key={value} id={value} value={value} name="date-range" checked={selectedDate === value}>
            {name}
          </Radio>
        ))}
      </RadioGroup>
      {selectedDate === "custom" ? (
        <Box display="flex" columnGap="space50" marginTop="space50">
          <Box>
            <Label htmlFor={startDateID}>Start</Label>
            <DatePicker
              id={startDateID}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              value={startDate}
            />
          </Box>
          <Box>
            <Label htmlFor={endDateID}>End</Label>
            <DatePicker
              id={endDateID}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
              value={endDate}
            />
          </Box>
        </Box>
      ) : (
        <></>
      )}

      <Box marginTop="space70">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
              if (onApply && popover) {
                if (selectedDate === "" || (selectedDate === "custom" && (startDate === "" || endDate === ""))) {
                  popover.hide();
                  return;
                }

                onApply("date-range", {
                  startDate: selectedDate === "custom" ? `${startDate}T00:00:00` : getStartDate(),
                  endDate: selectedDate === "custom" ? `${endDate}T00:00:00` : new Date().toISOString(),
                });
                popover.hide();
              }
            }}
          >
            Apply
          </Button>
          {selectedDate !== null ? (
            <Button
              variant="link"
              onClick={() => {
                setStartDate("");
                setEndDate("");
                setSelectedDate("");
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
