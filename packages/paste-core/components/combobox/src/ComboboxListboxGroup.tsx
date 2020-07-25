import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

export interface ComboboxListboxGroupProps {
  children: NonNullable<React.ReactNode>;
  groupName: string;
}

const ComboboxListboxGroup: React.FC<ComboboxListboxGroupProps> = ({children, groupName}) => {
  return (
    <Box as="div" role="group" aria-label={groupName} paddingTop="space20">
      <Box
        as="div"
        role="presentation"
        padding="space30"
        paddingBottom="space20"
        paddingLeft="space50"
        paddingRight="space50"
      >
        <Text as="span" fontWeight="fontWeightSemibold">
          {groupName}
        </Text>
      </Box>
      {children}
    </Box>
  );
};

ComboboxListboxGroup.displayName = 'ComboboxListboxGroup';

ComboboxListboxGroup.propTypes = {
  children: PropTypes.node.isRequired,
  groupName: PropTypes.string.isRequired,
};

export {ComboboxListboxGroup};
