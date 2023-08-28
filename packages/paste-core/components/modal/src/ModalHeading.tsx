import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import type {HeadingProps} from '@twilio-paste/heading';
import type {BoxElementProps} from '@twilio-paste/box';

export interface ModalHeadingProps extends Omit<HeadingProps, 'marginBottom' | 'variant' | 'as'> {
  children: NonNullable<React.ReactNode>;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  element?: BoxElementProps['element'];
}
const ModalHeading = React.forwardRef<HTMLHeadingElement, ModalHeadingProps>(
  ({children, as = 'h2', element = 'MODAL_HEADING', ...props}, ref) => {
    return (
      <Heading {...props} as={as} element={element} marginBottom="space0" variant="heading30" ref={ref}>
        {children}
      </Heading>
    );
  }
);
ModalHeading.displayName = 'ModalHeading';

export {ModalHeading};
