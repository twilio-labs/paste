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
  const [selectedRoomType, setSelectedRoomType] = React.useState<string>("");

  return (
    <Box>
      <RadioGroup
        name="room-type"
        legend="Room type"
        helpText="Select one option"
        onChange={(value) => {
          setSelectedRoomType(value);
        }}
        value={selectedRoomType}
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
              if (onApply && popover) {
                if (selectedRoomType === "") {
                  popover.hide();
                  return;
                }

                onApply("room-type", selectedRoomType);
                popover.hide();
              }
            }}
          >
            Apply
          </Button>
          {selectedRoomType !== "" ? (
            <Button
              variant="link"
              onClick={() => {
                setSelectedRoomType("");
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
