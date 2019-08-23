/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ViewIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ViewIcon: React.FC<ViewIconProps> = ({title, decorative, ...props}) => (
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
            d="M512 839.884c-273.86 0-488.186-297.674-500.093-309.581L0 512.442l11.907-17.86C23.814 482.675 238.14 185 512 185s494.14 297.675 500.093 309.582l11.907 17.86-11.907 17.861C1006.14 542.21 785.86 839.884 512 839.884M77.395 512.442c47.628 59.535 232.186 267.907 440.558 267.907 208.373 0 386.977-208.372 440.559-267.907C904.93 452.907 720.372 244.535 512 244.535S125.023 452.907 77.395 512.442M512 691.047c-101.209 0-178.605-77.396-178.605-178.605 0-101.209 77.396-178.605 178.605-178.605 101.209 0 178.605 77.396 178.605 178.605 0 101.209-77.396 178.605-178.605 178.605m0-297.675c-65.488 0-119.07 53.582-119.07 119.07 0 65.489 53.582 119.07 119.07 119.07s119.07-53.581 119.07-119.07c0-65.488-53.582-119.07-119.07-119.07"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ViewIcon.defaultProps = {
  title: 'View Icon',
  decorative: true,
};

ViewIcon.displayName = 'ViewIcon';

export {ViewIcon};
