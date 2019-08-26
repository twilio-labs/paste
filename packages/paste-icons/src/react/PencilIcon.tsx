/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PencilIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PencilIcon: React.FC<PencilIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 20 20">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.63 13.088l.613-.613 2.121 2.121-.613.613 9.452-9.452a1.5 1.5 0 00-2.121-2.121l-9.453 9.452zm-.04.148l-.756 2.769 2.77-.755-2.015-2.014zM16.91 2.929a2.5 2.5 0 010 3.535L7.364 16.01a.5.5 0 01-.222.13l-3.89 1.06a.5.5 0 01-.613-.614l1.06-3.89a.5.5 0 01.13-.221l9.545-9.546a2.5 2.5 0 013.536 0zm-3.89 1.768l.708-.708 2.121 2.122-.707.707-2.121-2.121z"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PencilIcon.defaultProps = {
  title: 'Pencil Icon',
  decorative: true,
};

PencilIcon.displayName = 'PencilIcon';

export {PencilIcon};
