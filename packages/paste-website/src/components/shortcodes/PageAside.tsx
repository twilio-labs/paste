import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {TableOfContents} from './table-of-contents';
import {FeedbackPopover} from './feedback-popover';

interface PageAsideProps {
  data: {
    fileAbsolutePath: string;
    frontmatter: {
      slug: string;
      title: string;
    };
    headings?: [
      {
        value: string;
        depth: number;
      }
    ];
  };
}

const PageAside: React.FC<PageAsideProps> = ({data}) => {
  return (
    <Box
      order={2}
      marginLeft="space160"
      minWidth="size20"
      id="page-aside"
      display={['none', 'none', 'block']}
      data-cy="page-aside"
    >
      <Box position="sticky" top="space130">
        <FeedbackPopover />
        <TableOfContents headings={data.headings} />
      </Box>
    </Box>
  );
};

export {PageAside};
