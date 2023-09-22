import * as React from 'react';
import { Box } from '@twilio-paste/box';

import { TableOfContents } from '../src/components/shortcodes/table-of-contents';
import type { HeadingData } from '../src/components/shortcodes/table-of-contents/types';

const TEST_HEADING: HeadingData[] = [
  { depth: 2, value: 'Guidelines' },
  { depth: 3, value: 'Accessibility' },
  { depth: 2, value: 'Examples' },
  { depth: 2, value: 'Usage Guide' },
  { depth: 3, value: 'API' },
];

export const DefaultTableOfContents = (): React.ReactNode => (
  <Box id="styled-site-body">
    <TableOfContents headings={TEST_HEADING} />
  </Box>
);
DefaultTableOfContents.parameters = {
  a11y: {
    // Disabling aXe on this story because of Hardocded Side Body Ids as a requirement
    disable: true,
  },
};

export default {
  title: 'Website/TableOfContents',
  component: TableOfContents,
};
