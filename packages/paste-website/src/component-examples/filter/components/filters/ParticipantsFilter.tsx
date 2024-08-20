import { Box } from "@twilio-paste/box";
import { HelpText } from "@twilio-paste/help-text";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import type { usePopoverState } from "@twilio-paste/popover";
import React from "react";

import { FilterAction } from "../FilterAction";

export const ParticipantsFilter: React.FC = ({
  onApply,
  popover,
  onRemove,
  value,
}: {
  onApply?: (
    type: string,
    value: {
      min: string;
      max: string;
    },
  ) => void;
  popover?: ReturnType<typeof usePopoverState>;
  onRemove?: () => void;
  value?: {
    min: string;
    max: string;
  };
}) => {
  const [minValue, setMinValue] = React.useState("");
  const [maxValue, setMaxValue] = React.useState("");
  const [showError, setShowError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMinValue(value?.min || "");
    setMaxValue(value?.max || "");
  }, [value, popover?.visible]);

  return (
    <Box>
      <Box display="flex" alignItems="center" columnGap="space50">
        <Box>
          <Label htmlFor="min_participants">Min. Participants</Label>
          <Input
            id="min_participants"
            name="min_participants"
            type="number"
            placeholder="ex. 1"
            onChange={(e) => {
              setShowError(null);
              setMinValue(e.target.value);
            }}
            value={minValue}
          />
        </Box>

        <Box>
          <Label htmlFor="max_participants">Max. Participants</Label>
          <Input
            id="max_participants"
            name="max_participants"
            type="number"
            placeholder="ex. 100"
            onChange={(e) => {
              setShowError(null);
              setMaxValue(e.target.value);
            }}
            value={maxValue}
            min={minValue}
          />
        </Box>
      </Box>

      {showError ? (
        <HelpText id="participants_help_text" variant="error">
          {showError}
        </HelpText>
      ) : undefined}

      <FilterAction
        onApply={() => {
          if (onApply && popover) {
            if ((minValue === "" && maxValue !== "") || (minValue !== "" && maxValue === "")) {
              setShowError("Please enter both min and max value");
              return;
            }

            if (minValue !== "" && maxValue !== "" && parseInt(minValue, 10) > parseInt(maxValue, 10)) {
              setShowError("Min value has to be less than max value");
              return;
            }

            onApply("participants", {
              min: minValue,
              max: maxValue,
            });
            popover.hide();
          }
        }}
        onClear={
          minValue !== "" || maxValue !== ""
            ? () => {
                setShowError(null);
                setMinValue("");
                setMaxValue("");
              }
            : null
        }
        onRemove={onRemove}
      />
    </Box>
  );
};
