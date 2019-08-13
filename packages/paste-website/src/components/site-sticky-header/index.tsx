import * as React from 'react';
import styled from '@emotion/styled';
import {Absolute} from '@twilio-paste/absolute';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {useTheme} from '@twilio-paste/theme';
import {ThemeSwitcher} from '../theme-switcher';
import GithubIcon from '../svg/github-icon';

interface StyledFlexProps {
  justifyContent: string;
  alignItems: string;
}
export const StyledFlex = styled.div<StyledFlexProps>(({justifyContent, alignItems = 'center'}) => ({
  display: 'flex',
  justifyContent: justifyContent ? justifyContent : null,
  alignItems: alignItems ? alignItems : null,
}));

export const SiteStickyHeader: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <Absolute
      as="aside"
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderLight"
      borderStyle="none none solid none"
      borderBottomWidth="borderWidth10"
      pl="space200"
      pr="space80"
      py="space60"
      preset="top_fill"
      mb="space140"
      zIndex="zIndex10"
      css={{
        marginLeft: `-${theme.space.space200}`,
        marginRight: `-${theme.space.space200}`,
        position: 'sticky',
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
                  title="View this project on github"
                  color={theme.textColors.colorTextWeak}
                  size={theme.heights.sizeIcon30}
                />
              </Anchor>
            </Box>
          </StyledFlex>
        </StyledFlex>
      </StyledFlex>
    </Absolute>
  );
};
