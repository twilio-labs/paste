import * as React from 'react';
import {Separator} from '@twilio-paste/separator';
import {Disclosure, DisclosureContent, DisclosureHeading} from '@twilio-paste/disclosure';

export const ChangelogRevealer: React.FC<{children: NonNullable<React.ReactNode>}> = ({children}) => {
  return (
    <>
      <Separator orientation="horizontal" verticalSpacing="space140" />
      <Disclosure>
        <DisclosureHeading as="h2" variant="heading20">
          Changelog
        </DisclosureHeading>
        <DisclosureContent>{children}</DisclosureContent>
      </Disclosure>
    </>
  );
};
