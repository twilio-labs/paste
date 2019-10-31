import * as React from 'react';
import {keyframes, css} from '@emotion/core';
import styled from '@emotion/styled';
import {LoadingIcon, LoadingIconProps} from '@twilio-paste/icons/react/LoadingIcon';
import {IconSize} from '@twilio-paste/types';
import {size} from 'styled-system';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

interface SpinnerWrapperProps {
  size?: IconSize;
}

const SpinningWrapper = styled.div<SpinnerWrapperProps>(
  size,
  css({
    display: 'inline-block',
    animation: `${rotate} 2s linear infinite`,
    '@media screen and (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  })
);

interface SpinnerProps extends LoadingIconProps {
  title: string;
  size?: IconSize;
}

const Spinner: React.FC<SpinnerProps> = ({size = 'sizeIcon20', decorative = false, ...props}) => (
  <SpinningWrapper size={size}>
    <LoadingIcon size={size} decorative={decorative} {...props} />
  </SpinningWrapper>
);

Spinner.displayName = 'Spinner';
export {Spinner};
