import styled from '@emotion/styled';

interface ScreenReaderOnlyProps {
  // as prop isn't typed correctly from styled package https://github.com/emotion-js/emotion/issues/1137
  as?: keyof JSX.IntrinsicElements;
}

export const ScreenReaderOnly = styled.div<ScreenReaderOnlyProps>`
  position: absolute;
  margin: -1px;
  border: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  text-transform: none;
  white-space: nowrap;
`;
