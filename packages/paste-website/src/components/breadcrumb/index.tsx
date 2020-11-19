import * as React from 'react';
import {styled, css} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {SiteLink} from '../SiteLink';

const CrumbSlash: React.FC<{}> = () => (
  <Box display="inline" paddingLeft="space20" paddingRight="space20">
    <Text as="span" color="colorTextWeak">
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

const BreadcrumbItem = styled(SiteLink)(
  css({
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight30',
    letterSpacing: 'normal',
  })
);

export {Breadcrumb, BreadcrumbItem};
