import * as React from 'react';
import styled from '@emotion/styled';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {useTheme} from '@twilio-paste/theme';
import {ThemeSwitcher} from '../theme-switcher';
import GithubIcon from '../svg/github-icon';

interface StyledFlexProps {
  justifyContent?: string;
  alignItems?: string;
}
export const StyledFlex = styled.div<StyledFlexProps>(({justifyContent, alignItems = 'center'}) => ({
  display: 'flex',
  justifyContent,
  alignItems,
}));

export const SiteStickyHeader: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <Box
      as="aside"
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderLight"
      borderStyle="none none solid none"
      borderBottomWidth="borderWidth10"
      px="space80"
      py="space60"
      mb="space140"
      css={{
        '@supports (position: sticky)': {
          left: 0,
          marginLeft: `-${theme.space.space200}`,
          marginRight: `-${theme.space.space200}`,
          paddingLeft: `${theme.space.space200}`,
          position: 'sticky',
          right: 0,
          top: 0,
          zIndex: 10,
        },
      }}
    >
      <StyledFlex justifyContent="space-between">
        <ThemeSwitcher />
        <StyledFlex>
          <Box mr="space60">
            <Anchor href="http://www.github.com/twilio-labs/paste/issues">Ask a question</Anchor>
          </Box>
          <Box mr="space60">
            <Anchor href="http://www.github.com/twilio-labs/paste/issues">Report a bug</Anchor>
          </Box>
          <StyledFlex>
            v0.1
            <Box ml="space30">
              <Anchor href="http://www.github.com/twilio-labs/paste">
                <GithubIcon
                  css={{height: theme.heights.sizeIcon30, width: theme.heights.sizeIcon30}}
                  title="View this project on github"
                  color={theme.textColors.colorTextWeak}
                />
              </Anchor>
            </Box>
          </StyledFlex>
        </StyledFlex>
      </StyledFlex>
    </Box>
  );
};
