import { Box } from "@twilio-paste/box";
import type { usePopoverState } from "@twilio-paste/popover";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

import { FilterAction } from "../FilterAction";

export const RoomTypeFilter: React.FC = ({
  onApply,
  popover,
  value,
}: {
  onApply?: (type: string, value: string) => void;
  popover?: ReturnType<typeof usePopoverState>;
  value?: string;
}) => {
  const roomTypes = ["Group", "WebRTC Go", "Peer to Peer"];
  const [selectedRoomType, setSelectedRoomType] = React.useState<string>("");

  React.useEffect(() => {
    setSelectedRoomType(value || "");
  }, [value, popover?.visible]);

  const uid = useUID();

  return (
    <Box>
      <RadioGroup
        name={`roomType-${uid}`}
        legend="Room type"
        helpText="Select one option"
        onChange={setSelectedRoomType}
        value={selectedRoomType}
      >
        {roomTypes.map((roomType) => (
          <Radio
            key={roomType}
            id={roomType}
            value={roomType}
            name={`roomType-${uid}`}
            checked={selectedRoomType === roomType}
          >
            {roomType}
          </Radio>
        ))}
      </RadioGroup>

      <FilterAction
        onApply={() => {
          if (onApply && popover) {
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
