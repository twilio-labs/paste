import * as React from 'react';
import {useTheme} from '@twilio-paste/core/theme';
import {Anchor} from '@twilio-paste/core/anchor';
import {Box} from '@twilio-paste/core/box';
import {Grid, Column} from '@twilio-paste/core/grid';
import {Heading} from '@twilio-paste/core/heading';
import {Text} from '@twilio-paste/core/text';
import {ComponentCard, ComponentCardHeader, ComponentCardIllustration, ComponentCardFooter} from '../component-card';
import ComponentsIcon from '../icons/ComponentsIcon';
import HomeButtonIllustration from '../../assets/illustrations/HomeButtonIllustration.svg';
import HomeComboboxIllustration from '../../assets/illustrations/HomeComboboxIllustration.svg';

const PopularComponents: React.FC = () => {
  const theme = useTheme();
  return (
    <Box marginBottom={['space130', 'space0']}>
      <Box textAlign="center">
        <Box
          alignItems="center"
          backgroundColor="colorBackgroundBody"
          borderRadius="borderRadiusCircle"
          display="flex"
          height="sizeSquare150"
          justifyContent="center"
          marginBottom="space40"
          marginLeft="auto"
          marginRight="auto"
          width="sizeSquare150"
        >
          <ComponentsIcon
            css={{height: theme.heights.sizeIcon40, width: theme.widths.sizeIcon40}}
            color={theme.textColors.colorTextBrandHighlight}
            decorative
          />
        </Box>
        <Heading as="h2" variant="heading20">
          Components
        </Heading>
      </Box>
      <Grid gutter="space30">
        <Column span={[12, 6]}>
          <ComponentCard>
            <ComponentCardHeader>Button</ComponentCardHeader>
            <ComponentCardIllustration>
              <HomeButtonIllustration />
            </ComponentCardIllustration>
            <ComponentCardFooter>
              <Anchor href="/components/button">See Button</Anchor>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
        <Column span={[12, 6]}>
          <ComponentCard>
            <ComponentCardHeader>Combobox</ComponentCardHeader>
            <ComponentCardIllustration>
              <HomeComboboxIllustration />
            </ComponentCardIllustration>
            <ComponentCardFooter>
              <Anchor href="/components/combobox">See Combobox</Anchor>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
      </Grid>
      <Box textAlign="center" marginTop="space20" marginBottom="space60">
        <Text as="span" fontWeight="fontWeightSemibold">
          Explore <Anchor href="/components">all Components</Anchor>
        </Text>
      </Box>
    </Box>
  );
};

export {PopularComponents};
