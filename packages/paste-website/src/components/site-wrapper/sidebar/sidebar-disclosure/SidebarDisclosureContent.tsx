import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {DisclosurePrimitiveContent} from '@twilio-paste/disclosure-primitive';
import type {DisclosurePrimitiveContentProps} from '@twilio-paste/disclosure-primitive';

import {SidebarDisclosureContext} from './SidebarDisclosureContext';

interface SidebarDisclosureContentProps extends Omit<DisclosurePrimitiveContentProps, keyof BoxStyleProps> {
  children: React.ReactNode;
}

const StyledNestedList = React.forwardRef<HTMLUListElement, SidebarDisclosureContentProps>(
  ({children, ...props}, ref) => (
    <Box as="ul" padding="space0" margin="space0" listStyleType="none" {...props} ref={ref}>
      {children}
    </Box>
  )
);

export const SidebarDisclosureContent: React.FC<SidebarDisclosureContentProps> = ({children, ...props}) => {
  const {disclosure} = React.useContext(SidebarDisclosureContext);

  return (
    <DisclosurePrimitiveContent as={StyledNestedList} {...disclosure} {...props}>
      {children}
    </DisclosurePrimitiveContent>
  );
};
