import * as React from 'react';
import {Box} from '@twilio-paste/box';

import type {TableOfContentsProps} from './types';
import {TableOfContentsList} from './TableOfContentsList';
import {TableOfContentsListItem} from './TableOfContentsListItem';
import {TableOfContentsAnchor} from './TableOfContentsAnchor';
import {slugify, useLocationPathname} from '../../../utils/RouteUtils';
import {useWindowSize} from '../../../hooks/useWindowSize';
import {TOKEN_STICKY_FILTER_HEIGHT, TOKEN_LIST_PAGE_REGEX, SITE_TOPBAR_HEIGHT} from '../../../constants';

// Table of contents should only include h2, h3, h4 headings
const shouldIncludeInToC = ({depth}: {depth: number}): boolean => depth > 1 && depth < 4;

const TableOfContents: React.FC<React.PropsWithChildren<TableOfContentsProps>> = ({headings}) => {
  if (headings == null) {
    return null;
  }

  // Get Array of heading anchors.
  const headingsList = headings.filter(shouldIncludeInToC).map(({value}) => {
    return slugify(value);
  });

  /**
   * The Tokens List page has a sticky filter bar that needs an extra offset.
   * its the masthead height + the sticky filter height
   */
  const {breakpointIndex} = useWindowSize();
  let scrollOffset = 0;

  if (breakpointIndex !== undefined && TOKEN_LIST_PAGE_REGEX.test(useLocationPathname())) {
    scrollOffset = -TOKEN_STICKY_FILTER_HEIGHT[breakpointIndex] - SITE_TOPBAR_HEIGHT;
  }

  /*
   * TODO: Add changelog to headingsList Array because changelogs aren't imported.
   * but only for pages with changelogs
   */
  return (
    <Box as="nav" aria-label="document outline" data-cy="table-of-contents">
      <TableOfContentsList items={headingsList} currentClassName="is-current" offset={scrollOffset}>
        {
          // Get heading anchors and convert to #anchor format. Excluding h1 elements.
          headings.filter(shouldIncludeInToC).map(({value, depth}) => {
            const headingLink = `#${slugify(value)}`;

            const depthLevel = depth.toString();

            const paddingLeftValue = depthLevel === '3' || depthLevel === '4' ? 'space140' : 'space90';

            return (
              <TableOfContentsListItem key={value} depth={depthLevel}>
                <TableOfContentsAnchor href={headingLink} paddingLeft={paddingLeftValue}>
                  {value}
                </TableOfContentsAnchor>
              </TableOfContentsListItem>
            );
          })
        }
      </TableOfContentsList>
    </Box>
  );
};

export {TableOfContents};
