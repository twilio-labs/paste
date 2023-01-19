import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

import type {ComboboxProps} from '../types';

export interface ComboboxListboxGroupProps extends Pick<ComboboxProps, 'groupLabelTemplate' | 'element'> {
  children: NonNullable<React.ReactNode>;
  groupName?: string | undefined;
}

const ComboboxListboxGroup = React.forwardRef<HTMLUListElement, ComboboxListboxGroupProps>(
  ({children, element = 'COMBOBOX', groupName, groupLabelTemplate}, ref) => {
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
      >
        {groupName ? (
          <Box
            as="li"
            backgroundColor="colorBackground"
            role="presentation"
            paddingY="space30"
            paddingLeft="space50"
            paddingRight="space50"
            element={`${element}_GROUPNAME`}
          >
            <Text as="span" fontWeight="fontWeightBold" color="colorTextWeak" element={`${element}_GROUPNAME_TEXT`}>
              {groupLabelTemplate ? groupLabelTemplate(groupName) : groupName}
            </Text>
          </Box>
        ) : null}
        {children}
      </Box>
    );
  }
);

ComboboxListboxGroup.displayName = 'ComboboxListboxGroup';

ComboboxListboxGroup.propTypes = {
  children: PropTypes.node.isRequired,
  groupName: PropTypes.string,
  element: PropTypes.string,
};

export {ComboboxListboxGroup};
