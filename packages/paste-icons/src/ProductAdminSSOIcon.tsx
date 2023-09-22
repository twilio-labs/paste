import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductAdminSSOIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminSSOIcon = React.forwardRef<HTMLElement, ProductAdminSSOIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductAdminSSOIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductAdminSSOIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.387 1.518a.797.797 0 01.659.15.755.755 0 01.292.594l-.001.644h4.994c.396 0 .723.287.775.66l.007.103v1.055c0 .226-.189.41-.421.41a.418.418 0 01-.412-.328l-.009-.082v-.997l-4.934-.001v12.547h4.933l.001-.982c0-.198.144-.364.336-.402l.085-.008c.203 0 .373.14.412.327l.009.083v1.04a.769.769 0 01-.676.755l-.106.007H9.337l.001.645a.751.751 0 01-.207.516l-.085.078a.797.797 0 01-.659.15l-5.774-1.25A.766.766 0 012 16.488V3.512c0-.357.255-.666.612-.743zm.109.816L2.84 3.558v12.883l5.655 1.225V2.334zm5.835 3.387c1.371 0 2.493 1.04 2.58 2.355l.006.165v.293h.662c.204 0 .373.141.412.328l.009.083v4.924c0 .227-.188.41-.42.41h-6.497a.415.415 0 01-.421-.41V8.945c0-.227.188-.41.42-.41l.662-.001v-.293c0-1.392 1.159-2.52 2.587-2.52zm2.826 3.633h-5.654v4.105h5.654V9.354zm-2.826.764l.098.007a.59.59 0 01.503.579c0 .162-.067.309-.177.415v1.343c0 .227-.19.41-.422.41a.42.42 0 01-.414-.327l-.009-.083v-1.34a.577.577 0 01-.18-.418.59.59 0 01.503-.579l.098-.007zM5.781 8.66a1.538 1.538 0 011.362.071c.465.262.751.746.751 1.269 0 .524-.286 1.007-.751 1.269a1.538 1.538 0 01-1.504 0A1.459 1.459 0 014.887 10c0-.523.287-1.007.752-1.269zm.94.781a.677.677 0 00-.661 0 .642.642 0 00-.331.559c0 .23.126.444.33.559a.677.677 0 00.663 0 .642.642 0 00.33-.559.642.642 0 00-.33-.559zm7.61-2.9c-.913 0-1.662.683-1.738 1.554l-.007.146v.293h3.489v-.293c0-.939-.78-1.7-1.744-1.7z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAdminSSOIcon.displayName = 'ProductAdminSSOIcon';
export { ProductAdminSSOIcon };
