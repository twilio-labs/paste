import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {FlexboxProps} from '@twilio-paste/types';

export interface FlexProps extends Box {}

// https://blog.buildo.io/flexview-the-easiest-way-to-use-flex-with-react-c698db55926a
const Flex: React.FC<FlexboxProps> = props => {
  return (
    <Box
      display="flex"
      alignItems={props.alignItems}
      alignContent={props.alignContent}
      justifyItems={props.justifyItems}
      justifyContent={props.justifyContent}
      flexWrap={props.flexWrap}
      flexDirection={props.flexDirection}
      flex={props.flex}
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      flexBasis={props.flexBasis}
      justifySelf={props.justifySelf}
      alignSelf={props.alignSelf}
      order={props.order}
    />
  );
};

Flex.displayName = 'Flex';
export {Flex};
