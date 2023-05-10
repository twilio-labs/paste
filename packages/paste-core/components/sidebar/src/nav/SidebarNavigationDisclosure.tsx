import * as React from 'react';
import PropTypes from 'prop-types';
import {useDisclosurePrimitiveState} from '@twilio-paste/disclosure-primitive';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {DisclosurePrimitiveInitialState} from '@twilio-paste/disclosure-primitive';

import {SidebarNavigationDisclosureContext} from './SidebarNavigationDisclosureContext';
import type {SidebarNavigationDisclosureVariants, SidebarNavigationDisclosureStateReturn} from './types';

export interface DisclosureProps extends DisclosurePrimitiveInitialState, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  state?: SidebarNavigationDisclosureStateReturn;
  variant?: SidebarNavigationDisclosureVariants;
}

const SidebarNavigationDisclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(
  ({children, element = 'DISCLOSURE', variant = 'default', state, ...props}, ref) => {
    const disclosure = state || useDisclosurePrimitiveState({animated: false, ...props});
    const [isDisabled, setIsDisabled] = React.useState(false);

    const disclosureContext = {
      disclosure,
      variant,
      isDisabled,
      setIsDisabled,
    };

    return (
      <SidebarNavigationDisclosureContext.Provider value={disclosureContext}>
        <Box {...safelySpreadBoxProps(props)} variant={variant} element={element} ref={ref}>
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
  variant: PropTypes.oneOf(['default', 'inner'] as SidebarNavigationDisclosureVariants[]),
};

export {SidebarNavigationDisclosure};

export {useDisclosurePrimitiveState as useSidebarNavigationDisclosureState};
