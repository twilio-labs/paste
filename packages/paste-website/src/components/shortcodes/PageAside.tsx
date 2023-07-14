import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {SITE_MASTHEAD_HEIGHT} from '../../constants';
import {TableOfContents} from './table-of-contents';
import {FeedbackPopover} from './feedback-popover';

type ToCHeading = {
  value: string;
  depth: number;
};
interface PageAsideProps {
  data: ToCHeading[];
  hideFeedback?: boolean;
  stickyTop?: BoxProps['top'];
  topPadding?: BoxProps['padding'];
}

const PageAside: React.FC<React.PropsWithChildren<PageAsideProps>> = ({
  data,
  hideFeedback,
  stickyTop = '36px',
  topPadding = 'space0',
}) => {
  return (
    <Box
      element="SITE_MAIN_ASIDE"
      order={2}
      marginLeft="space160"
      minWidth="size20"
      maxWidth="size30"
      id="page-aside"
      display={['none', 'none', 'block']}
      data-cy="page-aside"
    >
      <Box position="sticky" top={`calc(${SITE_MASTHEAD_HEIGHT}px + ${stickyTop})`} paddingTop={topPadding}>
        {hideFeedback ? null : <FeedbackPopover />}
        <TableOfContents headings={data} />
      </Box>
    </Box>
  );
};

export {PageAside};
