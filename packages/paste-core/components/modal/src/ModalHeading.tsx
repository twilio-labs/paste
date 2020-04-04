import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Heading, HeadingProps} from '@twilio-paste/heading';

export interface ModalHeadingProps extends Omit<HeadingProps, 'marginBottom' | 'variant' | 'as'> {
  children: NonNullable<React.ReactNode>;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const ModalHeading: React.FC<ModalHeadingProps> = ({children, as = 'h2', ...props}) => {
  return (
    <Heading {...props} as={as} marginBottom="space0" variant="heading30">
      {children}
    </Heading>
  );
};
ModalHeading.displayName = 'ModalHeading';

if (process.env.NODE_ENV === 'development') {
  ModalHeading.propTypes = {
    children: PropTypes.node.isRequired,
    as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  };
}
export {ModalHeading};
