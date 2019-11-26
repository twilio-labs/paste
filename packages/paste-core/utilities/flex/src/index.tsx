import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {FlexboxProps} from '@twilio-paste/types';

const Flex: React.FC<FlexboxProps> = props => {
  return (
    <Box
      display="flex"
      alignContent={props.alignContent}
      alignItems={props.alignItems}
      alignSelf={props.alignSelf}
      flex={props.flex}
      flexBasis={props.flexBasis}
      flexDirection={props.flexDirection}
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      flexWrap={props.flexWrap}
      justifyContent={props.justifyContent}
      order={props.order}
    >
      {props.children}
    </Box>
  );
};

Flex.displayName = 'Flex';
export {Flex};
