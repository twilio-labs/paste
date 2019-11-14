import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';

// Link
export const StyledAnchor = styled.a`
  color: ${themeGet('textColors.colorTextLink')};
  text-decoration: underline;
  outline: none;

  &:hover {
    color: ${themeGet('textColors.colorTextLinkDarker')};
    text-decoration: none;
  }

  &:focus,
  &:active {
    box-shadow: ${themeGet('shadows.shadowFocus')};
    color: ${themeGet('textColors.colorTextLinkDarker')};
    text-decoration: none;
  }
`;
