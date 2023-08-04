import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Alert} from '@twilio-paste/alert';
import {Button} from '@twilio-paste/button';

export const CookieConsent: React.FC<{onAccept: () => void; onReject: () => void}> = ({onAccept, onReject}) => {
  return (
    <Box zIndex="zIndex90" position="fixed" bottom="0" width="100%">
      <Alert variant="neutral">
        <Box display="flex" alignItems="center" columnGap="space40">
          To help us improve this site we use tools that set cookies. Data collected by those tools is annonimized. If
          you choose to reject the use of cookies on this site, no analytics service will be initialized.
          <Button variant="secondary" size="small" onClick={onAccept}>
            Accept cookies
          </Button>
          <Button variant="destructive_link" size="small" onClick={onReject}>
            Reject cookies
          </Button>
        </Box>
      </Alert>
    </Box>
  );
};
