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

const SiteFooter: React.FC<{}> = () => {
  return (
    <StyledFooter>
      <Box
        css={{
          margin: '0 auto',
          maxWidth: '640px',
        }}
      >
        TODO new footer
      </Box>
    </StyledFooter>
  );
};

export {SiteFooter};
