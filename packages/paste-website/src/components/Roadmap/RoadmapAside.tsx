import * as React from 'react';
import {Box} from '@twilio-paste/box';

import {FeedbackPopover} from '../shortcodes/feedback-popover';
import {TableOfContentsList} from '../shortcodes/table-of-contents/TableOfContentsList';
import {TableOfContentsListItem} from '../shortcodes/table-of-contents/TableOfContentsListItem';
import {TableOfContentsAnchor} from '../shortcodes/table-of-contents/TableOfContentsAnchor';
import {slugify} from '../../utils/RouteUtils';
import type {RoadmapProps} from './types';
import {SITE_TOPBAR_HEIGHT} from '../../constants';

type RoadmapAsideProps = RoadmapProps;

const RoadmapAside: React.FC<React.PropsWithChildren<RoadmapAsideProps>> = ({data}) => {
  // Get Array of releases as anchors.
  const releaseList = Object.keys(data).map((release) => slugify(release));

  return (
    <Box order={2} marginLeft="space140" minWidth="size20" id="page-aside" display={['none', 'none', 'block']}>
      <Box position="sticky" top="space130">
        <FeedbackPopover />
        <TableOfContentsList items={releaseList} currentClassName="is-current" offset={-SITE_TOPBAR_HEIGHT}>
          {Object.keys(data).map((release) => {
            const headingLink = `#${slugify(release)}`;

            return (
              <TableOfContentsListItem key={release} depth="1">
                <TableOfContentsAnchor data-cy="page-aside-anchor" href={headingLink} paddingLeft="space90">
                  {release}
                </TableOfContentsAnchor>
              </TableOfContentsListItem>
            );
          })}
        </TableOfContentsList>
      </Box>
    </Box>
  );
};

export {RoadmapAside};
