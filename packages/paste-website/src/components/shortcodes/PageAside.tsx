import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {TableOfContents} from './table-of-contents';
import {TableOfContentsProps} from './table-of-contents/types';
import {QuestionMenu, QuestionMenuProps} from './question-menu';

interface PageAsideProps extends TableOfContentsProps, QuestionMenuProps {}

const PageAside: React.FC<PageAsideProps> = ({data}) => {
  return (
    <Box order={2} marginLeft="space140" minWidth="size20">
      <QuestionMenu data={data} />
      <TableOfContents headings={data.headings} />
    </Box>
  );
};

export {PageAside};
