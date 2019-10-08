import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {TableOfContentsProps} from './types';
import {StyledWrapper, StyledScrollSpy, StyledListItem} from './styles';

const TableOfContents: React.FC<TableOfContentsProps> = data => {
  if (data == null || data.data == null) {
    return null;
  }

  const headings = data.data;

  // Get Array of heading anchors. Excluding h1 elements.
  const headingsList = headings
    .filter(heading => heading.depth !== 2)
    .map(({value}) => {
      const headingAnchor = value
        .replace(/\./g, '')
        .split(' ')
        .join('-')
        .toLowerCase();
      return headingAnchor;
    });

  // Add changelog to headingsList Array becuase changelogs are imported markdown and dont include ids.
  headingsList.push('changelog');

  return (
    <StyledWrapper marginTop="space40" marginLeft="space140">
      <StyledScrollSpy items={headingsList} currentClassName="is-current" rootEl="#site-main">
        {// Get heading anchors and convert to #anchor format. Excluding h1 elements.
        headings
          .filter(heading => heading.depth !== 2)
          .map(({value, depth}) => {
            const headingLink = `#${value
              .replace(/\./g, '')
              .split(' ')
              .join('-')
              .toLowerCase()}`;

            const depthLevel = depth.toString();

            return (
              <StyledListItem key={value} depth={depthLevel}>
                <Anchor href={headingLink}>{value}</Anchor>
              </StyledListItem>
            );
          })}
        <StyledListItem>
          <Anchor href="#changelog">Changelog</Anchor>
        </StyledListItem>
      </StyledScrollSpy>
    </StyledWrapper>
  );
};

export {TableOfContents};
