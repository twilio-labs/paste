import * as React from 'react';
import {Box} from '@twilio-paste/box';

import type {TableOfContentsProps} from './types';
import {TableOfContentsList} from './TableOfContentsList';
import {TableOfContentsListItem} from './TableOfContentsListItem';
import {TableOfContentsAnchor} from './TableOfContentsAnchor';
import {slugify, useLocationPathname} from '../../../utils/RouteUtils';
import {useWindowSize} from '../../../hooks/useWindowSize';
import {TOKEN_STICKY_FILTER_HEIGHT, TOKEN_LIST_PAGE_REGEX} from '../../../constants';

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
   * The Tokens List page has a sticky filter when scrolled, which means that we need to
   * set a negative offset to adjust whew ScrollSpy transitions from one section to the next.
   *
   * We have a global array, 'TOKEN_STICKY_FILTER_HEIGHT' that returns a value for the height
   * of the filter for the current breakpoint (different breakpoints have different heights),
   * and we use that, combined with router awareness of our current location, to determine the
   * value to set for ScrollSpy's offset prop. We also adjust by 42px, which is the value of
   * the margin between token category sections.
   */
  const {breakpointIndex} = useWindowSize();
  let scrollOffset = 0;

  if (breakpointIndex !== undefined && TOKEN_LIST_PAGE_REGEX.test(useLocationPathname())) {
    scrollOffset = -TOKEN_STICKY_FILTER_HEIGHT[breakpointIndex] + 32;
  }

  /*
   * TODO: Add changelog to headingsList Array because changelogs aren't imported.
   * but only for pages with changelogs
   */
  return (
    <Box as="nav" aria-label="document outline" data-cy="table-of-contents">
      <TableOfContentsList
        items={headingsList}
        currentClassName="is-current"
        rootEl="#styled-site-body"
        offset={scrollOffset}
      >
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
