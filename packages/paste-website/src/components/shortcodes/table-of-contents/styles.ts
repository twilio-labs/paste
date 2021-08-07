import Scrollspy from 'react-scrollspy';
import {styled, themeGet} from '@twilio-paste/styling-library';
import type {TableOfContentsListItemProps} from './types';

export const TableOfContentsList = styled(Scrollspy)`
  position: sticky;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const marginTopPartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '3' || depth === '4') {
    return themeGet('space.space20');
  }
  return themeGet('space.space40');
};

export const marginLeftPartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '3') {
    return themeGet('space.space30');
  }
  if (depth === '4') {
    return themeGet('space.space50');
  }
  return '0';
};

export const fontSizePartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '3' || depth === '4') {
    return themeGet('fontSizes.fontSize20');
  }
  return themeGet('fontSizes.fontSize30');
};

export const TableOfContentsListItem = styled.li<TableOfContentsListItemProps>`
  display: block;
  margin-top: ${marginTopPartial};
  margin-left: ${marginLeftPartial};
  padding-left: ${themeGet('space.space30')};
  font-size: ${fontSizePartial};
  line-height: ${themeGet('lineHeights.lineHeight20')};
  color: ${themeGet('colors.colorGray80')};
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: transparent;

  &.is-current {
    border-color: ${themeGet('borderColors.colorBorderPrimary')};
  }
`;
