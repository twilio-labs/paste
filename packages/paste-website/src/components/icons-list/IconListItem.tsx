import { Box } from "@twilio-paste/box";
import { CompositeItem } from "@twilio-paste/reakit-library";
import type { CompositeStateReturn } from "@twilio-paste/reakit-library";
import { styled } from "@twilio-paste/styling-library";
import * as React from "react";

import { GenericIconProps } from "@twilio-paste/icons/esm/types";
import dynamic from "next/dynamic";
import { IconTile } from "./IconTile";
import type { IconObject } from "./types";

/*
 * Our Grid Columns don't wrap equal width columns with out a new grid row. The width calc is based on the number of columns as children.
 * But box doesn't take percentage widths.
 */
const IconTileWrapper = styled(Box)({
  width: "33.33%",
});

const getDynamicComponent = (name: string) => {
  const importName = `@twilio-paste/icons/esm/${name}`;

  return dynamic<GenericIconProps>(() => import(importName).then((m) => m.AcceptIcon), {
    ssr: false,
  });
};

interface IconListItemProps extends CompositeStateReturn {
  icon: IconObject;
  setSelectedIcon: (icon: IconObject) => void;
}
export const IconListItem: React.FC<React.PropsWithChildren<IconListItemProps>> = ({
  icon,
  setSelectedIcon,
  ...props
}) => {
  const { Component, name } = icon;
  const importName = `@twilio-paste/icons/esm/${name}`;
  const ImportComponent = getDynamicComponent(name);

  // @ts-ignore
  const El = dynamic<GenericIconProps>(() => import(importName).then((m) => m.AcceptIcon), {
    ssr: false,
  });

  return (
    <IconTileWrapper paddingX="space40" marginBottom="space60">
      <CompositeItem as={IconTile} icon={icon} onClick={() => setSelectedIcon(icon)} {...props}>
        <Box size="sizeIcon70">
          <El decorative />
          <ImportComponent decorative />
        </Box>
      </CompositeItem>
    </IconTileWrapper>
  );
};
