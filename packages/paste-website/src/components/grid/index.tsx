import styled from '@emotion/styled';

interface GridProps {
  columnWidth: number;
  gap?: number;
  children?: React.ReactNode;
}

const Grid = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.columnWidth}px, 1fr));
  grid-gap: ${props => props.gap}px;

  & > div {
    flex: 1;
    min-width: ${props => props.columnWidth}px;
    margin-bottom: ${props => props.gap}px;
  }

  & > div:nth-of-type(2n) {
    margin-left: ${props => props.gap}px;
  }

  @supports (display: grid) {
    display: grid;

    & > div {
      margin-bottom: 0;
    }

    & > div:nth-of-type(2n) {
      margin-left: 0;
    }
  }
`;

export {Grid};
