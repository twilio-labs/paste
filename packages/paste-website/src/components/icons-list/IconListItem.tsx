import * as React from 'react';
import { styled } from '@twilio-paste/styling-library';
import { Box } from '@twilio-paste/box';
import { CompositeItem } from '@twilio-paste/reakit-library';
import type { CompositeStateReturn } from '@twilio-paste/reakit-library';

import { IconTile } from './IconTile';
import type { IconObject } from './types';

/*
 * Our Grid Columns don't wrap equal width columns with out a new grid row. The width calc is based on the number of columns as children.
 * But box doesn't take percentage widths.
 */
const IconTileWrapper = styled(Box)({
  width: '33.33%',
});

interface IconListItemProps extends CompositeStateReturn {
  icon: IconObject;
  setSelectedIcon: (icon: IconObject) => void;
}
export const IconListItem: React.FC<React.PropsWithChildren<IconListItemProps>> = ({
  icon,
  setSelectedIcon,
  ...props
}) => {
  if (icon.name !== 'index') {
    const { Component } = icon;
    return (
      <IconTileWrapper paddingX="space40" marginBottom="space60">
        <CompositeItem as={IconTile} icon={icon} onClick={() => setSelectedIcon(icon)} {...props}>
          <Component decorative size="sizeIcon70" />
        </CompositeItem>
      </IconTileWrapper>
    );
  }
  return null;
};
