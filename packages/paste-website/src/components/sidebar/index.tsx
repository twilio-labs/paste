import * as React from 'react';
import {Box} from '@twilio-paste/box';
import styled from '@emotion/styled';
import {Header} from './Header';
import {Navigation} from './Navigation';

const StyledSidebar = styled(Box)`
  height: 100vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const Sidebar: React.FC<{}> = () => {
  return (
    <StyledSidebar
      backgroundColor="colorBackground"
      paddingTop="space70"
      paddingRight="space40"
      paddingBottom="space70"
      paddingLeft="space40"
    >
      <Header siteTitle="Paste" siteSubTitle="Design System" />
      <Navigation />
    </StyledSidebar>
  );
};

export {Sidebar};
