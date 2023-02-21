import * as React from 'react';
import {Text} from '@twilio-paste/text';

import type {SiteLinkProps} from '../SiteLink';
import {SiteLink} from '../SiteLink';

interface GetStartedCardLinkProps {
  href: SiteLinkProps['href'];
  onClick?: () => void;
}
export const GetStartedCardLink: React.FC<GetStartedCardLinkProps> = ({children, onClick, href}) => {
  return (
    <Text as="p" fontWeight="fontWeightSemibold">
      <SiteLink href={href} onClick={onClick}>
        {children}
      </SiteLink>
    </Text>
  );
};
