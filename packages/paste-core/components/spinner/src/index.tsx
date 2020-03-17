import * as React from 'react';
import * as PropTypes from 'prop-types';
import {keyframes, css} from '@emotion/core';
import styled from '@emotion/styled';
import {LoadingIcon, LoadingIconProps} from '@twilio-paste/icons/esm/LoadingIcon';
import {IconSize, isIconSizeTokenProp} from '@twilio-paste/style-props';
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
  show: boolean;
}

const SpinningWrapper = styled.div<SpinnerWrapperProps>(sizeFn, props =>
  css({
    display: 'inline-block',
    opacity: props.show ? 1 : 0,
    transition: 'opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1)',
    animation: `${rotate} 2s linear infinite`,
    '@media screen and (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  })
);

export interface SpinnerProps extends LoadingIconProps {
  title: string;
  size?: IconSize;
  delay?: number;
}

const Spinner: React.FC<SpinnerProps> = ({as, size, iconColor, decorative, title, delay = 250}) => {
  const [show, setShow] = React.useState(delay === 0);

  React.useEffect(() => {
    if (delay === 0) return;
    const showTimer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(showTimer);
  }, [delay]);

  return (
    <SpinningWrapper size={size} show={show}>
      <LoadingIcon as={as} size={size} iconColor={iconColor} decorative={decorative} title={title} />
    </SpinningWrapper>
  );
};

Spinner.defaultProps = {
  size: 'sizeIcon20',
};

if (process.env.NODE_ENV === 'development') {
  Spinner.propTypes = {
    title: PropTypes.string.isRequired,
    delay: PropTypes.number,
    size: isIconSizeTokenProp,
  };
}

Spinner.displayName = 'Spinner';
export {Spinner};
