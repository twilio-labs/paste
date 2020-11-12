import * as React from 'react';
import {useTheme} from '@twilio-paste/core/theme';
import {Anchor} from '@twilio-paste/core/anchor';
import {Box} from '@twilio-paste/core/box';
import {Grid, Column} from '@twilio-paste/core/grid';
import {Heading} from '@twilio-paste/core/heading';
import {Text} from '@twilio-paste/core/text';
import ComponentsIcon from '../icons/ComponentsIcon';
import PatternsIcon from '../icons/PatternsIcon';
import HomeButtonIllustration from '../../assets/illustrations/HomeButtonIllustration.svg';
import HomeComboboxIllustration from '../../assets/illustrations/HomeComboboxIllustration.svg';
import HomeCreateIllustration from '../../assets/illustrations/HomeCreateIllustration.svg';
import HomeDeleteIllustration from '../../assets/illustrations/HomeDeleteIllustration.svg';

const renderComponentCardIllustration = (component: string): React.ReactElement => {
  switch (component) {
    case 'Button':
      return <HomeButtonIllustration />;
    case 'Combobox':
      return <HomeComboboxIllustration />;
    case 'Create':
      return <HomeCreateIllustration />;
    case 'Delete':
      return <HomeDeleteIllustration />;
    default:
      return <HomeButtonIllustration />;
  }
};

interface ComponentCardProps {
  component: string;
  url: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({component, url}) => {
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderLighter"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth20"
      marginBottom="space60"
      padding="space50"
      textAlign="center"
    >
      <Heading as="h4" variant="heading40">
        {component}
      </Heading>
      {renderComponentCardIllustration(component)}
      <Text as="span" fontWeight="fontWeightSemibold">
        <Anchor href={url}>See {component}</Anchor>
      </Text>
    </Box>
  );
};

const ComponentsAndPatterns: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      margin="space70"
      position="relative"
      overflow="hidden"
    >
      <Box backgroundColor="colorBackground" padding={['space90', 'space180']}>
        <Box
          color="colorTextWeak"
          fontWeight="fontWeightBold"
          marginBottom="space110"
          position="relative"
          _after={{
            borderTopColor: 'colorBorderLight',
            borderTopStyle: 'solid',
            borderTopWidth: 'borderWidth10',
            content: `""`,
            display: 'block',
            height: '1px',
            marginLeft: 'space160',
            position: 'absolute',
            top: '50%',
            width: 'calc(100% - 3.75rem)', // 100% - space160
          }}
        >
          Popular
        </Box>
        <Grid gutter="space60">
          <Column span={[12, 6]}>
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
                <ComponentCard component="Button" url="/components/button" />
              </Column>
              <Column span={[12, 6]}>
                <ComponentCard component="Combobox" url="/components/combobox" />
              </Column>
            </Grid>
            <Box textAlign="center" marginTop="space20" marginBottom="space60">
              <Text as="span" fontWeight="fontWeightSemibold">
                Explore <Anchor href="/components">all Components</Anchor>
              </Text>
            </Box>
          </Column>
          <Column span={[12, 6]}>
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
                <ComponentCard component="Create" url="/patterns/create" />
              </Column>
              <Column span={[12, 6]}>
                <ComponentCard component="Delete" url="/patterns/delete" />
              </Column>
            </Grid>
            <Box textAlign="center" marginTop="space20" marginBottom="space60">
              <Text as="span" fontWeight="fontWeightSemibold">
                Explore <Anchor href="/patterns">all Patterns</Anchor>
              </Text>
            </Box>
          </Column>
        </Grid>
      </Box>
    </Box>
  );
};

export {ComponentsAndPatterns};
