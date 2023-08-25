import * as React from 'react';

import {Text} from '@twilio-paste/text';

import type {BaseListProps} from './types';

const List = React.forwardRef<HTMLOListElement | HTMLUListElement, BaseListProps>(
  ({as, children, element = 'LIST', listStyleType = 'disc', ...props}, ref) => {
    return (
      <Text
        {...props}
        as={as}
        color="colorText"
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight40"
        marginLeft="space70"
        listStyleType={listStyleType}
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);

List.displayName = 'List';

export {List};
