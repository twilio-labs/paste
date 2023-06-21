import * as React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@twilio-paste/button';
import {Box, type BoxProps} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {ChevronDoubleLeftIcon} from '@twilio-paste/icons/esm/ChevronDoubleLeftIcon';
import {ChevronDoubleRightIcon} from '@twilio-paste/icons/esm/ChevronDoubleRightIcon';

import {SidebarContext} from '../SidebarContext';

export interface SidebarCollapseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  i18nCollapseLabel: string;
  i18nExpandLabel: string;
  element?: BoxProps['element'];
  onClick?: () => void;
}

export const SidebarCollapseButton = React.forwardRef<HTMLButtonElement, SidebarCollapseButtonProps>(
  ({i18nExpandLabel, i18nCollapseLabel, element = 'SIDEBAR_COLLAPSE_BUTTON', ...props}, ref) => {
    const {collapsed, sidebarId} = React.useContext(SidebarContext);

    return (
      <Box display="flex" justifyContent="flex-end">
        <Button
          ref={ref}
          size="icon"
          variant="inverse"
          element={element}
          {...props}
          tabIndex={0}
          aria-expanded={!collapsed}
          aria-controls={sidebarId}
        >
          {collapsed ? (
            <>
              <ChevronDoubleRightIcon size="sizeIcon20" decorative element={`${element}_EXPAND`} />
              <ScreenReaderOnly>{i18nExpandLabel}</ScreenReaderOnly>
            </>
          ) : (
            <>
              <ChevronDoubleLeftIcon size="sizeIcon20" decorative element={`${element}_COLLAPSE`} />
              <ScreenReaderOnly>{i18nCollapseLabel}</ScreenReaderOnly>
            </>
          )}
        </Button>
      </Box>
    );
  }
);

SidebarCollapseButton.propTypes = {
  i18nCollapseLabel: PropTypes.string.isRequired,
  i18nExpandLabel: PropTypes.string.isRequired,
  element: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarCollapseButton.displayName = 'SidebarCollapseButton';
