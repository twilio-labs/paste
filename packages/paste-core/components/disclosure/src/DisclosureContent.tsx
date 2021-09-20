import * as React from 'react';
import {useSpring, animated} from '@twilio-paste/animation-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {DisclosurePrimitiveContent} from '@twilio-paste/disclosure-primitive';
import {DisclosureContext} from './DisclosureContext';
import type {DisclosureContentProps} from './types';
import {DisclosureContentPropTypes} from './PropTypes';

export const AnimatedDisclosureContent = animated(Box);

const DisclosureContent = React.forwardRef<HTMLDivElement, DisclosureContentProps>(
  ({children, element = 'DISCLOSURE_CONTENT', visible, ...props}, ref) => {
    const {disclosure} = React.useContext(DisclosureContext);
    const {opacity} = useSpring({
      opacity: disclosure.visible ? 1 : 0,
      onRest: disclosure.stopAnimation,
      config: {
        mass: 1,
        tension: 150,
        friction: 20,
        duration: 100,
      },
    });

    return (
      <DisclosurePrimitiveContent
        {...disclosure}
        {...safelySpreadBoxProps(props)}
        as={AnimatedDisclosureContent}
        element={element}
        backgroundColor="colorBackgroundBody"
        padding="space50"
        ref={ref}
        style={{
          opacity,
        }}
      >
        {children}
      </DisclosurePrimitiveContent>
    );
  }
);

DisclosureContent.displayName = 'DisclosureContent';

if (process.env.NODE_ENV === 'development') {
  DisclosureContent.propTypes = DisclosureContentPropTypes;
}

export {DisclosureContent};
