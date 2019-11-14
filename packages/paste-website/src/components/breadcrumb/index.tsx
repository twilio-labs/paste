import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {SiteLink} from '../SiteLink';

const CrumbSlash: React.FC<{}> = () => (
  <Box display="inline" paddingLeft="space20" paddingRight="space20">
    <Text as="span" textColor="colorTextWeak">
      /
    </Text>
  </Box>
);

const Breadcrumb: React.FC<{}> = ({children}) => {
  return (
    <nav aria-label="breadcrumb">
      <Box
        as="ol"
        display="flex"
        margin="space0"
        padding="space0"
        css={{
          listStyle: 'none',
        }}
      >
        {React.Children.map(children, child => (
          <Box as="li" margin="space0" padding="space0">
            {child}
            <CrumbSlash />
          </Box>
        ))}
      </Box>
    </nav>
  );
};

// TODO use correct tokens for lineHeight after fix
const BreadcrumbItem = styled(SiteLink)`
  font-size: ${themeGet('fontSizes.fontSize30')};
  line-height: ${themeGet('lineHeights.lineHeight30')};
  letter-spacing: normal;
`;

export {Breadcrumb, BreadcrumbItem};
