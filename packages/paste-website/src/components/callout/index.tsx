import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {StyledCallout} from './styles';
import {CalloutProps, CalloutTitleProps} from './types';

const CalloutTitle: React.FC<CalloutTitleProps> = ({as, children}) => (
  <Text as={as} marginBottom="space40" fontSize="fontSize20">
    {children}
  </Text>
);

const Callout: React.FC<CalloutProps> = props => {
  return (
    <StyledCallout
      marginTop="space60"
      marginBottom="space60"
      paddingTop="space40"
      paddingRight="space60"
      paddingBottom="space40"
      paddingLeft="space60"
      variant={props.variant}
    >
      {props.children}
    </StyledCallout>
  );
};

Callout.defaultProps = {
  variant: 'primary',
};

export {Callout, CalloutTitle};
