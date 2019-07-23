import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

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
    box-shadow: 0 0 0 4px rgba(0, 117, 195, 0.5);
    text-decoration: underline;
  }

  &:focus {
    color: ${themeGet('textColors.colorTextLinkFocus')};
  }

  &:active {
    color: ${themeGet('textColors.colorTextLinkActive')};
  }
`;
