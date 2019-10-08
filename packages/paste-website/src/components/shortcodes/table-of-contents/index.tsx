import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {TableOfContentsProps} from './types';
import {StyledWrapper, StyledList, StyledListItem} from './styles';

const TableOfContents: React.FC<TableOfContentsProps> = data => {
  if (data == null || data.data == null) {
    return null;
  }

  const headings = data.data;

  return (
    <StyledWrapper marginTop="space40" marginLeft="space140">
      <StyledList>
        {headings
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
      </StyledList>
    </StyledWrapper>
  );
};

export {TableOfContents};
