import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {TableOfContentsProps} from './types';
import {TableOfContentsList} from './TableOfContentsList';
import {TableOfContentsListItem} from './TableOfContentsListItem';
import {TableOfContentsAnchor} from './TableOfContentsAnchor';
import {slugify} from '../../../utils/RouteUtils';

// Table of contents should only include h2, h3, h4 headings
const shouldIncludeInToC = ({depth}: {depth: number}): boolean => depth > 1 && depth < 4;

const TableOfContents: React.FC<TableOfContentsProps> = ({headings}) => {
  console.log(headings);
  if (headings == null) {
    return null;
  }

  // Get Array of heading anchors.
  const headingsList = headings.filter(shouldIncludeInToC).map(({value}) => {
    const headingAnchor = slugify(value);
    return headingAnchor;
  });

  // TODO: Add changelog to headingsList Array because changelogs aren't imported.
  // but only for pages with changelogs
  return (
    <Box as="nav" aria-label="document outline" data-cy="table-of-contents">
      <TableOfContentsList items={headingsList} currentClassName="is-current" rootEl="#styled-site-body">
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
