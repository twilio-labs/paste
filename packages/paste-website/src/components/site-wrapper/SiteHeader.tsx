import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Flex} from '@twilio-paste/flex';
import {FormInput} from '@twilio-paste/form';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {useTheme} from '@twilio-paste/theme';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';
import {ThemeSwitcher} from '../ThemeSwitcher';
import GithubIcon from '../icons/GithubIcon';
import {SiteHeaderLogo} from './SiteHeaderLogo';
import {PSA_ALERT_HEIGHT} from '../../constants';

export const SiteHeader: React.FC = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== `undefined` && window.docsearch != null) {
      window.docsearch({
        apiKey: process.env.GATSBY_DOCSEARCH_APIKEY,
        indexName: 'twilio_paste',
        inputSelector: `#search-input`,
      });
    }
  }, []);

  return (
    <Box
      as="aside"
      display="flex"
      alignItems="center"
      backgroundColor="colorBackgroundPrimaryDarkest"
      position="sticky"
      top={`${PSA_ALERT_HEIGHT}px`}
      zIndex="zIndex80"
    >
      <SiteHeaderLogo siteTitle="Paste" siteSubTitle="Design System" />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        borderLeftColor="colorBorderInverseDarker"
        borderLeftStyle="solid"
        borderLeftWidth="borderWidth10"
        paddingTop="space60"
        paddingRight="space70"
        paddingBottom="space60"
        paddingLeft="space70"
        width="100%"
      >
        <ThemeSwitcher />
        <Box marginTop="space0">
          <Stack orientation="horizontal" spacing="space60">
            <Box minWidth={['size30', 'size30', 'size30', 'size40']}>
              <FormInput
                id="search-input"
                type="text"
                placeholder="Search..."
                value={value}
                onChange={event => {
                  setValue(event.target.value);
                }}
                variant="inverse"
                insertBefore={<SearchIcon decorative />}
              />
            </Box>
            <Anchor
              display="block"
              href="https://www.github.com/twilio-labs/paste"
              onClick={() =>
                trackCustomEvent({
                  category: 'Header',
                  action: 'Click',
                  label: 'Github Icon',
                })
              }
              variant="inverse"
            >
              <Flex as="span" vAlignContent="center">
                <GithubIcon
                  css={{height: theme.heights.sizeIcon30, width: theme.heights.sizeIcon30}}
                  title="View this project on github"
                  color={theme.textColors.colorTextIconInverse}
                />
                <Text as="span" color="inherit" marginLeft="space30">
                  GitHub
                </Text>
              </Flex>
            </Anchor>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
