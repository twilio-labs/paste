import * as React from 'react';
import { Text } from '@twilio-paste/text';
import { Box } from '@twilio-paste/box';

export interface PProps {
  variant?: 'default' | 'lead';
}
export const P: React.FC<React.PropsWithChildren<PProps>> = ({ children, variant }) => {
  return (
    <Text
      as="p"
      marginBottom="space70"
      lineHeight={variant === 'lead' ? 'lineHeight40' : 'lineHeight30'}
      fontSize={variant === 'lead' ? 'fontSize40' : undefined}
    >
      {children}
    </Text>
  );
};

export const Pre: React.FC<React.PropsWithChildren> = (props) => {
  return <Box marginBottom="space70">{props.children}</Box>;
};
