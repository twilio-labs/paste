import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';

export const StyledHr = styled.hr`
  height: ${themeGet('borderWidths.borderWidth20')};
  margin: ${themeGet('space.space70')} 0;
  background-color: ${themeGet('colors.colorGray40')};
  border: 0;
`;
