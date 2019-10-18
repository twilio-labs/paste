import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';

// Link
export const StyledLink = styled.a`
  color: ${themeGet('textColors.colorTextLink')};
  text-decoration: none;
  outline: none;

  &:hover {
    color: ${themeGet('textColors.colorTextLinkHover')};
    text-decoration: underline;
  }

  &:focus,
  &:active {
    box-shadow: ${themeGet('shadows.shadowFocus')};
    text-decoration: underline;
  }

  &:focus {
    color: ${themeGet('textColors.colorTextLinkFocus')};
  }

  &:active {
    color: ${themeGet('textColors.colorTextLinkActive')};
  }
`;
