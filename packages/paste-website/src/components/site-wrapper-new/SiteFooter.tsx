import * as React from 'react';
import {useTheme} from '@twilio-paste/theme';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import HeartDoodleIcon from '../icons/HeartDoodleIcon';
import TwilioLogo from '../icons/TwilioLogo';
import FooterBuildingBlocks from '../../assets/illustrations/FooterBuildingBlocks.svg';

const SiteFooter: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      margin="space70"
      paddingTop="space200"
      position="relative"
      overflow="hidden"
    >
      <Box borderRadius="borderRadius20" position="absolute" top={0} right={0} bottom={0} left={0}>
        <Box
          backgroundColor="colorBackgroundPrimaryDarker"
          borderRadius="borderRadius20"
          height="100%"
          left={0}
          position="relative"
          top={0}
          transform="skewY(-5deg)"
          transformOrigin="100% 0"
          width="100%"
        />
      </Box>
      <Box
        borderRadius="borderRadius20"
        marginTop={['space0', 'space0', 'space130']}
        padding={['space90', 'space180']}
        paddingTop={['space90', 'space200']}
        position="relative"
      >
        <Box
          bottom={-6}
          display={['none', 'none', 'none', 'block']}
          right={theme.sizes.sizeSquare120}
          position="absolute"
        >
          <FooterBuildingBlocks aria-hidden="true" role="img" />
        </Box>
        <Box position="relative">
          <Box
            alignItems="center"
            display="flex"
            flexDirection={['column', 'row']}
            marginBottom="space80"
            textAlign={['center', 'left']}
          >
            <HeartDoodleIcon
              css={{height: theme.heights.sizeIcon70, width: theme.widths.sizeIcon70}}
              color={theme.textColors.colorTextInverse}
              decorative
            />
            <Text
              as="h5"
              color="colorTextInverse"
              fontSize={['fontSize60', 'fontSize90']}
              fontWeight="fontWeightBold"
              lineHeight={['lineHeight60', 'lineHeight90']}
              marginLeft={['space0', 'space40']}
              marginTop={['space40', 'space0']}
            >
              Black lives matter.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            marginLeft={['space0', 'space120']}
            textAlign={['center', 'left']}
          >
            <Box marginRight={['space0', 'space130']} marginBottom="space60">
              <Stack as="nav" orientation="vertical" spacing="space60">
                <Anchor href="/getting-started/about-paste" variant="inverse">
                  About
                </Anchor>
                <Anchor href="/roadmap" variant="inverse">
                  Our roadmap
                </Anchor>
                <Anchor href="/getting-started/design" variant="inverse">
                  Design guidelines
                </Anchor>
                <Anchor href="/getting-started/engineering" variant="inverse">
                  Engineering guidelines
                </Anchor>
              </Stack>
            </Box>
            <Box marginRight={['space0', 'space130']} marginBottom="space60">
              <Stack as="nav" orientation="vertical" spacing="space60">
                <Anchor href="https://github.com/twilio-labs/paste/discussions" variant="inverse" showExternal>
                  Get support
                </Anchor>
                <Anchor href="https://github.com/twilio-labs/paste/issues/new/choose" variant="inverse" showExternal>
                  Report a bug
                </Anchor>
                <Anchor href="/getting-started/working-guide" variant="inverse">
                  How we work
                </Anchor>
              </Stack>
            </Box>
            <Box marginRight={['space0', 'space130']} marginBottom="space60">
              <Stack as="nav" orientation="vertical" spacing="space60">
                <Anchor
                  href="https://share.goabstract.com/786b3d8f-b87a-4140-af7d-eb4cdd40e8ed"
                  variant="inverse"
                  showExternal
                >
                  Abstract
                </Anchor>
                <Anchor href="https://github.com/twilio-labs/paste" variant="inverse" showExternal>
                  Github
                </Anchor>
                <Anchor href="https://twilio-labs.github.io/paste" variant="inverse" showExternal>
                  Storybook
                </Anchor>
              </Stack>
            </Box>
          </Box>
          <Box marginTop="space120" marginLeft={['space0', 'space120']} textAlign={['center', 'left']}>
            <Anchor href="https://twilio.com">
              <TwilioLogo
                css={{height: theme.heights.sizeIcon40, width: theme.widths.size10}}
                color={theme.textColors.colorTextInverse}
                title="Twilio"
              />
            </Anchor>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export {SiteFooter};
