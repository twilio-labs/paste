import { Box } from '@twilio-paste/box';
import { Disclosure, DisclosureContent, DisclosureHeading } from '@twilio-paste/disclosure';
import { Separator } from '@twilio-paste/separator';
import * as React from 'react';

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
