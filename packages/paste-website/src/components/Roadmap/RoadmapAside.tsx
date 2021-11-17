import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {FeedbackPopover} from '../shortcodes/feedback-popover';
import {STICKY_COLUMN_OFFSET} from '../../constants';
import {TableOfContentsList} from '../shortcodes/table-of-contents/TableOfContentsList';
import {TableOfContentsListItem} from '../shortcodes/table-of-contents/TableOfContentsListItem';
import {slugify} from '../../utils/RouteUtils';
import type {RoadmapProps} from './types';

type RoadmapAsideProps = RoadmapProps;

const RoadmapAside: React.FC<RoadmapAsideProps> = ({data}) => {
  // Get Array of releases as anchors.
  const releaseList = data.map(({release}) => slugify(release));

  return (
    <Box order={2} marginLeft="space140" minWidth="size20" id="page-aside" display={['none', 'none', 'block']}>
      <Box position="sticky" top={STICKY_COLUMN_OFFSET}>
        <FeedbackPopover />
        <TableOfContentsList items={releaseList} currentClassName="is-current">
          {data.map(({release}) => {
            const headingLink = `#${slugify(release)}`;

            return (
              <TableOfContentsListItem key={release} depth="1">
                <Anchor data-cy="page-aside-anchor" href={headingLink}>
                  {release}
                </Anchor>
              </TableOfContentsListItem>
            );
          })}
        </TableOfContentsList>
      </Box>
    </Box>
  );
};

export {RoadmapAside};
