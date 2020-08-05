import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {ComboboxProps} from './types';

export interface ComboboxListboxGroupProps extends Pick<ComboboxProps, 'groupLabelTemplate'> {
  children: NonNullable<React.ReactNode>;
  groupName: string;
}

const ComboboxListboxGroup: React.FC<ComboboxListboxGroupProps> = ({children, groupName, groupLabelTemplate}) => {
  return (
    <Box as="div" role="group" aria-label={groupName}>
      <Box as="div" role="presentation" paddingY="space30" paddingX="space70">
        <Text as="span" fontWeight="fontWeightBold">
          {groupLabelTemplate ? groupLabelTemplate(groupName) : groupName}
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
