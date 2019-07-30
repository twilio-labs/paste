import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

export const Table = styled.table({
  width: '100%',
  display: 'table',
  borderSpacing: 0,
  borderCollapse: 'collapse',
});

export const Thead = styled.thead({});
export const Tfoot = styled.tfoot({});
export const Tbody = styled.tbody(props => ({
  borderWidth: themeGet('borderWidths.borderWidth10')(props),
  borderStyle: 'solid',
  borderColor: themeGet('borderColors.colorBorderLight')(props),
  borderRadius: themeGet('borderRadii.borderRadius20')(props),
}));

export const Tr = styled.tr({
  display: 'table-row',
  '&:nth-child(even)': {
    background: 'rgb(123, 123, 123)',
  },
});

export const Td = styled.td(props => ({
  color: 'rgb(4, 23, 59)',
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: themeGet('fontWeights.fontWeightNormal')(props),
  fontFamily: themeGet('fonts.fontFamilyText')(props),
}));

export const Th = styled(Td)(props => ({
  color: 'rgb(6, 22, 51)',
  fontWeight: themeGet('fontWeights.fontWeightSemibold')(props),
})).withComponent('th');
