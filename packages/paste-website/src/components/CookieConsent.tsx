import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';

export const CookieConsent: React.FC<{onAccept: () => void; onReject: () => void}> = ({onAccept, onReject}) => {
  return (
    <Box
      zIndex="zIndex90"
      position="fixed"
      bottom="0"
      width="100%"
      backgroundColor="colorBackgroundBody"
      borderTopStyle="solid"
      borderTopWidth="borderWidth10"
      borderTopColor="colorBorderWeaker"
      paddingY="space60"
      paddingX="space40"
      display="flex"
      justifyContent="space-around"
    >
      <Box display="flex" alignItems="center" columnGap="space40" maxWidth="1200px">
        To enhance our site, we utilize tools that establish cookies. The data gathered by these tools is anonymized. If
        you opt to decline the use of cookies on this site, no analytics service will be initiated.
        <Box
          flexShrink={0}
          flexGrow={1}
          columnGap="space40"
          rowGap="space40"
          display="flex"
          flexDirection={['column', 'column', 'row']}
        >
          <Button variant="primary" size="small" onClick={onAccept}>
            Accept cookies
          </Button>
          <Button variant="secondary" size="small" onClick={onReject}>
            Reject cookies
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
