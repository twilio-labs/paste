import * as React from 'react';
import { Popover, PopoverButton, PopoverContainer } from '@twilio-paste/popover';
import { NotificationIcon } from '@twilio-paste/icons/esm/NotificationIcon';

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
