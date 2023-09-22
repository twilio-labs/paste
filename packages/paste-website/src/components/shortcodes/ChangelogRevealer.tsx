import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Separator } from '@twilio-paste/separator';
import { Disclosure, DisclosureContent, DisclosureHeading } from '@twilio-paste/disclosure';

export const ChangelogRevealer: React.FC<React.PropsWithChildren<{ children: NonNullable<React.ReactNode> }>> = ({
  children,
}) => {
  return (
    <Box id="component-changelog">
      <Separator orientation="horizontal" verticalSpacing="space140" />
      <Disclosure>
        <DisclosureHeading as="h2" variant="heading20" data-cy="changelog-revealer-heading">
          Changelog
        </DisclosureHeading>
        <DisclosureContent data-cy="changelog-revealer-content">{children}</DisclosureContent>
      </Disclosure>
    </Box>
  );
};
