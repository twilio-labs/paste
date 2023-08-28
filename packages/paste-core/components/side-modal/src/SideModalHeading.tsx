import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import type {HeadingProps} from '@twilio-paste/heading';
import type {BoxElementProps} from '@twilio-paste/box';

export interface SideModalHeadingProps extends Omit<HeadingProps, 'marginBottom' | 'variant' | 'as'> {
  children: NonNullable<React.ReactNode>;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  element?: BoxElementProps['element'];
}
const SideModalHeading = React.forwardRef<HTMLHeadingElement, SideModalHeadingProps>(
  ({children, as = 'h2', element = 'SIDE_MODAL_HEADING', ...props}, ref) => {
    return (
      <Heading {...props} as={as} element={element} marginBottom="space0" variant="heading30" ref={ref}>
        {children}
      </Heading>
    );
  }
);
SideModalHeading.displayName = 'SideModalHeading';

export {SideModalHeading};
