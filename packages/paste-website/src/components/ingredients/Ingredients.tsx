import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Card } from '@twilio-paste/card';

interface ListProps {
  children: React.ReactNode;
}

const Ingredients: React.FC<ListProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="row" columnGap="space130" justifyContent="center" marginBottom="space70">
      {children}
    </Box>
  );
};

const Required: React.FC<ListProps> = ({ children }) => {
  return (
    <Box maxWidth="size40">
      <Card padding="space0">
        <Box paddingX="space70" paddingBottom="space40" paddingTop="space60">
          <strong>Required</strong>
          {children}
        </Box>
      </Card>
    </Box>
  );
};

const Related: React.FC<ListProps> = ({ children }) => {
  return (
    <Box maxWidth="size40">
      <Card padding="space0">
        <Box paddingX="space70" paddingBottom="space40" paddingTop="space60">
          <strong>Related</strong>
          {children}
        </Box>
      </Card>
    </Box>
  );
};

export { Ingredients, Required, Related };
