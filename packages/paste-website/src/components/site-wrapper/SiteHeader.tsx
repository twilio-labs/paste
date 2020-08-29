import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Anchor} from '@twilio-paste/anchor';
import {useTheme} from '@twilio-paste/theme';
import {ThemeSwitcher} from '../ThemeSwitcher';
// import {Search} from '../search';
import {ContactUsMenu} from '../ContactUsMenu';
import GithubIcon from '../icons/GithubIcon';
import {getMainContentComputedOffset} from '../../utils/stickyUtils';
import {SiteBodyContext} from './SiteBodyContext';

export const SiteHeader: React.FC = () => {
  const {isPasteTheme} = React.useContext(SiteBodyContext);
  const theme = useTheme();
  return (
    <Box
      as="aside"
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderLight"
      borderStyle="none none solid none"
      borderBottomWidth="borderWidth10"
      paddingLeft="space200"
      paddingRight="space80"
      paddingTop="space50"
      paddingBottom="space50"
      position="sticky"
      top={`${getMainContentComputedOffset(isPasteTheme)}px`}
      zIndex="zIndex80"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row">
        <ThemeSwitcher />
        <Box marginTop="space0">
          <Stack orientation="horizontal" spacing="space60">
            <Box minWidth={['size30', 'size30', 'size30', 'size40']}>{/* <Search /> */}</Box>
            <ContactUsMenu />
            <Anchor href="https://www.github.com/twilio-labs/paste">
              <GithubIcon
                css={{height: theme.heights.sizeIcon30, width: theme.heights.sizeIcon30}}
                title="View this project on github"
                color={theme.textColors.colorTextWeak}
              />
            </Anchor>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
