import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Card } from '@twilio-paste/card';
import { Heading } from '@twilio-paste/heading';

export const ProjectCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Card element="PROJECT_CARD" padding="space90">
      <Box display="flex" flexDirection="column" height="100%" justifyContent="space-between">
        {children}
      </Box>
    </Card>
  );
};
export const ProjectCardBody: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Box element="PROJECT_BODY">{children}</Box>;
};
export const ProjectHeading: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Heading as="h3" element="PROJECT_HEADING" variant="heading30">
      {children}
    </Heading>
  );
};
export const ProjectLogo: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box element="PROJECT_LOGO" alignItems="center" marginBottom="space40" display="flex" columnGap="space50">
      {children}
    </Box>
  );
};
