import * as React from 'react';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {ComponentCard, ComponentCardHeader, ComponentCardIllustration, ComponentCardFooter} from '../component-card';
import {SiteLink} from '../SiteLink';
import ComponentsIcon from '../icons/ComponentsIcon';
import HomeButtonIllustration from '../../assets/illustrations/home_button_illustration.svg';
import HomeComboboxIllustration from '../../assets/illustrations/home_combobox_illustration.svg';

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
              <HomeButtonIllustration aria-hidden="true" />
            </ComponentCardIllustration>
            <ComponentCardFooter>
              <SiteLink to="/components/button">See Button</SiteLink>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
        <Column span={[12, 6]}>
          <ComponentCard>
            <ComponentCardHeader>Combobox</ComponentCardHeader>
            <ComponentCardIllustration>
              <HomeComboboxIllustration aria-hidden="true" />
            </ComponentCardIllustration>
            <ComponentCardFooter>
              <SiteLink to="/components/combobox">See Combobox</SiteLink>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
      </Grid>
      <Box textAlign="center" marginTop="space20" marginBottom="space60">
        <Text as="span" fontWeight="fontWeightSemibold">
          Explore <SiteLink to="/components">all Components</SiteLink>
        </Text>
      </Box>
    </Box>
  );
};

export {PopularComponents};
