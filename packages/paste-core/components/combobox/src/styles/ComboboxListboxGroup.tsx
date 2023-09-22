import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';

import type { ComboboxProps } from '../types';

export interface ComboboxListboxGroupProps extends Pick<ComboboxProps, 'groupLabelTemplate' | 'element'> {
  children: NonNullable<React.ReactNode>;
  groupName?: string | undefined;
}

const ComboboxListboxGroup = React.forwardRef<HTMLUListElement, ComboboxListboxGroupProps>(
  ({ children, element = 'COMBOBOX', groupName, groupLabelTemplate }, ref) => {
    return (
      <Box
        as="ul"
        ref={ref}
        element={`${element}_LIST`}
        role={!groupName ? 'presentation' : 'group'}
        aria-label={groupName}
        margin="space0"
        padding="space0"
        listStyleType="none"
        borderBottomStyle="solid"
        borderBottomWidth="borderWidth10"
        borderBottomColor="colorBorderWeaker"
        _last={{
          borderWidth: 'borderWidth0',
        }}
      >
        {groupName ? (
          <Box
            as="li"
            backgroundColor="colorBackgroundWeak"
            borderBottomStyle="solid"
            borderBottomWidth="borderWidth10"
            borderBottomColor="colorBorderWeaker"
            role="presentation"
            paddingY="space30"
            paddingLeft="space50"
            paddingRight="space50"
            element={`${element}_GROUPNAME`}
          >
            <Text
              as="span"
              fontSize="fontSize20"
              lineHeight="lineHeight20"
              fontWeight="fontWeightSemibold"
              color="colorText"
              element={`${element}_GROUPNAME_TEXT`}
            >
              {groupLabelTemplate ? groupLabelTemplate(groupName) : groupName}
            </Text>
          </Box>
        ) : null}
        {children}
      </Box>
    );
  },
);

ComboboxListboxGroup.displayName = 'ComboboxListboxGroup';

export { ComboboxListboxGroup };
