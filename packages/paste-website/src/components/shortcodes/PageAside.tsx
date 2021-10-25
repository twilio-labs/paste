import * as React from 'react-16';
import {Box} from '@twilio-paste/box';
import {TableOfContents} from './table-of-contents';
import {FeedbackPopover} from './feedback-popover';
import {STICKY_COLUMN_OFFSET} from '../../constants';

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
    <Box order={2} marginLeft="space140" minWidth="size20" id="page-aside" display={['none', 'none', 'block']}>
      <Box position="sticky" top={STICKY_COLUMN_OFFSET}>
        <FeedbackPopover />
        <TableOfContents headings={data.headings} />
      </Box>
    </Box>
  );
};

export {PageAside};
