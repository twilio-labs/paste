import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {ComboboxProps} from '../types';

export interface ComboboxListboxGroupProps extends Pick<ComboboxProps, 'groupLabelTemplate'> {
  children: NonNullable<React.ReactNode>;
  groupName?: string | undefined;
}

const ComboboxListboxGroup = React.forwardRef<HTMLDivElement, ComboboxListboxGroupProps>(
  ({children, groupName, groupLabelTemplate}, ref) => {
    return (
      <Box
        as="ul"
        role={!groupName ? 'presentation' : 'group'}
        aria-label={groupName}
        ref={ref}
        margin="space0"
        padding="space0"
        listStyleType="none"
      >
        {groupName ? (
          <Box as="li" role="presentation" paddingY="space30" paddingX="space70">
            <Text as="span" fontWeight="fontWeightBold">
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
};

export {ComboboxListboxGroup};
