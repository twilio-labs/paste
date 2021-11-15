import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import type {TableOfContentsProps} from './types';
import {TableOfContentsList, TableOfContentsListItem} from './styles';
import {slugify} from '../../../utils/RouteUtils';

// Table of contents should only include h2, h3, h4 headings
const shouldIncludeInToC = ({depth}: {depth: number}): boolean => depth > 1 && depth < 4;

const TableOfContents: React.FC<TableOfContentsProps> = ({headings}) => {
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

            return (
              <TableOfContentsListItem key={value} depth={depthLevel}>
                <Anchor data-cy="page-aside-anchor" href={headingLink}>
                  {value}
                </Anchor>
              </TableOfContentsListItem>
            );
          })
        }
      </TableOfContentsList>
    </Box>
  );
};

export {TableOfContents};
