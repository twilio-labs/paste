import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {SiteLink, SiteLinkProps} from '../SiteLink';

interface GetStartedCardLinkProps {
  href: SiteLinkProps['href'];
  onClick?: () => void;
}
export const GetStartedCardLink: React.FC<GetStartedCardLinkProps> = ({children, href}) => {
  return (
    <Text as="p" fontWeight="fontWeightSemibold">
      <SiteLink href={href}>{children}</SiteLink>
    </Text>
  );
};
