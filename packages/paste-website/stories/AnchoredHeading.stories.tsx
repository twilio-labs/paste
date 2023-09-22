import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { AnchoredHeading } from '../src/components/Heading';

export const SectionHeaderAnchor = (): React.ReactNode => {
  /*
   * IDs of anchoredHeadings are created based on child content and when these stories
   * are side-by-side they need to be unique for accessibility reasons.
   */
  const uniqueHeadingIdentifier = useUID();
  return (
    <>
      <AnchoredHeading as="h2" variant="heading20">
        Page Section Header {uniqueHeadingIdentifier}
      </AnchoredHeading>
      <AnchoredHeading as="h3" variant="heading30">
        Smaller Page Section Header {uniqueHeadingIdentifier}
      </AnchoredHeading>
      <AnchoredHeading as="h4" variant="heading40">
        Even smaller Page Section Header {uniqueHeadingIdentifier}
      </AnchoredHeading>
    </>
  );
};

export default {
  title: 'Website/SectionHeaderAnchor',
};
