import { BoxStyleProps } from "@twilio-paste/box";
import { IconSizeOptions } from "@twilio-paste/style-props";

import { CornerOrnamentPosition, CornerOrnamentType } from "./types";

const BadgeBottomEndPath = "M1.05-.05h-1.1v1.1h.593A.375.375 0 0 1 .875.5h.1c.026 0 .05.003.075.007V-.05Z";
const BadgeTopEndPath = "M.543-.05A.375.375 0 0 0 .875.5h.1c.026 0 .05-.003.075-.008v.558h-1.1v-1.1h.593Z";
const IconOrAvatarTopEndPath = "M1.05.437A.35.35 0 0 1 .563-.05H-.05v1.1h1.1V.437Z";
const IconOrAvatarBottomEndPath = "M1.05-.05h-1.1v1.1h.613A.35.35 0 0 1 1.05.563V-.05Z";

export const ClipPathMappings: Record<CornerOrnamentType, Record<CornerOrnamentPosition, string>> = {
  badge: {
    bottom_end: BadgeBottomEndPath,
    top_end: BadgeTopEndPath,
  },

  icon: {
    bottom_end: IconOrAvatarBottomEndPath,
    top_end: IconOrAvatarTopEndPath,
  },
  avatar: {
    bottom_end: IconOrAvatarBottomEndPath,
    top_end: IconOrAvatarTopEndPath,
  },
};

export const OrnamentPositionStyleMappings: Record<
  CornerOrnamentType,
  Record<CornerOrnamentPosition, Partial<Record<IconSizeOptions, BoxStyleProps>>>
> = {
  badge: {
    bottom_end: {
      sizeIcon80: { left: "28px", top: "28px" },
    },
    top_end: {
      sizeIcon80: { left: "28px", top: "spaceNegative30" },
    },
  },
  avatar: {
    bottom_end: {
      sizeIcon70: { left: "space60", top: "space60" },
      sizeIcon80: { left: "space70", top: "space70" },
    },
    top_end: {
      sizeIcon70: { left: "space60", top: "spaceNegative20" },
      sizeIcon80: { left: "space70", top: "spaceNegative20" },
    },
  },
  icon: {
    bottom_end: {
      sizeIcon30: { left: "13px", top: "13px" },
      sizeIcon40: { left: "17px", top: "17px" },
      sizeIcon50: { left: "18px", top: "18px" },
      sizeIcon70: { left: "21px", top: "21px" },
      sizeIcon80: { left: "26px", top: "26px" },
    },
    top_end: {
      sizeIcon30: { left: "13px", top: "-5px" },
      sizeIcon40: { left: "17px", top: "-5px" },
      sizeIcon50: { left: "18px", top: "-6px" },
      sizeIcon70: { left: "21px", top: "-9px" },
      sizeIcon80: { left: "26px", top: "-10px" },
    },
  },
};
