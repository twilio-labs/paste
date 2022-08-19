import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {SwitchHelpTextProps} from './types';
import {HelpText} from '@twilio-paste/help-text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

const SwitchHelpText = React.forwardRef<HTMLSpanElement, SwitchHelpTextProps>(
  ({element = 'SWITCH_HELP_TEXT_WRAPPER', children, helpTextId, ...props}, ref) => {
    return (
      // @ts-ignore TODO:no 50px tokens
      <Box {...safelySpreadBoxProps(props)} element={element} marginLeft="50px" ref={ref}>
        <HelpText id={helpTextId} marginTop="space0">
          {children}
        </HelpText>
      </Box>
    );
  }
);

SwitchHelpText.displayName = 'SwitchHelpText';

SwitchHelpText.propTypes = {
  children: PropTypes.node.isRequired,
  helpTextId: PropTypes.string.isRequired,
  element: PropTypes.string,
};

export {SwitchHelpText};
