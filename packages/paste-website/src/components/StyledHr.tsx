import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

export const StyledHr = styled.hr`
  height: ${themeGet('borderWidths.borderWidth20')};
  margin: ${themeGet('space.space50')} 0;
  background-color: ${themeGet('colors.colorGray40')};
  border: 0;
`;
