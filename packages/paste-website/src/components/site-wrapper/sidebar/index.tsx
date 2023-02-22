import {Box} from '@twilio-paste/box';
import {styled} from '@twilio-paste/styling-library';

import {SidebarNavigation} from './SidebarNavigation';
import {ContactUsMenu} from '../../ContactUsMenu';
import {SITE_MASTHEAD_HEIGHT} from '../../../constants';

const StyledSidebar = styled(Box)(() => ({
  height: `calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`,
  WebkitOverflowScrolling: 'touch',
}));

const Sidebar = (): JSX.Element => {
  return (
    <StyledSidebar
      as="aside"
      backgroundColor="colorBackground"
      borderRightColor="colorBorderWeak"
      borderRightWidth="borderWidth10"
      borderRightStyle="solid"
      position="sticky"
      top="0px"
      width="sizeSidebar"
      display={['none', 'none', 'flex']}
      flexDirection="column"
      zIndex="zIndex20"
    >
      <SidebarNavigation />
      <ContactUsMenu />
    </StyledSidebar>
  );
};

export {Sidebar};
