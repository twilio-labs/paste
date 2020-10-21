/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductCodeExchangePartnerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductCodeExchangePartnerIcon: React.FC<ProductCodeExchangePartnerIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductCodeExchangePartnerIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductCodeExchangePartnerIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.991 5.158l3.445 1.172c.197-.189.447-.31.722-.327l.128-.001H18.5a.5.5 0 01.09.992l-.09.008h-1.239c-.102-.005-.215.1-.25.257L17 7.343v5.805c.007.195.11.33.233.356l.053.004H18.5a.5.5 0 01.09.993l-.09.008h-1.191a1.176 1.176 0 01-.904-.364l-.013.005-.087.025-3.53.675a.5.5 0 01-.145.006l-.141.002-.016.068-.062.182a2.019 2.019 0 01-2.024 1.265l-.08-.01-.003.072a1.732 1.732 0 01-.47 1.029l-.121.115a1.729 1.729 0 01-2.327-.059l-.107-.113-3.067-3.414-.196.005-.068-.005a1.364 1.364 0 01-.985.515H1.5a.5.5 0 01-.09-.992l.09-.008h1.353a.385.385 0 00.386-.272l.011-.068V7.365a.38.38 0 00-.333-.358l-.084-.005H1.5a.5.5 0 010-1h1.313c.559-.023 1.055.29 1.291.769l2.04-.816a2.406 2.406 0 012.192.2l.167.114.1.082 2.296-1.066a2.638 2.638 0 012.092-.127zM7.044 6.781c-.18 0-.36.034-.528.102L4.25 7.79l-.001 5.203.172-.004a.5.5 0 01.32.107l.062.06 3.227 3.59a.73.73 0 001.275-.372l.008-.104-.001-.357-.75-.751a.5.5 0 01.638-.766l.07.058.823.824.066.027a1.018 1.018 0 001.378-.757l-1.182-1.182a.5.5 0 01.638-.765l.07.058 1.198 1.199.241.001a.846.846 0 00.74-1.258l-.057-.088L10.523 9.1l-1.519.503a1.554 1.554 0 01-1.897-.824c-.312-.67-.11-1.45.458-1.897a1.39 1.39 0 00-.52-.1zm4.451-.666l-.16.071L8.27 7.609a.569.569 0 00-.257.748.555.555 0 00.587.316l.09-.021 1.855-.613a.496.496 0 01.008-.003L11.87 7.6a.5.5 0 01.397.915l-.083.036-.652.215 2.447 3.138a1.847 1.847 0 01.29 1.642l1.734-.333-.003-.045V7.323l.007-.082-3.349-1.14a1.646 1.646 0 00-1.163.014z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductCodeExchangePartnerIcon.displayName = 'ProductCodeExchangePartnerIcon';
export {ProductCodeExchangePartnerIcon};
