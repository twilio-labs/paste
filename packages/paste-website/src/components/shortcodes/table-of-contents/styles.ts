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
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${themeGet('borderColors.colorBorderWeak')};
`;

export const marginTopPartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '3' || depth === '4') {
    return themeGet('space.space30');
  }
  return themeGet('space.space50');
};

export const fontSizePartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '3' || depth === '4') {
    return themeGet('fontSizes.fontSize20');
  }
  return themeGet('fontSizes.fontSize30');
};

export const lineHeightPartial = ({depth}: TableOfContentsListItemProps): string => {
  if (depth === '3' || depth === '4') {
    return themeGet('lineHeights.lineHeight20');
  }
  return themeGet('lineHeights.lineHeight40');
};

export const TableOfContentsListItem = styled.li<TableOfContentsListItemProps>`
  display: block;
  margin-top: ${marginTopPartial};
  font-size: ${fontSizePartial};
  line-height: ${lineHeightPartial};
  color: ${themeGet('colors.colorGray80')};
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: transparent;

  &.is-current {
    border-color: ${themeGet('borderColors.colorBorderPrimary')};
    font-weight: ${themeGet('fontWeights.fontWeightSemibold')};
  }

  &:hover,
  &:focus-within {
    border-color: ${themeGet('borderColors.colorBorderPrimaryStronger')};
  }

  &:focus-within {
    box-shadow: ${themeGet('boxShadows.shadowFocus')};
  }
`;
