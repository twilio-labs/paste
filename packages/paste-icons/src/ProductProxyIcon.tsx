/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductProxyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductProxyIcon: React.FC<ProductProxyIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductProxyIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductProxyIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.75 5.046H15V3.494a.99.99 0 00-.527-.876 1.008 1.008 0 00-1.028.049l-.945.624-2.65 1.755h-6.6C2.56 5.046 2 5.6 2 6.285v7.434c0 .684.56 1.239 1.25 1.239H5v1.55a.99.99 0 001 .992c.197 0 .39-.056.555-.164l3.595-2.378h6.6c.69 0 1.25-.555 1.25-1.24V6.286c0-.685-.56-1.24-1.25-1.24zm-4.25-.56l1.5-.992v1.552h-2.35l.85-.56zm1.5 1.55v4.922c0 .166-.085.32-.225.411l-1.275.843-2.65 1.754H6V9.045c0-.166.085-.32.225-.411l3.925-2.597H14zm-10.75 7.93A.249.249 0 013 13.72V6.285c0-.137.112-.248.25-.248h5.1L5.67 7.806c-.419.276-.67.74-.67 1.239v4.921H3.25zM6 16.51v-1.551h2.35L6 16.508zm11-2.79a.249.249 0 01-.25.247h-5.1l.85-.56 1.83-1.209c.419-.276.67-.74.67-1.239V6.037h1.75c.138 0 .25.11.25.248v7.434z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductProxyIcon.displayName = 'ProductProxyIcon';
export {ProductProxyIcon};
