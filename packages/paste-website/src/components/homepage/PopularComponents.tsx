import { useTheme } from '@twilio-paste/theme';
import { ScreenReaderOnly } from '@twilio-paste/screen-reader-only';
import { Box } from '@twilio-paste/box';
import { Grid, Column } from '@twilio-paste/grid';
import { Heading } from '@twilio-paste/heading';
import { Text } from '@twilio-paste/text';
import Image from 'next/image';

import {
  ComponentCard,
  ComponentCardHeader,
  ComponentCardIllustration,
  ComponentCardFooter,
} from './PopularComponentCard';
import { SiteLink } from '../SiteLink';
import ComponentsIcon from '../icons/ComponentsIcon';
import HomeButtonIllustration from '../../assets/illustrations/home_button_illustration.svg';
import HomeComboboxIllustration from '../../assets/illustrations/home_combobox_illustration.svg';
import { event } from '../../lib/gtag';

const PopularComponents = (): JSX.Element => {
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
            css={{ height: theme.heights.sizeIcon40, width: theme.widths.sizeIcon40 }}
            color={theme.textColors.colorTextErrorStrong}
            decorative
          />
        </Box>
        <Heading as="h2" variant="heading20">
          <ScreenReaderOnly>Popular</ScreenReaderOnly> Components
        </Heading>
      </Box>
      <Grid gutter="space30">
        <Column span={[12, 6]}>
          <ComponentCard>
            <ComponentCardHeader>Button</ComponentCardHeader>
            <ComponentCardIllustration>
              <Image src={HomeButtonIllustration} aria-hidden="true" alt="" />
            </ComponentCardIllustration>
            <ComponentCardFooter>
              <SiteLink href="/components/button">See Button</SiteLink>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
        <Column span={[12, 6]}>
          <ComponentCard>
            <ComponentCardHeader>Combobox</ComponentCardHeader>
            <ComponentCardIllustration>
              <Image src={HomeComboboxIllustration} aria-hidden="true" alt="" />
            </ComponentCardIllustration>
            <ComponentCardFooter>
              <SiteLink href="/components/combobox">See Combobox</SiteLink>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
      </Grid>
      <Box textAlign="center" marginTop="space20" marginBottom="space60">
        <Text as="span" fontWeight="fontWeightSemibold">
          Explore{' '}
          <SiteLink
            href="/components"
            onClick={() =>
              event({
                category: 'Popular',
                action: 'click-all-components',
                label: 'Explore all components',
              })
            }
          >
            all Components
          </SiteLink>
        </Text>
      </Box>
    </Box>
  );
};

export { PopularComponents };
