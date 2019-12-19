import styled from '@emotion/styled';

const StoryIcon = styled('div')`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
`;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #000;
`;

export {Grid, StoryIcon};
