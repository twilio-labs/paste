import {Link} from 'gatsby';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

export const SiteNav = styled.nav`
  margin-top: ${themeGet('space.space70')};
`;

export const SiteNavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const SiteNavNestList = styled(SiteNavList)`
  max-height: 0;
  text-transform: capitalize;
  background-color: ${themeGet('colors.colorGray30')};
  overflow: hidden;
`;

export const SiteNavItem = styled.li`
  margin: ${themeGet('space.space10')} 0;
  font-size: ${themeGet('fontSizes.fontSize20')};
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
  &.is-active {
    color: ${themeGet('textColors.colorText')};
    background-color: ${themeGet('colors.colorGray30')};
    border-radius: ${themeGet('radii.borderRadius20')};
  }

  &.is-active ~ ul {
    max-height: 100%;
  }

  &.is-active > div {
    transform: rotate(45deg);
  }
`;

export const SiteNavAnchorArrow = styled.div`
  position: absolute;
  right: ${themeGet('space.space40')};
  top: 50%;
  margin-top: -3px;
  width: 7px;
  height: 7px;
  border-color: ${themeGet('colors.colorGray60')};
  border-style: solid;
  border-width: 0 ${themeGet('borderWidths.borderWidth20')} ${themeGet('borderWidths.borderWidth20')} 0;
  transform: rotate(-45deg);
`;
