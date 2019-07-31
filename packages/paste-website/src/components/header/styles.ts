import {Link} from 'gatsby';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Text} from '@twilio-paste/text';

export const StyledHeader = styled.header`
  padding: 0 ${themeGet('space.space40')} ${themeGet('space.space40')};
  margin-bottom: ${themeGet('space.space40')};
  border-bottom: ${themeGet('borderWidths.borderWidth20')} solid ${themeGet('colors.colorGray30')};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

export const StyledH3 = styled(Text)`
  display: flex;
`;

export const StyledSpan = styled.span`
  flex: 1;

  &:nth-of-type(2) {
    flex: 0;
    justify-self: flex-end;
    font-weight: ${themeGet('fontWeights.fontWeightNormal')};
  }
`;
