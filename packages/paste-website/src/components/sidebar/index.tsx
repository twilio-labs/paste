import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Header} from './Header';
import {Navigation} from './Navigation';

const Sidebar: React.FC<{}> = () => {
  return (
    <Box
      backgroundColor="colorBackground"
      paddingTop="space70"
      paddingRight="space40"
      paddingBottom="space70"
      paddingLeft="space40"
    >
      <Header siteTitle="Paste" siteSubTitle="Design System" siteVersion="v0.1" />
      <Navigation />
    </Box>
  );
};

export {Sidebar};
