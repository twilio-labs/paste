import {Link} from 'gatsby';
import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';

export const SiteNav = styled.nav`
  margin-top: ${themeGet('space.space70')};
  margin-bottom: ${themeGet('space.space90')};
`;

export const SiteNavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

interface SiteNavNestListProps {
  isOpen?: boolean;
}

export const SiteNavNestList = styled(SiteNavList)<SiteNavNestListProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  text-transform: capitalize;
  background-color: ${themeGet('colors.colorGray30')};
  overflow: hidden;
  border-bottom-right-radius: ${themeGet('radii.borderRadius20')};
  border-bottom-left-radius: ${themeGet('radii.borderRadius20')};
  padding-left: ${themeGet('space.space40')};
`;

export const SiteNavItem = styled.li`
  margin: ${themeGet('space.space10')} 0;
  font-size: ${themeGet('fontSizes.fontSize30')};
  line-height: ${themeGet('lineHeights.lineHeight20')};
`;

export const SiteNavAnchor = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  padding: ${themeGet('space.space40')};
  font-weight: ${themeGet('fontWeights.fontWeightMedium')};
  color: ${themeGet('colors.colorGray80')};
  text-decoration: none;
  transition: 0.1s background-color ease-in-out;

  &:hover,
  &[aria-current='page'] {
    color: ${themeGet('textColors.colorText')};
    background-color: ${themeGet('colors.colorGray30')};
    border-radius: ${themeGet('radii.borderRadius20')};
  }
`;

interface SiteNavButtonProps {
  isOpen?: boolean;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  'aria-expanded': boolean;
}

export const SiteNavButton = styled.button<SiteNavButtonProps>`
  position: relative;
  display: block;
  width: 100%;
  padding: ${themeGet('space.space40')};
  font-family: ${themeGet('fonts.fontFamilyText')};
  font-size: inherit;
  font-weight: ${themeGet('fontWeights.fontWeightMedium')};
  text-align: left;
  color: ${props => (props.isOpen ? themeGet('textColors.colorText') : themeGet('colors.colorGray80'))};
  background-color: ${props => (props.isOpen ? themeGet('colors.colorGray30') : 'transparent')};
  border: none;
  border-top-left-radius: ${themeGet('radii.borderRadius20')};
  border-top-right-radius: ${themeGet('radii.borderRadius20')};
  text-decoration: none;
  transition: 0.1s background-color ease-in-out;
  -webkit-appearance: none;

  &:hover {
    color: ${themeGet('textColors.colorText')};
    background-color: ${themeGet('colors.colorGray30')};
    border-bottom-left-radius: ${props => (props.isOpen ? 0 : themeGet('radii.borderRadius20'))};
    border-bottom-right-radius: ${props => (props.isOpen ? 0 : themeGet('radii.borderRadius20'))};
    cursor: pointer;
    outline: none;
  }
`;

interface SiteNavAnchorArrowProps {
  isOpen?: boolean;
}

export const SiteNavAnchorArrow = styled.div<SiteNavAnchorArrowProps>`
  position: absolute;
  right: ${themeGet('space.space40')};
  top: 50%;
  margin-top: ${props => (props.isOpen ? '-5px' : '-3px')};
  width: 7px;
  height: 7px;
  border-color: ${themeGet('colors.colorGray60')};
  border-style: solid;
  border-width: 0 ${themeGet('borderWidths.borderWidth20')} ${themeGet('borderWidths.borderWidth20')} 0;
  transform: ${props => (props.isOpen ? 'rotate(45deg);' : 'rotate(-45deg);')};
`;
