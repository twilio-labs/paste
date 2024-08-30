import { Box } from "@twilio-paste/box";
import { DatePicker } from "@twilio-paste/date-picker";
import { HelpText } from "@twilio-paste/help-text";
import { Label } from "@twilio-paste/label";
import type { usePopoverState } from "@twilio-paste/popover";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

import { DATE_RANGES } from "../../constants";
import { FilterAction } from "../FilterAction";

export const CustomFilter: React.FC = ({
  onApply,
  popover,
  value: Value,
}: {
  onApply?: (
    type: string,
    value: {
      startDate: string;
      endDate: string;
      type: string;
    },
  ) => void;
  popover?: ReturnType<typeof usePopoverState>;
  value?: {
    startDate: string;
    endDate: string;
    type: string;
  };
}) => {
  const startDateID = useUID();
  const endDateID = useUID();

  const [startDate, setStartDate] = React.useState(Value?.startDate || "");
  const [endDate, setEndDate] = React.useState(Value?.endDate || "");
  const [selectedDate, setSelectedDate] = React.useState<string>(Value?.type || "");
  const [showError, setShowError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setStartDate(Value?.startDate || "");
    setEndDate(Value?.endDate || "");
    setSelectedDate(Value?.type || "");
  }, [Value, popover?.visible]);

  function getStartDate(): string {
    switch (selectedDate) {
      case "1": {
        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1);
        return oneDayAgo.toISOString().split("T")[0];
      }
      case "7": {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        return sevenDaysAgo.toISOString().split("T")[0];
      }
      case "14": {
        const fourteenDaysAgo = new Date();
        fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
        return fourteenDaysAgo.toISOString().split("T")[0];
      }
      default: {
        return startDate;
      }
    }
  }

  return (
    <Box>
      <RadioGroup
        name="custom"
        legend="Date range"
        onChange={(value) => {
          setSelectedDate(value);
          setShowError(null);
        }}
        value={selectedDate}
      >
        {DATE_RANGES.map(({ name, value }) => (
          <Radio key={value} id={value} value={value} name="custom" checked={selectedDate === value}>
            {name}
          </Radio>
        ))}
      </RadioGroup>
      {selectedDate === "Custom" ? (
        <Box display="flex" columnGap="space50" marginTop="space50">
          <Box>
            <Label htmlFor={startDateID}>Start</Label>
            <DatePicker
              id={startDateID}
              onChange={(e) => {
                setStartDate(e.target.value);
                setShowError(null);
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
                setShowError(null);
              }}
              value={endDate}
            />
          </Box>
        </Box>
      ) : (
        <></>
      )}

      {showError ? (
        <Box marginTop="space50">
          <HelpText variant="error">{showError}</HelpText>
        </Box>
      ) : null}

      <FilterAction
        onApply={() => {
          if (onApply && popover) {
            if (selectedDate === "Custom" && (startDate === "" || endDate === "")) {
              setShowError("Please enter custom date");
              return;
            }

            if (selectedDate === "Custom" && startDate > endDate) {
              setShowError("End date has to be after the start date");
              return;
            }

            setShowError(null);

            onApply("custom", {
              startDate: selectedDate === "Custom" ? startDate : getStartDate(),
              endDate: selectedDate === "Custom" ? endDate : new Date().toISOString().split("T")[0],
              type: selectedDate,
            });
            popover.hide();
          }
        }}
        onClear={
          selectedDate !== null
            ? () => {
                setStartDate("");
                setEndDate("");
                setSelectedDate("");
                setShowError(null);
              }
            : null
        }
      />
    </Box>
  );
};