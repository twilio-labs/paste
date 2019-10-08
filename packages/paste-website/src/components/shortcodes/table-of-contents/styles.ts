import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {TableOfContentsListItemProps} from './types';

export const StyledWrapper = styled(Box)`
  order: 2;
`;

export const StyledList = styled.ul`
  position: sticky;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const marginTopPartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '4') {
    return '0';
  }
  return themeGet('space.space30');
};

export const marginLeftPartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '4') {
    return themeGet('space.space50');
  }
  return '0';
};

export const fontSizePartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '4') {
    return themeGet('fontSizes.fontSize10');
  }
  return themeGet('fontSizes.fontSize20');
};

export const activeBorderPartial = ({active}: TableOfContentsListItemProps): string => {
  if (active === true) {
    return themeGet('borderColors.colorBorderPrimary');
  }
  return 'transparent';
};

export const activeColorPartial = ({active}: TableOfContentsListItemProps): string => {
  if (active === true) {
    return themeGet('textColors.colorTextLink');
  }
  return themeGet('colors.colorGray80');
};

export const StyledListItem: React.FC<TableOfContentsListItemProps> = styled.li`
  display: block;
  margin-top: ${marginTopPartial};
  margin-left: ${marginLeftPartial};
  padding-left: ${themeGet('space.space30')};
  font-size: ${fontSizePartial};
  color: ${themeGet('colors.colorGray80')};
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: ${activeBorderPartial};

  a {
    color: ${activeColorPartial};
  }
`;
