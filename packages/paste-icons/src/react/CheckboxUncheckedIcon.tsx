/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CheckboxUncheckedIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CheckboxUncheckedIcon: React.FC<CheckboxUncheckedIconProps> = ({title, decorative, ...props}) => (
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
          <path fill="currentColor" d="M967.111 56.889v910.222H56.889V56.889h910.222M1024 0H0v1024h1024V0" />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CheckboxUncheckedIcon.defaultProps = {
  title: 'Checkbox Unchecked Icon',
  decorative: true,
};

CheckboxUncheckedIcon.displayName = 'CheckboxUncheckedIcon';

export {CheckboxUncheckedIcon};
