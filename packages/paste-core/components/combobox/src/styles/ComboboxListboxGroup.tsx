import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {ComboboxProps} from '../types';

export interface ComboboxListboxGroupProps extends Pick<ComboboxProps, 'groupLabelTemplate' | 'element'> {
  children: NonNullable<React.ReactNode>;
  groupName?: string | undefined;
}

const ComboboxListboxGroup = React.forwardRef<HTMLDivElement, ComboboxListboxGroupProps>(
  ({children, element = 'COMBOBOX', groupName, groupLabelTemplate}, ref) => {
    return (
      <Box
        as="ul"
        element={`${element}_LIST`}
        role={!groupName ? 'presentation' : 'group'}
        aria-label={groupName}
        ref={ref}
        margin="space0"
        padding="space0"
        listStyleType="none"
      >
        {groupName ? (
          <Box as="li" role="presentation" paddingY="space30" paddingX="space70" element={`${element}_GROUPNAME`}>
            <Text as="span" fontWeight="fontWeightBold" element={`${element}_GROUPNAME_TEXT`}>
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
