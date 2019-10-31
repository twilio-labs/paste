import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';

// Link
export const StyledAnchor = styled.a`
  color: ${themeGet('textColors.colorTextLink')};
  text-decoration: underline;
  outline: none;
  font-size: 40px;

  &:hover {
    color: ${themeGet('textColors.colorTextLinkHover')};
    text-decoration: none;
  }

  &:focus,
  &:active {
    box-shadow: ${themeGet('shadows.shadowFocus')};
    text-decoration: none;
  }

  &:focus {
    color: ${themeGet('textColors.colorTextLinkFocus')};
  }

  &:active {
    color: ${themeGet('textColors.colorTextLinkActive')};
  }
`;
