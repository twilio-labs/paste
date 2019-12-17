import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {TableOfContentsProps} from './types';
import {StyledScrollSpy, StyledListItem} from './styles';
import {slugify} from '../../../utils/RouteUtils';

const TableOfContents: React.FC<TableOfContentsProps> = ({headings}) => {
  if (headings == null) {
    return null;
  }

  // Get Array of heading anchors. Excluding h1 elements.
  const headingsList = headings
    .filter(heading => heading.depth !== 1)
    .map(({value}) => {
      const headingAnchor = slugify(value);
      return headingAnchor;
    });

  // TODO: Add changelog to headingsList Array becuase changelogs aren't imported.
  // headingsList.push('changelog');

  return (
    <Box as="nav" aria-label="document outline" order={2} marginTop="space40" marginLeft="space140" minWidth="size20">
      <StyledScrollSpy items={headingsList} currentClassName="is-current" rootEl="#site-main">
        {// Get heading anchors and convert to #anchor format. Excluding h1 elements.
        headings
          .filter(heading => heading.depth !== 1)
          .map(({value, depth}) => {
            const headingLink = `#${slugify(value)}`;

            const depthLevel = depth.toString();

            return (
              <StyledListItem key={value} depth={depthLevel}>
                <Anchor href={headingLink}>{value}</Anchor>
              </StyledListItem>
            );
          })}
      </StyledScrollSpy>
    </Box>
  );
};

export {TableOfContents};
