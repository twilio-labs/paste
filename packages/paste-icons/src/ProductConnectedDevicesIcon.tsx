/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductConnectedDevicesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductConnectedDevicesIcon: React.FC<ProductConnectedDevicesIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductConnectedDevicesIcon]: Missing a title for non-decorative icon.');
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
              d="M7.232 10.5c.299 0 .586.107.811.299l.073.067 1.018 1.018c.21.21.339.49.362.785l.004.099v3.982a1.25 1.25 0 01-1.168 1.247L8.25 18h-3a1.25 1.25 0 01-1.247-1.168L4 16.75v-5a1.25 1.25 0 011.168-1.247l.082-.003h1.982zm7.518 0a1.25 1.25 0 011.246 1.151l.004.099v5a1.25 1.25 0 01-1.168 1.247L14.75 18h-3a1.25 1.25 0 01-1.246-1.151l-.004-.099v-3.982c0-.299.107-.586.299-.811l.067-.073 1.018-1.018a1.25 1.25 0 01.785-.362l.099-.004h1.982zm-7.518 1H5.25a.25.25 0 00-.246.205L5 11.75v5a.25.25 0 00.205.246L5.25 17h3a.25.25 0 00.246-.205l.004-.045v-3.982a.248.248 0 00-.048-.147l-.025-.03-1.018-1.018a.248.248 0 00-.137-.07l-.04-.003zm7.518 0h-1.982a.248.248 0 00-.147.048l-.03.025-1.018 1.018a.248.248 0 00-.07.137l-.003.04v3.982a.25.25 0 00.205.246l.045.004h3a.25.25 0 00.246-.205L15 16.75v-5a.25.25 0 00-.205-.246l-.045-.004zm-1.245 2.466a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h.5zm-6.505 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H7zM10 9a1 1 0 110 2 1 1 0 010-2zM8.25 2a1.25 1.25 0 011.247 1.168l.003.082v3.982c0 .299-.107.586-.299.811l-.067.073-1.018 1.018a1.25 1.25 0 01-.785.362l-.099.004H5.25a1.25 1.25 0 01-1.247-1.168L4 8.25v-5a1.25 1.25 0 011.168-1.247L5.25 2h3zm6.5 0a1.25 1.25 0 011.246 1.151L16 3.25v5a1.25 1.25 0 01-1.168 1.247l-.082.003h-1.982a1.25 1.25 0 01-.811-.299l-.073-.067-1.018-1.018a1.25 1.25 0 01-.362-.785l-.004-.099V3.25a1.25 1.25 0 011.168-1.247L11.75 2h3zm-6.5 1h-3a.25.25 0 00-.246.205L5 3.25v5a.25.25 0 00.205.246l.045.004h1.982a.248.248 0 00.147-.048l.03-.025 1.018-1.018a.248.248 0 00.07-.137l.003-.04V3.25a.25.25 0 00-.205-.246L8.25 3zm6.5 0h-3a.25.25 0 00-.246.205l-.004.045v3.982c0 .053.017.105.048.147l.025.03 1.018 1.018a.248.248 0 00.137.07l.04.003h1.982a.25.25 0 00.246-.205L15 8.25v-5a.25.25 0 00-.205-.246L14.75 3zm-1.245 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h.5zM7 4a.5.5 0 01.5.5v1A.5.5 0 017 6h-.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H7z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductConnectedDevicesIcon.displayName = 'ProductConnectedDevicesIcon';
export {ProductConnectedDevicesIcon};
