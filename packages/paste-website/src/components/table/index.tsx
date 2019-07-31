import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

export const Table = styled.table(props => ({
  borderSpacing: 0,
  borderCollapse: 'collapse',
  tableLayout: 'fixed', // Allows table rows to wrap

  width: '100%',
  color: themeGet('textColors.colorText')(props),
  fontSize: themeGet('fontSizes.fontSize20')(props),
  fontWeight: themeGet('fontWeights.fontWeightNormal')(props),
  fontFamily: themeGet('fonts.fontFamilyText')(props),
  lineHeight: '24px',
}));

// export const Thead = styled.thead({});

// export const Tfoot = styled.tfoot({});

export const Tbody = styled.tbody(props => ({
  backgroundColor: themeGet('backgroundColors.colorBackgroundBody')(props),
  borderWidth: themeGet('borderWidths.borderWidth10')(props),
  borderStyle: 'solid',
  borderColor: themeGet('borderColors.colorBorderLight')(props),
  borderRadius: themeGet('radii.borderRadius20')(props),
}));

export const Tr = styled.tr(props => ({
  '&:nth-child(even)': {
    background: themeGet('backgroundColors.colorBackgroundRowStriped')(props),
  },
}));

export const Td = styled.td(props => {
  // FIXME: this is jank.
  // 6px since two subsequent TDs add up to 12px
  const halfSpace40 = `calc(${themeGet('space.space40')(props)} / 2)`;

  return {
    padding: `${themeGet('space.space40')(props)} ${halfSpace40}`,

    '&:nth-of-type(1)': {
      paddingLeft: themeGet('space.space60')(props),
    },

    '&:last-child': {
      paddingRight: themeGet('space.space60')(props),
    },
  };
});

export const Th = styled(Td)(props => ({
  textAlign: 'left',
  fontWeight: themeGet('fontWeights.fontWeightSemibold')(props),
})).withComponent('th');
