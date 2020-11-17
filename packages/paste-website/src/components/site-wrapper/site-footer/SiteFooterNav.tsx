import * as React from 'react';
import {useTheme} from '@twilio-paste/core/theme';
import {Anchor} from '@twilio-paste/core/anchor';
import {Box} from '@twilio-paste/core/box';
import {Stack} from '@twilio-paste/core/stack';
import {SiteFooterHeader} from './SiteFooterHeader';
import TwilioLogo from '../../icons/TwilioLogo';

const SiteFooterNav: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <Box position="relative">
      <SiteFooterHeader />
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
        <Anchor href="https://twilio.com" display="inline-flex">
          <TwilioLogo
            css={{height: theme.heights.sizeIcon40, width: theme.widths.size10}}
            color={theme.textColors.colorTextInverse}
            title="Twilio"
          />
        </Anchor>
      </Box>
    </Box>
  );
};

export {SiteFooterNav};
