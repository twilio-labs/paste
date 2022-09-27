import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {useTheme} from '@twilio-paste/theme';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';

import {
  ComponentCard,
  ComponentCardHeader,
  ComponentCardIllustration,
  ComponentCardFooter,
} from './PopularComponentCard';
import {SiteLink} from '../SiteLink';
import PatternsIcon from '../icons/PatternsIcon';
import HomeCreateIllustration from '../../assets/illustrations/home_create_illustration.svg';
import HomeDeleteIllustration from '../../assets/illustrations/home_delete_illustration.svg';

const PopularPatterns = (): JSX.Element => {
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
          <PatternsIcon
            css={{height: theme.heights.sizeIcon40, width: theme.widths.sizeIcon40}}
            color={theme.textColors.colorTextErrorStrong}
            decorative
          />
        </Box>
        <Heading as="h2" variant="heading20">
          <ScreenReaderOnly>Popular</ScreenReaderOnly> Patterns
        </Heading>
      </Box>
      <Grid gutter="space30">
        <Column span={[12, 6]}>
          <ComponentCard>
            <ComponentCardHeader>Create</ComponentCardHeader>
            <ComponentCardIllustration>
              <HomeCreateIllustration aria-hidden="true" />
            </ComponentCardIllustration>
            <ComponentCardFooter>
              <SiteLink to="/patterns/create">See Create</SiteLink>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
        <Column span={[12, 6]}>
          <ComponentCard>
            <ComponentCardHeader>Delete</ComponentCardHeader>
            <ComponentCardIllustration>
              <HomeDeleteIllustration aria-hidden="true" />
            </ComponentCardIllustration>
            <ComponentCardFooter>
              <SiteLink to="/patterns/delete">See Delete</SiteLink>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
      </Grid>
      <Box textAlign="center" marginTop="space20" marginBottom="space60">
        <Text as="span" fontWeight="fontWeightSemibold">
          Explore{' '}
          <SiteLink
            to="/patterns"
            onClick={() =>
              trackCustomEvent({
                category: 'Popular',
                action: 'click-all-patterns',
                label: 'Explore all patterns',
              })
            }
          >
            all Patterns
          </SiteLink>
        </Text>
      </Box>
    </Box>
  );
};

export {PopularPatterns};
