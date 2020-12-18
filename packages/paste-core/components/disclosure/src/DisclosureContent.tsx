import * as React from 'react';
import * as PropTypes from 'prop-types';
import {DisclosurePrimitiveContent, DisclosurePrimitiveContentProps} from '@twilio-paste/disclosure-primitive';
import {Box, BoxStyleProps} from '@twilio-paste/box';
import {DisclosureContext, Variants} from './Disclosure';

const getVariantStyles = (variant: Variants): BoxStyleProps => {
  switch (variant) {
    case 'contained':
      return {
        borderTopStyle: 'solid',
        borderTopWidth: 'borderWidth20',
        borderTopColor: 'colorBorderLighter',
        padding: 'space50',
      };
    default:
      return {};
  }
};

export interface DisclosureContentProps extends Omit<DisclosurePrimitiveContentProps, keyof BoxStyleProps> {
  children: NonNullable<React.ReactNode>;
}
const DisclosureContent = React.forwardRef<HTMLDivElement, DisclosureContentProps>(({children, ...props}, ref) => {
  const {disclosure, variant} = React.useContext(DisclosureContext);
  return (
    <DisclosurePrimitiveContent {...disclosure} {...props} as={Box} ref={ref} {...getVariantStyles(variant)}>
      {children}
    </DisclosurePrimitiveContent>
  );
});
DisclosureContent.displayName = 'DisclosureContent';

if (process.env.NODE_ENV === 'development') {
  DisclosureContent.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {DisclosureContent};
