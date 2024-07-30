import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import type { usePopoverState } from "@twilio-paste/popover";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import React from "react";

export const RoomTypeFilter: React.FC = ({
  onApply,
  popover,
}: {
  onApply?: (type: string, value: string) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const roomTypes = ["Group", "WebRTC Go", "Peer to Peer"];
  const [selectedRoomType, setSelectedRoomType] = React.useState<null | string>(null);
  const [showError, setShowError] = React.useState(false);

  return (
    <Box>
      <RadioGroup
        name="room-type"
        legend="Room type"
        helpText="Select one option"
        onChange={(value) => {
          setSelectedRoomType(value);
        }}
        value={selectedRoomType || ""}
        errorText={showError && selectedRoomType === null ? "Please select a room type" : undefined}
      >
        {roomTypes.map((roomType) => (
          <Radio key={roomType} id={roomType} value={roomType} name="room-type" checked={selectedRoomType === roomType}>
            {roomType}
          </Radio>
        ))}
      </RadioGroup>
      <Box marginTop="space70">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
              if (selectedRoomType === null) {
                setShowError(true);
                return;
              }
              setShowError(false);
              if (onApply && popover) {
                onApply("room-type", selectedRoomType);
                popover.hide();
              }
            }}
          >
            Apply
          </Button>
          {selectedRoomType !== null ? (
            <Button
              variant="link"
              onClick={() => {
                setShowError(false);
                setSelectedRoomType(null);
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
