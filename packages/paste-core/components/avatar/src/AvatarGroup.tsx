import { Stack } from '@twilio-paste/stack';
import * as React from 'react';

import type { AvatarGroupProps } from './types';
import { getGroupSpacing } from './utils';

export const AvatarGroupContext = React.createContext<Omit<AvatarGroupProps, 'children'>>({} as AvatarGroupProps);

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ variant, size, children, element = 'AVATAR_GROUP' }, ref) => {
    return (
      <AvatarGroupContext.Provider value={{ variant, size }}>
        <Stack orientation="horizontal" spacing={getGroupSpacing(size, variant)} element={element} ref={ref}>
          {children}
        </Stack>
      </AvatarGroupContext.Provider>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';
