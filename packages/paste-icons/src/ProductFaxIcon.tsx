/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductFaxIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductFaxIcon: React.FC<ProductFaxIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductFaxIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductFaxIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.5 3.986a2.504 2.504 0 013.405-.549 2.652 2.652 0 011.092 2.01l.003.185v5.836a2.503 2.503 0 01-2.302 2.486l-.198.008H9.69l-3.25 2.823a.868.868 0 01-1.434-.551L5 16.122v-2.16H3.25c-.647 0-1.18-.49-1.244-1.12L2 12.716V5.233c0-.646.492-1.177 1.122-1.24l.128-.007H13.5zm-.5.998H3.25a.25.25 0 00-.243.192L3 5.233v7.482a.25.25 0 00.193.243l.057.007H5.5a.5.5 0 01.355.14.498.498 0 01.14.279l.005.08v2.384l3.17-2.759a.5.5 0 01.24-.116l.09-.008h6.092a1.499 1.499 0 001.056-2.479 1.502 1.502 0 00-1.148-.514 1.461 1.461 0 00-1.153.543l-.087.12a.7.7 0 01-.58.334.68.68 0 01-.673-.578l-.007-.1V4.984zM9 9.972a.499.499 0 010 .997H5.499a.499.499 0 110-.997H9zm6.437-6.002l-.163.016c-.712.107-1.24.7-1.275 1.404v4.083a2.505 2.505 0 012.84-.11l.16.11v-3.99a1.495 1.495 0 00-1.562-1.513zM10 6.98a.499.499 0 010 .998H5.499a.499.499 0 010-.998H10z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductFaxIcon.displayName = 'ProductFaxIcon';
export {ProductFaxIcon};
