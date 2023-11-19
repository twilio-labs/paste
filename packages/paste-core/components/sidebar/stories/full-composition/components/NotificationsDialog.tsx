import { NotificationIcon } from "@twilio-paste/icons/esm/NotificationIcon";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import * as React from "react";

export const NotificationsDialog: React.FC = () => {
  return (
    <PopoverContainer>
      <PopoverButton variant="secondary_icon" size="reset">
        <NotificationIcon decorative={false} title="Notifications" />
      </PopoverButton>
      <Popover aria-label="Notifications">Notifications</Popover>
    </PopoverContainer>
  );
};
