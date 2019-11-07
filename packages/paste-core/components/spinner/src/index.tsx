import * as React from 'react';
import {keyframes, css} from '@emotion/core';
import styled from '@emotion/styled';
import {LoadingIcon, LoadingIconProps} from '@twilio-paste/icons/esm/LoadingIcon';
import {IconSize} from '@twilio-paste/types';
import {size as sizeFn} from 'styled-system';

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
  sizeFn,
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

const Spinner: React.FC<SpinnerProps> = ({as, size, iconColor, decorative}) => (
  <SpinningWrapper size={size}>
    <LoadingIcon as={as} size={size} iconColor={iconColor} decorative={decorative} />
  </SpinningWrapper>
);

Spinner.defaultProps = {
  size: 'sizeIcon20',
};

Spinner.displayName = 'Spinner';
export {Spinner};
