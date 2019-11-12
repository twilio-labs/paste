import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';

export const Table = styled.table(props => ({
  borderSpacing: 0,
  borderCollapse: 'collapse',
  tableLayout: 'fixed', // Allows table rows to wrap

  width: '100%',
  color: themeGet('textColors.colorText')(props),
  fontSize: themeGet('fontSizes.fontSize30')(props),
  fontWeight: themeGet('fontWeights.fontWeightNormal')(props),
  lineHeight: themeGet('lineHeights.lineHeight30')(props),
}));

export const Thead = styled.thead({});

// export const Tfoot = styled.tfoot({});

export const Tbody = styled.tbody(props => ({
  backgroundColor: themeGet('backgroundColors.colorBackgroundBody')(props),
  borderWidth: themeGet('borderWidths.borderWidth10')(props),
  borderStyle: 'solid',
  borderColor: themeGet('borderColors.colorBorderLight')(props),
  borderRadius: themeGet('radii.borderRadius20')(props),
}));

export const Tr = styled.tr(props => ({
  '&:nth-of-type(even)': {
    background: themeGet('backgroundColors.colorBackgroundRowStriped')(props),
  },
}));

export const Td = styled.td(props => ({
  padding: `${themeGet('space.space40')(props)} ${themeGet('space.space30')(props)}`,
  verticalAlign: 'top',
  wordWrap: 'break-word',

  '&:nth-of-type(1)': {
    paddingLeft: themeGet('space.space50')(props),
  },

  '&:last-child': {
    paddingRight: themeGet('space.space50')(props),
  },
}));

export const Th = styled(Td)(props => ({
  textAlign: 'left',
  fontWeight: themeGet('fontWeights.fontWeightSemibold')(props),
})).withComponent('th');
