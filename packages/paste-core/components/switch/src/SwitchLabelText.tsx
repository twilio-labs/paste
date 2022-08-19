import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {SwitchLabelTextProps} from './types';
import {Text} from '@twilio-paste/text';

const SwitchLabelText = React.forwardRef<HTMLSpanElement, SwitchLabelTextProps>(
  ({element = 'SWITCH_LABEL_TEXT_WRAPPER', id, children, ...props}, ref) => {
    return (
      <Text
        as="span"
        id={id}
        color="currentColor"
        marginLeft="space30"
        fontWeight="fontWeightMedium"
        element={element}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

SwitchLabelText.displayName = 'SwitchLabelText';

SwitchLabelText.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export {SwitchLabelText};
