import * as React from 'react';
import PropTypes from 'prop-types';
import {useDisclosurePrimitiveState} from '@twilio-paste/disclosure-primitive';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {DisclosurePrimitiveInitialState} from '@twilio-paste/disclosure-primitive';

import {SidebarNavigationDisclosureContext} from './SidebarNavigationDisclosureContext';
import type {SidebarNavigationDisclosureStateReturn} from './types';

export interface DisclosureProps extends DisclosurePrimitiveInitialState {
  children: NonNullable<React.ReactNode>;
  state?: SidebarNavigationDisclosureStateReturn;
  element?: BoxProps['element'];
}

const SidebarNavigationDisclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(
  ({children, element = 'SIDEBAR_NAVIGATION_DISCLOSURE', state, ...props}, ref) => {
    // We check context to see if this disclosure is nested
    const {disclosure: parentDisclosure} = React.useContext(SidebarNavigationDisclosureContext);
    // Set the disclosure state to provide into this component's context
    const disclosure = state || useDisclosurePrimitiveState({animated: false, ...props});

    const disclosureContext = {
      disclosure,
      nested: parentDisclosure != null,
    };

    return (
      <SidebarNavigationDisclosureContext.Provider value={disclosureContext}>
        <Box {...safelySpreadBoxProps(props)} element={element} ref={ref}>
          {children}
        </Box>
      </SidebarNavigationDisclosureContext.Provider>
    );
  }
);
SidebarNavigationDisclosure.displayName = 'SidebarNavigationDisclosure';
SidebarNavigationDisclosure.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export {SidebarNavigationDisclosure};

export {useDisclosurePrimitiveState as useSidebarNavigationDisclosureState};
