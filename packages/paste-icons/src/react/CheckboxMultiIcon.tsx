/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CheckboxMultiIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CheckboxMultiIcon: React.FC<CheckboxMultiIconProps> = ({title, decorative, ...props}) => (
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
            d="M967.111 56.889v910.222H56.889V56.889h910.222M1024 0H0v1024h1024V0M284.444 466.489v85.333h455.112v-85.333H284.444"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CheckboxMultiIcon.defaultProps = {
  title: 'Checkbox Multi Icon',
  decorative: true,
};

CheckboxMultiIcon.displayName = 'CheckboxMultiIcon';

export {CheckboxMultiIcon};
