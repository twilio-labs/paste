import * as React from 'react';
import {keyframes, css} from '@emotion/core';
import styled from '@emotion/styled';
import {LoadingIcon, LoadingIconProps} from '@twilio-paste/icons/react/LoadingIcon';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

const SpinningWrapper = styled.div(
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
}

const Spinner: React.FC<SpinnerProps> = props => (
  <SpinningWrapper>
    <LoadingIcon {...props} />
  </SpinningWrapper>
);

Spinner.defaultProps = {
  decorative: false,
};

export {Spinner};
