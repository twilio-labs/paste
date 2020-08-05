/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductProxyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductProxyIcon: React.FC<ProductProxyIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductProxyIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M18.75 7.046H17V5.494a.99.99 0 00-.527-.876 1.008 1.008 0 00-1.028.049l-.945.624-2.65 1.755h-6.6C4.56 7.046 4 7.6 4 8.285v7.434c0 .684.56 1.239 1.25 1.239H7v1.55a.99.99 0 001 .992c.197 0 .39-.056.555-.164l3.595-2.378h6.6c.69 0 1.25-.555 1.25-1.24V8.286c0-.685-.56-1.24-1.25-1.24zm-4.25-.56l1.5-.992v1.552h-2.35l.85-.56zm1.5 1.55v4.922c0 .166-.085.32-.225.411l-1.275.843-2.65 1.754H8v-4.921c0-.166.085-.32.225-.411l3.925-2.597H16zm-10.75 7.93A.249.249 0 015 15.72V8.285c0-.137.112-.248.25-.248h5.1L7.67 9.806c-.419.276-.67.74-.67 1.239v4.921H5.25zM8 18.51v-1.551h2.35L8 18.508zm11-2.79a.249.249 0 01-.25.247h-5.1l.85-.56 1.83-1.209c.419-.276.67-.74.67-1.239V8.037h1.75c.138 0 .25.11.25.248v7.434z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductProxyIcon.displayName = 'ProductProxyIcon';
export {ProductProxyIcon};
