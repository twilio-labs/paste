import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {TWILIO_BLUE} from '../../constants';
import {TwilioIcon} from '../icons/TwilioIcon';

const StyledFooter = styled.footer`
  margin-top: 96px;
  padding: ${themeGet('space.space150')};
  background-color: ${themeGet('colors.colorGray10')};
`;

const StyledFooterLogo = styled(TwilioIcon)`
  margin: 0 auto ${themeGet('space.space40')};
`;

const SiteFooter: React.FC = () => {
  return (
    <StyledFooter>
      <Box
        css={{
          margin: '0 auto',
          maxWidth: '640px',
        }}
      >
        <Box display="flex">
          <Box marginRight="space60">
            <Heading as="h4" variant="heading30">
              Support
            </Heading>
            <Paragraph>
              If you need support,{' '}
              <Anchor href="https://github.com/twilio-labs/paste/issues">please open a new issue</Anchor> in our GitHub
              repository. Please try to provide as much detail as possible in your issue.
            </Paragraph>
          </Box>
          <Box marginLeft="space50">
            <Heading as="h4" variant="heading30">
              Contributing
            </Heading>
            <Paragraph>
              The Paste design system is open source and contributions are welcome.{' '}
              <Anchor href="https://github.com/twilio-labs/paste">Check out the project on GitHub</Anchor> to learn more
              about contributing.
            </Paragraph>
          </Box>
        </Box>
      </Box>
      <Text as="p" marginTop="space120" textAlign="center">
        <StyledFooterLogo color={TWILIO_BLUE} display="block" size={30} />
        Copyright &copy; {new Date().getFullYear()} Twilio, Inc.
      </Text>
    </StyledFooter>
  );
};

export {SiteFooter};
