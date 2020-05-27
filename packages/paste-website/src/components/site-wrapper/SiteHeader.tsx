import * as React from 'react';
import {Flex} from '@twilio-paste/flex';
import {Stack} from '@twilio-paste/stack';
import {Anchor} from '@twilio-paste/anchor';
import {useTheme} from '@twilio-paste/theme';
import {Absolute} from '@twilio-paste/absolute';
import {ThemeSwitcher} from '../ThemeSwitcher';
import {ContactUsMenu} from '../ContactUsMenu';
import GithubIcon from '../icons/GithubIcon';
import {SIDEBAR_WIDTH, HEADER_HEIGHT} from './constants';
import {version} from '../../../../../package.json';

export const SiteHeader: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <Absolute
      preset="top_fill"
      as="aside"
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderLight"
      borderStyle="none none solid none"
      borderBottomWidth="borderWidth10"
      paddingLeft="space200"
      paddingRight="space80"
      paddingTop="space50"
      paddingBottom="space50"
      marginBottom="space140"
      css={{
        left: SIDEBAR_WIDTH,
        height: HEADER_HEIGHT,
      }}
    >
      <Flex hAlignContent="between" vAlignContent="center">
        <ThemeSwitcher />
        <Stack orientation="horizontal" spacing="space60">
          <ContactUsMenu />
          <Stack orientation="horizontal" spacing="space30">
            <span>v{version}</span>
            <Anchor href="https://www.github.com/twilio-labs/paste">
              <GithubIcon
                css={{height: theme.heights.sizeIcon30, width: theme.heights.sizeIcon30}}
                title="View this project on github"
                color={theme.textColors.colorTextWeak}
              />
            </Anchor>
          </Stack>
        </Stack>
      </Flex>
    </Absolute>
  );
};
