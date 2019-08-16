import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {TWILIO_BLUE} from '../constants';
import {TwilioIcon} from './icons/TwilioIcon';

const StyledFooter = styled.footer`
  margin-top: 96px;
  padding: ${themeGet('space.space150')};
  background-color: ${themeGet('colors.colorGray10')};
`;

const Flex = styled.div`
  display: flex;
`;

const StyledCopyright = styled.p`
  margin-top: ${themeGet('space.space120')};
  text-align: center;
`;

const StyledFooterLogo = styled(TwilioIcon)`
  margin: 0 auto ${themeGet('space.space40')};
`;

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <Box m="0 auto" maxWidth="640px">
        <Flex>
          <Box mr="space60">
            <h4>Support</h4>
            <p>
              If you need support,{' '}
              <Anchor href="https://github.com/twilio-labs/paste/issues">please open a new issue</Anchor> in our GitHub
              repository. Please try to provide as much detail as possible in your issue.
            </p>
          </Box>
          <Box ml="space50">
            <h4>Contributing</h4>
            <p>
              The Paste design system is open source and contributions are welcome.{' '}
              <Anchor href="https://github.com/twilio-labs/paste">Check out the project on GitHub</Anchor> to learn more
              about contributing.
            </p>
          </Box>
        </Flex>
      </Box>
      <StyledCopyright>
        <StyledFooterLogo color={TWILIO_BLUE} size={30} />
        Copyright &copy; 2019 Twilio, Inc.
      </StyledCopyright>
    </StyledFooter>
  );
};

export {Footer};
