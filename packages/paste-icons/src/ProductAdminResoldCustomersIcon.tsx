/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAdminResoldCustomersIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminResoldCustomersIcon: React.FC<ProductAdminResoldCustomersIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductAdminResoldCustomersIcon]: Missing a title for non-decorative icon.');
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
            viewBox="0 0 20 20"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.417 13.864l.064.053 1.226 1.235a1.816 1.816 0 11-.573.587L13.9 14.495a.41.41 0 01.517-.63zm-8.318.051a.41.41 0 01.054.516l-.052.064-1.234 1.244a1.816 1.816 0 11-.574-.587l1.227-1.235a.41.41 0 01.579-.002zm10.586 1.771a.997.997 0 100 1.993.997.997 0 000-1.993zm-13.37 0a.997.997 0 10.001 1.993.997.997 0 000-1.993zm6.692-10.669a2.345 2.345 0 01.571 4.619 3.574 3.574 0 013.002 3.53.41.41 0 01-.41.41H6.844a.41.41 0 01-.41-.41c0-1.78 1.3-3.257 3.003-3.53a2.344 2.344 0 01.57-4.618zm0 5.393a2.755 2.755 0 00-2.706 2.242l-.016.103h5.444l-.016-.103a2.755 2.755 0 00-2.532-2.237zm6.67-2.579a1.816 1.816 0 11-1.768 2.228h-1.746a.41.41 0 01-.083-.812l.083-.009h1.745a1.817 1.817 0 011.77-1.407zm-13.354 0c.861 0 1.583.601 1.769 1.407h1.745a.41.41 0 01.083.812l-.083.008-1.746.001a1.817 1.817 0 11-1.768-2.228zm13.354.82a.997.997 0 10.001 1.993.997.997 0 000-1.993zm-13.354 0a.997.997 0 100 1.993.997.997 0 000-1.993zm6.684-2.814a1.524 1.524 0 10.001 3.048 1.524 1.524 0 00-.001-3.048zm6.67-4.337a1.816 1.816 0 11-.944 3.369l-1.93 1.919a.41.41 0 01-.63-.518l.053-.064 1.922-1.91a1.816 1.816 0 011.53-2.796zm-13.354 0a1.816 1.816 0 011.53 2.795l1.921 1.91a.41.41 0 01-.513.635l-.064-.052-1.93-1.919A1.816 1.816 0 113.322 1.5zm13.354.82a.997.997 0 10.001 1.993.997.997 0 000-1.993zm-13.354 0a.997.997 0 100 1.993.997.997 0 000-1.993z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductAdminResoldCustomersIcon.displayName = 'ProductAdminResoldCustomersIcon';
export {ProductAdminResoldCustomersIcon};
