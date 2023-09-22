import { styled, themeGet } from '@twilio-paste/styling-library';

import type { TableOfContentsListItemProps } from './types';

export const marginTopPartial = ({ depth }: TableOfContentsListItemProps): any => {
  if (depth === '3' || depth === '4') {
    return themeGet('space.space30');
  }
  return themeGet('space.space50');
};

export const fontSizePartial = ({ depth }: TableOfContentsListItemProps): any => {
  if (depth === '3' || depth === '4') {
    return themeGet('fontSizes.fontSize20');
  }
  return themeGet('fontSizes.fontSize30');
};

export const lineHeightPartial = ({ depth }: TableOfContentsListItemProps): any => {
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
  border-radius: 2px;

  &.is-current {
    font-weight: ${themeGet('fontWeights.fontWeightSemibold')};

    a {
      color: ${themeGet('textColors.colorTextLink')};
      border-color: ${themeGet('borderColors.colorBorderPrimary')};
    }
  }

  &:focus-within {
    box-shadow: ${themeGet('shadows.shadowFocus')};
  }
`;
