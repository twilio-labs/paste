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
}) => {
  const [minValue, setMinValue] = React.useState("");
  const [maxValue, setMaxValue] = React.useState("");
  const [showError, setShowError] = React.useState(false);

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
              setShowError(false);
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
              setShowError(false);
              setMaxValue(e.target.value);
            }}
            value={maxValue}
            min={minValue}
          />
        </Box>
      </Box>

      {showError ? (
        <HelpText id="participants_help_text" variant="error">
          Please enter both min and max value
        </HelpText>
      ) : undefined}

      <FilterAction
        onApply={() => {
          if (onApply && popover) {
            if (minValue === "" && maxValue === "") {
              popover.hide();
              return;
            }

            if (minValue === "" || maxValue === "") {
              setShowError(true);
              return;
            }

            onApply("participants", {
              min: minValue,
              max: maxValue,
            });
            popover.hide();
          }
        }}
        clearCondition={minValue !== "" || maxValue !== ""}
        onClear={() => {
          setShowError(false);
          setMinValue("");
          setMaxValue("");
        }}
        onRemove={onRemove}
      />
    </Box>
  );
};
