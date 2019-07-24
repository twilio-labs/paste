import * as React from 'react';
import {keyframes, css} from '@emotion/core';
import styled from '@emotion/styled';
import {SpinnerIcon, SpinnerIconProps} from '@twilio-paste/icons/react/SpinnerIcon';

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

interface SpinnerProps extends SpinnerIconProps {
  title: string;
}

const Spinner = (props: SpinnerProps) => (
  <SpinningWrapper>
    <SpinnerIcon {...props} />
  </SpinningWrapper>
);

Spinner.defaultProps = {
  decorative: false,
};

export {Spinner};
