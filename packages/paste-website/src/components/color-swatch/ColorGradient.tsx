import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {colors} from '@twilio-paste/design-tokens';
import {colors as darkColors} from '@twilio-paste/design-tokens/dist/themes/dark/tokens.es6';
import {Box} from '@twilio-paste/box';
import {useDarkModeContext} from '../../context/DarkModeContext';

const aliasPrefixes = ['colorGray', 'colorRed', 'colorOrange', 'colorYellow', 'colorGreen', 'colorBlue', 'colorPurple'];

type AliasName = keyof typeof colors;

const sortAliasNames = (aliasNames: string[]): string[] => {
  return aliasNames.sort((nameA, nameB) => nameA.localeCompare(nameB, undefined, {numeric: true})).reverse();
};

const getAliasValuesFromPrefix = (prefix: string, theme: 'default' | 'dark'): string[] => {
  const themeColors = theme === 'default' ? colors : darkColors;
  const filteredAliasNames = Object.keys(themeColors).filter(
    (tokenName) => tokenName.includes(prefix) && tokenName !== 'colorGray0'
  );

  return sortAliasNames(filteredAliasNames).reduce((current: string[], aliasName): string[] => {
    return [...current, themeColors[aliasName as AliasName]];
  }, []);
};

// Need to use styled div because the alias names aren't valid backgroundColors on Box
const StyledGradientSwatch = styled.div<{backgroundColor: string}>`
  background-color: ${(props) => props.backgroundColor};
  height: ${themeGet('space.space60')};
`;

// Need to use styled div because Box doesn't support CSS grid
const StyledGrid = styled.div`
  display: grid;
  column-gap: ${themeGet('space.space40')};
  margin-bottom: ${themeGet('space.space70')};
  grid-template-columns: repeat(7, 1fr);
`;

const ColorGradient: React.FC<{aliasPrefix: string}> = ({aliasPrefix}) => {
  const {theme} = useDarkModeContext();
  const aliasValues = getAliasValuesFromPrefix(aliasPrefix, theme);

  return (
    <Box borderRadius="borderRadius20" overflow="hidden">
      {aliasValues.map((aliasValue) => (
        <StyledGradientSwatch backgroundColor={aliasValue} />
      ))}
    </Box>
  );
};

export const ColorGradientRainbow: React.FC = () => (
  <StyledGrid>
    {aliasPrefixes.map((prefix) => (
      <ColorGradient aliasPrefix={prefix} />
    ))}
  </StyledGrid>
);
