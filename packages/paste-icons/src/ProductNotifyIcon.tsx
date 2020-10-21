/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductNotifyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductNotifyIcon: React.FC<ProductNotifyIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductNotifyIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductNotifyIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 3.996a.5.5 0 110 .997H3.25a.25.25 0 00-.25.25v7.473c0 .137.112.249.25.249H5.5a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h7.25a.25.25 0 00.25-.248v-1.744a.5.5 0 011 0v1.744c0 .688-.56 1.245-1.25 1.245H9.69l-3.235 2.82A.877.877 0 015 16.12V13.96H3.25c-.69 0-1.25-.557-1.25-1.245V5.242c0-.688.56-1.246 1.25-1.246H9zM14.5 3C16.433 3 18 4.561 18 6.488a3.494 3.494 0 01-3.5 3.487A3.494 3.494 0 0111 6.488 3.494 3.494 0 0114.5 3zm0 .996c-1.38 0-2.5 1.116-2.5 2.492a2.496 2.496 0 002.5 2.49c1.38 0 2.5-1.115 2.5-2.49a2.496 2.496 0 00-2.5-2.492zm0 1.495c.552 0 1 .446 1 .997 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductNotifyIcon.displayName = 'ProductNotifyIcon';
export {ProductNotifyIcon};
