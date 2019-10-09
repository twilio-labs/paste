import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {TableOfContentsProps} from './types';
import {StyledWrapper, StyledScrollSpy, StyledListItem} from './styles';
import {slugify} from '../../../utils/RouteUtils';

const TableOfContents: React.FC<TableOfContentsProps> = headings => {
  if (headings == null || headings.data == null) {
    return null;
  }

  const allHeadings = headings.data;

  // Get Array of heading anchors. Excluding h1 elements.
  const headingsList = allHeadings
    .filter(heading => heading.depth !== 1)
    .map(({value}) => {
      const headingAnchor = slugify(value);
      return headingAnchor;
    });

  // TODO: Add changelog to headingsList Array becuase changelogs aren't imported.
  // headingsList.push('changelog');

  return (
    <StyledWrapper marginTop="space40" marginLeft="space140">
      <StyledScrollSpy items={headingsList} currentClassName="is-current" rootEl="#site-main">
        {// Get heading anchors and convert to #anchor format. Excluding h1 elements.
        allHeadings
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
    </StyledWrapper>
  );
};

export {TableOfContents};
