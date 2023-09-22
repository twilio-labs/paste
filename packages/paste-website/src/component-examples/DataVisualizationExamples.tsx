import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { ThemeContext, styled, themeGet } from '@twilio-paste/styling-library';
import type { ThemeShape } from '@twilio-paste/theme';

import { ColorSwatchText } from '../components/color-swatch/ColorSwatch';
import { ImageCaption } from '../components/ImageCaption';
import { StyledSwatchGrid } from './ColorsFoundationExamples';
import { inCypress } from '../utils/inCypress';

interface TokenData {
  name: string;
  value: string;
}

// Need to use styled div because the data-viz names aren't valid backgroundColors on Box
const StyledSwatch = styled.div<{ backgroundColor: string }>`
  position: relative;
  border-radius: ${themeGet('radii.borderRadius20')};
  background-color: ${(props) => props.backgroundColor};
  height: ${themeGet('space.space110')};
`;

export const DataVizColorSwatches = (): JSX.Element => {
  const context = React.useContext(ThemeContext) as ThemeShape;

  // Adapted from the usePasteHighchartsTheme hook
  const dataVizTokenValues: TokenData[] = React.useMemo(() => {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    const tokenNames = Object.keys(context.dataVisualization) as Array<keyof ThemeShape['dataVisualization']>;

    const sortedTokenNames = tokenNames.sort((a, b) => collator.compare(a, b));

    return sortedTokenNames.map((name) => ({ name, value: context.dataVisualization[name] }));
  }, [context]);

  return (
    <Box as="ul" margin="space0" padding="space0" marginBottom="space70">
      <StyledSwatchGrid numberColumns={5}>
        {dataVizTokenValues.map(({ name, value }) => (
          <Box as="li" listStyleType="none" key={`${name}-${value}`}>
            <StyledSwatch backgroundColor={value} />
            <ColorSwatchText>{name}</ColorSwatchText>
          </Box>
        ))}
      </StyledSwatchGrid>
    </Box>
  );
};

export const PieChartCaption = (): JSX.Element => (
  <ImageCaption>
    A white divider line is used between each section of the pie charts to create contrast and help distinguish the
    difference between the categories.
  </ImageCaption>
);

export const LineChartCaption = (): JSX.Element => (
  <ImageCaption>
    Different shapes are used at each point in the line charts to create additional visual distinction between each
    category.
  </ImageCaption>
);

export const LineChartOptions = {
  title: { text: 'Solar Employment Growth by Sector, 2010-2016' },
  subtitle: { text: 'Source: thesolarfoundation.com' },
  chart: {
    // this controls animation of updates, to disable animation on initial render you have to disable animation on the series
    animation: !inCypress(),
  },
  series: [
    {
      animation: !inCypress(),
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      animation: !inCypress(),
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      animation: !inCypress(),
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      animation: !inCypress(),
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      animation: !inCypress(),
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],
};

export const LineChartExample = `
const LineChartExample = () => {
  const themedLineChartOptions = usePasteHighchartsTheme(LineChartOptions);
  return <HighchartsReact highcharts={Highcharts} options={themedLineChartOptions} />;
};

render(<LineChartExample />);
`.trim();
