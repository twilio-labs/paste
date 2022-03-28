import * as React from 'react';
import {AnchoredHeading} from '../src/components/Heading';

export const SectionHeaderAnchor = (): React.ReactNode => {
  return (
    <>
      <AnchoredHeading as="h2" variant="heading20">
        Page Section Header
      </AnchoredHeading>
      <AnchoredHeading as="h3" variant="heading30">
        Smaller Page Section Header
      </AnchoredHeading>
      <AnchoredHeading as="h4" variant="heading40">
        Even smaller Page Section Header
      </AnchoredHeading>
    </>
  );
};

export default {
  title: 'Website/SectionHeaderAnchor',
};
