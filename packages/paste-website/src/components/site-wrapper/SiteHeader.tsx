import * as React from 'react';
import styled from '@emotion/styled';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {useTheme} from '@twilio-paste/theme';
import {Absolute} from '@twilio-paste/absolute';
import {ThemeSwitcher} from '../ThemeSwitcher';
import GithubIcon from '../icons/GithubIcon';
import {SIDEBAR_WIDTH, HEADER_HEIGHT} from './constants';
import {version} from '../../../../../package.json';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';

interface FlexProps {
  justifyContent?: string;
  alignItems?: string;
}

// TODO: Replace with Paste Flex component
export const Flex = styled.div<FlexProps>(({justifyContent, alignItems = 'center'}) => ({
  display: 'flex',
  justifyContent,
  alignItems,
}));

export const SiteHeader: React.FC<{}> = () => {
  const theme = useTheme();
  const {theme: activeTheme} = useActiveSiteTheme();
  return (
    <>
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
        <Flex justifyContent="space-between">
          <ThemeSwitcher />
          {activeTheme === 'default' && (
            <Box
              backgroundColor="colorBackgroundWarningLightest"
              borderRadius="borderRadius20"
              padding="space20"
              paddingLeft="space40"
              paddingRight="space40"
            >
              <strong>WARNING:</strong> The Paste theme is an <em>extremely early</em> preview of future work!!!
            </Box>
          )}
          <Flex>
            <Box marginRight="space60">
              <Anchor href="https://www.github.com/twilio-labs/paste/issues">Ask a question</Anchor>
            </Box>
            <Box marginRight="space60">
              <Anchor href="https://www.github.com/twilio-labs/paste/issues">Report a bug</Anchor>
            </Box>
            <Flex>
              v{version}
              <Box marginLeft="space30">
                <Anchor href="https://www.github.com/twilio-labs/paste">
                  <GithubIcon
                    css={{height: theme.heights.sizeIcon30, width: theme.heights.sizeIcon30}}
                    title="View this project on github"
                    color={theme.textColors.colorTextWeak}
                  />
                </Anchor>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Absolute>
    </>
  );
};
