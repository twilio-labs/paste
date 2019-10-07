import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Anchor} from '@twilio-paste/anchor';

interface TableOfContentsProps {
  data?: [
    {
      value: string;
      depth: number;
    }
  ];
}

interface TableOfContentsListItemProps {
  depth: string;
  key: string;
}

const depthPartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '3') {
    return '0';
  }
  if (depth === '4') {
    return themeGet('space.space60');
  }
  return '0';
};

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledListItem: React.FC<TableOfContentsListItemProps> = styled.li`
  display: block;
  margin-left: ${depthPartial};
`;

const TableOfContents: React.FC<TableOfContentsProps> = data => {
  if (data == null || data.data == null) {
    return null;
  }

  const headings = data.data;

  return (
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
    </StyledList>
  );
};

export {TableOfContents};
