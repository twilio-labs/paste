import * as React from 'react';
import type {MenuPrimitiveButtonProps} from '@twilio-paste/menu-primitive';
import {MenuPrimitiveButton} from '@twilio-paste/menu-primitive';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {ChevronRightIcon} from '@twilio-paste/icons/esm/ChevronRightIcon';
import {StyledMenuItem} from './MenuItem';

export type SubMenuButtonProps = MenuPrimitiveButtonProps;

const SubMenuButton = React.forwardRef<HTMLButtonElement, SubMenuButtonProps>((props, ref) => {
  // MenuPrimitiveButton from reakit types `as` as HTML element names, but accepts components. any prevents type errors
  return (
    <MenuPrimitiveButton {...props} as={StyledMenuItem as any} ref={ref}>
      <MediaObject as="span" verticalAlign="center">
        {props.children && <MediaBody as="span">{props.children}</MediaBody>}
        <MediaFigure as="span" align="end" spacing="space20">
          <ChevronRightIcon decorative size="sizeIcon30" />
        </MediaFigure>
      </MediaObject>
    </MenuPrimitiveButton>
  );
});
SubMenuButton.displayName = 'SubMenuButton';
export {SubMenuButton};
