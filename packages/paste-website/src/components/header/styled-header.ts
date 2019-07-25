import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

export const StyledHeader = styled.header`
  padding: 0 ${themeGet('space.space40')} ${themeGet('space.space40')};
  margin-bottom: ${themeGet('space.space40')};
  border-bottom: ${themeGet('borderWidths.borderWidth20')} solid ${themeGet('colors.colorGray30')};

  h3 {
    display: flex;
  }

  span {
    flex: 1;

    &:nth-of-type(2) {
      flex: 0;
      justify-self: flex-end;
      font-weight: ${themeGet('fontWeights.fontWeightNormal')};
    }
  }
`;
