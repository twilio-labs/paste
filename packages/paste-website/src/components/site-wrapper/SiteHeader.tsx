import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Anchor} from '@twilio-paste/anchor';
import {useTheme} from '@twilio-paste/theme';
import {ThemeSwitcher} from '../ThemeSwitcher';
// import {Search} from '../search';
import {ContactUsMenu} from '../ContactUsMenu';
import GithubIcon from '../icons/GithubIcon';

export const SiteHeader: React.FC<{}> = () => {
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
      top="0"
      zIndex="zIndex80"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <ThemeSwitcher />
        <Box marginTop={['space40', 'space40', 'space40', 'space0']}>
          <Stack orientation="horizontal" spacing="space60">
            <Box
              minWidth={['size20', 'size20', 'size20', 'size40']}
              marginBottom={['space40', 'space40', 'space40', 'space0']}
            >
              {/* <Search /> */}
            </Box>
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
