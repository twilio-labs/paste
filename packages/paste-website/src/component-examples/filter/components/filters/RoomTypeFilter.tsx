import { Box } from "@twilio-paste/box";
import type { usePopoverState } from "@twilio-paste/popover";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import React from "react";

import { FilterAction } from "../FilterAction";

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
        name="roomType"
        legend="Room type"
        helpText="Select one option"
        onChange={(value) => {
          setSelectedRoomType(value);
        }}
        value={selectedRoomType}
      >
        {roomTypes.map((roomType) => (
          <Radio key={roomType} id={roomType} value={roomType} name="roomType" checked={selectedRoomType === roomType}>
            {roomType}
          </Radio>
        ))}
      </RadioGroup>

      <FilterAction
        onApply={() => {
          if (onApply && popover) {
            if (selectedRoomType === "") {
              popover.hide();
              return;
            }

            onApply("roomType", selectedRoomType);
            popover.hide();
          }
        }}
        onClear={
          selectedRoomType !== ""
            ? () => {
                setSelectedRoomType("");
              }
            : null
        }
      />
    </Box>
  );
};
