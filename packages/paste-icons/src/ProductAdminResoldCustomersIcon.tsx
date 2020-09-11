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
              d="M14.313 13.77l.062.051 1.197 1.205a1.773 1.773 0 11-.56.571l-1.204-1.212a.4.4 0 01.505-.615zm-8.122.05a.4.4 0 01.053.502l-.051.063-1.206 1.212a1.773 1.773 0 11-.56-.571l1.198-1.205a.4.4 0 01.566-.001zm10.335 1.727a.97.97 0 00-.972.973.973.973 0 10.972-.973zm-13.052 0a.973.973 0 100 1.945.973.973 0 000-1.945zM10.007 5.14a2.287 2.287 0 01.558 4.506 3.488 3.488 0 012.93 3.443.4.4 0 01-.4.4H6.92a.4.4 0 01-.4-.4 3.49 3.49 0 012.929-3.443 2.287 2.287 0 01.559-4.506zm0 5.261a2.69 2.69 0 00-2.642 2.187l-.016.101h5.315l-.016-.101a2.69 2.69 0 00-2.471-2.182zm6.513-2.516a1.773 1.773 0 11-1.727 2.174l-1.705-.001a.4.4 0 01-.08-.792l.08-.008h1.704a1.773 1.773 0 011.728-1.373zm-13.04 0c.842 0 1.546.586 1.728 1.373h1.704a.4.4 0 01.08.792l-.08.008-1.705.001A1.773 1.773 0 113.48 7.884zm13.04.8a.973.973 0 100 1.945.973.973 0 000-1.945zm-13.04 0a.973.973 0 100 1.945.973.973 0 000-1.945zm6.527-2.745a1.487 1.487 0 100 2.975 1.487 1.487 0 000-2.975zm6.513-4.231a1.773 1.773 0 11-.921 3.287l-1.886 1.871a.4.4 0 01-.615-.505l.052-.062 1.876-1.864a1.773 1.773 0 011.494-2.727zm-13.04 0a1.773 1.773 0 011.494 2.727l1.877 1.864a.4.4 0 01-.501.618l-.063-.05-1.885-1.872a1.773 1.773 0 11-.922-3.287zm13.04.8a.973.973 0 00-.688 1.66l.016.015a.973.973 0 10.671-1.675zm-13.04 0a.973.973 0 100 1.945.973.973 0 000-1.945z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductAdminResoldCustomersIcon.displayName = 'ProductAdminResoldCustomersIcon';
export {ProductAdminResoldCustomersIcon};
