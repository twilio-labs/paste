import { Text } from '@twilio-paste/text';
import * as React from 'react';

import type { SiteLinkProps } from '../SiteLink';
import { SiteLink } from '../SiteLink';

interface GetStartedCardLinkProps {
  href: SiteLinkProps['href'];
  onClick?: () => void;
}
export const GetStartedCardLink: React.FC<React.PropsWithChildren<GetStartedCardLinkProps>> = ({
  children,
  onClick,
  href,
}) => {
  return (
    <Text as="p" fontWeight="fontWeightSemibold">
      <SiteLink href={href} onClick={onClick}>
        {children}
      </SiteLink>
    </Text>
  );
};
