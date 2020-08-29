import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {TableOfContents} from './table-of-contents';
import {TableOfContentsProps} from './table-of-contents/types';
import {QuestionMenu, QuestionMenuProps} from './question-menu';
import {SiteBodyContext} from '../site-wrapper/SiteBodyContext';
import {getStickyColumnComputedOffset} from '../../utils/stickyUtils';

interface PageAsideProps extends TableOfContentsProps, QuestionMenuProps {}

const PageAside: React.FC<PageAsideProps> = ({data}) => {
  const {isPasteTheme} = React.useContext(SiteBodyContext);
  return (
    <Box order={2} marginLeft="space140" minWidth="size20" id="page-aside">
      <Box position="sticky" top={getStickyColumnComputedOffset(isPasteTheme)}>
        <QuestionMenu data={data} />
        <TableOfContents headings={data.headings} />
      </Box>
    </Box>
  );
};

export {PageAside};
