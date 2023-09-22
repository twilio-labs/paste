import * as React from 'react';
import { Text, safelySpreadTextProps } from '@twilio-paste/text';

import type { ListItemProps } from './types';

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, element = 'LIST_ITEM', ...props }, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        as="li"
        color="colorText"
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight40"
        marginBottom="space30"
        marginTop="space30"
        ref={ref}
      >
        {children}
      </Text>
    );
  },
);

ListItem.displayName = 'ListItem';

export { ListItem };
