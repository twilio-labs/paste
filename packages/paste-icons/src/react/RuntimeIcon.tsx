/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface RuntimeIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const RuntimeIcon: React.FC<RuntimeIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1024 1024"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M325.173 39.5C145.559 39.5 0 185.059 0 364.673v620.785h29.561c192.384-.414 365.377-117.24 437.506-295.612 162.114-11.706 290.764-141.125 301.524-303.298C917.639 353.321 1023.764 221.183 1024 68.47V39.5H325.173m76.859 650.346c-63.438 134.799-194.394 225.138-342.91 236.49v-236.49h342.91m307.437-295.612c-14.544 132.493-125.103 233.711-258.365 236.49H59.122v-236.49h650.347M964.878 98.622c-15.609 134.563-129.419 236.194-264.869 236.49H62.079c14.721-134.267 128-236.076 263.094-236.49h639.705"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

RuntimeIcon.defaultProps = {
  title: 'Runtime Icon',
  decorative: true,
};

RuntimeIcon.displayName = 'RuntimeIcon';

export {RuntimeIcon};
