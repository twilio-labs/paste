import {Box} from '@twilio-paste/core/box';
import {SiteHeaderLogo} from './SiteHeaderLogo';

const TopBar = () => {
  return (
    <Box
      as="header"
      alignItems="center"
      display="flex"
      backgroundColor="colorBackgroundPrimaryDarkest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <SiteHeaderLogo title="Paste" subtitle="Theme Designer" />
    </Box>
  );
};

export {TopBar};
