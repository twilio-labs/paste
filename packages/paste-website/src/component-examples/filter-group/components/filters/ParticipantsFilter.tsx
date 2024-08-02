import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { HelpText } from "@twilio-paste/help-text";
import { DeleteIcon } from "@twilio-paste/icons/esm/DeleteIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import type { usePopoverState } from "@twilio-paste/popover";
import React from "react";

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

      <Box marginTop="space70" display="flex" alignItems="center" justifyContent="space-between">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
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
          >
            Apply
          </Button>
          {minValue !== "" || maxValue !== "" ? (
            <Button
              variant="link"
              onClick={() => {
                setShowError(false);
                setMinValue("");
                setMaxValue("");
              }}
            >
              Clear all
            </Button>
          ) : (
            <></>
          )}
        </ButtonGroup>
        {onRemove ? (
          <Button variant="link" onClick={onRemove}>
            <DeleteIcon decorative />
            <span>Remove filter</span>
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};
