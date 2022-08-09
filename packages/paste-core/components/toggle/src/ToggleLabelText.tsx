import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ToggleLabelTextProps} from './types';
import {Text} from '@twilio-paste/text';

const ToggleLabelText = React.forwardRef<HTMLSpanElement, ToggleLabelTextProps>(
  ({element = 'TOGGLE_LABEL_TEXT', id, children, ...props}, ref) => {
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

ToggleLabelText.displayName = 'ToggleLabelText';

ToggleLabelText.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export {ToggleLabelText};
