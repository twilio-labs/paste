import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {TableOfContents} from './table-of-contents';
import {FeedbackPopover} from './feedback-popover';

type ToCHeading = {
  value: string;
  depth: number;
};
interface PageAsideProps {
  data: {
    fileAbsolutePath: string;
    frontmatter: {
      slug: string;
      title: string;
    };
    headings?: ToCHeading[];
  };
  hideFeedback?: boolean;
}

const PageAside: React.FC<PageAsideProps> = ({data, hideFeedback}) => {
  return (
    <Box
      order={2}
      marginLeft="space160"
      minWidth="size20"
      maxWidth="size30"
      id="page-aside"
      display={['none', 'none', 'block']}
      data-cy="page-aside"
    >
      <Box position="sticky" top="space130">
        {hideFeedback ? null : <FeedbackPopover />}
        <TableOfContents headings={data.headings} />
      </Box>
    </Box>
  );
};

export {PageAside};
