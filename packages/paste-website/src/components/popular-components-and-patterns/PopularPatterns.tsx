import * as React from 'react';
import {useTheme} from '@twilio-paste/theme';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {ComponentCard, ComponentCardHeader, ComponentCardIllustration, ComponentCardFooter} from '../component-card';
import PatternsIcon from '../icons/PatternsIcon';
import HomeCreateIllustration from '../../assets/illustrations/home_create_illustration.svg';
import HomeDeleteIllustration from '../../assets/illustrations/home_delete_illustration.svg';

const PopularPatterns: React.FC = () => {
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
            color={theme.textColors.colorTextBrandHighlight}
            decorative
          />
        </Box>
        <Heading as="h2" variant="heading20">
          Patterns
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
              <Anchor href="/patterns/create">See Create</Anchor>
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
              <Anchor href="/patterns/delete">See Delete</Anchor>
            </ComponentCardFooter>
          </ComponentCard>
        </Column>
      </Grid>
      <Box textAlign="center" marginTop="space20" marginBottom="space60">
        <Text as="span" fontWeight="fontWeightSemibold">
          Explore <Anchor href="/patterns">all Patterns</Anchor>
        </Text>
      </Box>
    </Box>
  );
};

export {PopularPatterns};
