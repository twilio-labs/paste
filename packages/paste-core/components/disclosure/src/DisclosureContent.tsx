import * as React from 'react';
import * as PropTypes from 'prop-types';
import {DisclosurePrimitiveContent, DisclosurePrimitiveContentProps} from '@twilio-paste/disclosure-primitive';
import {Box} from '@twilio-paste/box';
import {DisclosureContext, Variants} from './Disclosure';

const getVariantStyles = (variant: Variants): {} => {
  switch (variant) {
    case 'contained':
      return {
        borderTopStyle: 'solid',
        borderTopWidth: 'borderWidth20',
        borderTopColor: 'colorBorderLight',
        padding: 'space50',
      };
    default:
      return {};
  }
};

export interface DisclosureContentProps extends DisclosurePrimitiveContentProps {
  children: NonNullable<React.ReactNode>;
}
const DisclosureContent: React.FC<DisclosureContentProps> = ({children, ...props}) => {
  const {disclosure, variant} = React.useContext(DisclosureContext);
  return (
    <DisclosurePrimitiveContent {...disclosure} {...props} as={Box} {...getVariantStyles(variant)}>
      {children}
    </DisclosurePrimitiveContent>
  );
};
DisclosureContent.displayName = 'DisclosureContent';

if (process.env.NODE_ENV === 'development') {
  DisclosureContent.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {DisclosureContent};
