import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {SiteLink, SiteLinkProps} from '../SiteLink';

export interface NewComponentBannerAnchorProps {
  children: NonNullable<React.ReactNode>;
  showExternal?: boolean;
  href: SiteLinkProps['href'];
  onClick?: () => void;
}

const NewComponentBannerLink: React.FC<NewComponentBannerAnchorProps> = ({children, href, onClick, showExternal}) => {
  return (
    <Box
      as="span"
      flex="0 0 auto"
      fontSize={['fontSize20', 'fontSize30']}
      fontWeight="fontWeightSemibold"
      lineHeight={['lineHeight20', 'lineHeight30']}
      marginLeft="space30"
    >
      {showExternal ? (
        <Anchor href={href} onClick={onClick} showExternal={showExternal}>
          {children}
        </Anchor>
      ) : (
        <SiteLink href={href} onClick={onClick}>
          {children}
        </SiteLink>
      )}
    </Box>
  );
};

export {NewComponentBannerLink};
