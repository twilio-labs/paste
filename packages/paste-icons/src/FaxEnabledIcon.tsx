/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface FaxEnabledIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FaxEnabledIcon: React.FC<FaxEnabledIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[FaxEnabledIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            height="100%"
            width="100%"
            viewBox="0 0 1024 1024"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              d="M161.569 311.4v53.856h484.705V311.4H161.569m0 107.712v53.857h484.705v-53.857H161.569m0 107.713v53.856h430.849v-53.856H161.569m807.843-26.39c-47.555-36.837-114.014-36.837-161.569 0V177.298c0-62.204 67.32-101.034 121.177-69.96 24.989 14.434 40.392 41.093 40.392 69.96v323.137m53.856-323.137c10.556-103.673-95.002-179.88-190.059-137.226-44.108 19.82-74.321 61.666-79.222 109.759H0V742.25h161.569v254.2l343.064-254.2h383.994c72.706.054 132.325-57.68 134.641-130.332V175.682v1.616M888.627 688.393H484.706L215.425 889.277V688.393H53.856V203.688h700.131V580.68h58.703c20.735-58.65 97.157-72.814 137.549-25.582 40.446 47.286 14.541 120.584-46.64 131.948-4.9.916-9.963 1.346-14.972 1.346"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

FaxEnabledIcon.displayName = 'FaxEnabledIcon';
export {FaxEnabledIcon};
