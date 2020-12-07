import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {SiteLink, SiteLinkProps} from '../SiteLink';

export interface NewComponentBannerAnchorProps {
  to: SiteLinkProps['to'];
}

const NewComponentBannerLink: React.FC<NewComponentBannerAnchorProps> = ({children, to}) => {
  return (
    <Box
      as="span"
      flex="0 0 auto"
      fontSize={['fontSize20', 'fontSize30']}
      fontWeight="fontWeightSemibold"
      lineHeight={['lineHeight20', 'lineHeight30']}
      marginLeft="space30"
    >
      <SiteLink to={to}>{children}</SiteLink>
    </Box>
  );
};

export {NewComponentBannerLink};
