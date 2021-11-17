import {styled, themeGet} from '@twilio-paste/styling-library';
import type {TableOfContentsListItemProps} from './types';

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
  color: ${themeGet('textColors.colorTextWeak')};
  border-radius: 2px;

  a {
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: transparent;

    &:focus {
      outline: none;
    }
  }

  &.is-current {
    font-weight: ${themeGet('fontWeights.fontWeightSemibold')};
    color: ${themeGet('textColors.colorTextLink')};

    a {
      border-color: ${themeGet('borderColors.colorBorderPrimary')};
    }
  }

  &:hover {
    a {
      border-color: ${themeGet('borderColors.colorBorderPrimaryStronger')};
    }

    color: ${themeGet('textColors.colorTextLinkStronger')};
  }

  &:focus-within {
    a {
      border-color: ${themeGet('borderColors.colorBorderPrimaryStronger')};
    }
    color: ${themeGet('textColors.colorTextLinkStronger')};
    box-shadow: ${themeGet('shadows.shadowFocus')};
  }
`;
