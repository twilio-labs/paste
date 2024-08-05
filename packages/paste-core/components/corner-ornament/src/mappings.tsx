import { BoxStyleProps } from "@twilio-paste/box";
import { IconSizeOptions } from "@twilio-paste/style-props";

import { CornerOrnamentPosition, CornerOrnamentType } from "./types";

const BadgeBottomEndPath = "M1.05-.05h-1.1v1.1h.593A.375.375 0 0 1 .875.5h.1c.026 0 .05.003.075.007V-.05Z";
const BadgeTopEndPath = "M.543-.05A.375.375 0 0 0 .875.5h.1c.026 0 .05-.003.075-.008v.558h-1.1v-1.1h.593Z";
const IconOrAvatarTopEndPath = "M1.05.437A.35.35 0 0 1 .563-.05H-.05v1.1h1.1V.437Z";
const IconOrAvatarBottomEndPath = "M1.05-.05h-1.1v1.1h.613A.35.35 0 0 1 1.05.563V-.05Z";

const iconAvatarSharedPaths: Record<CornerOrnamentPosition, string> = {
  bottom_end: IconOrAvatarBottomEndPath,
  top_end: IconOrAvatarTopEndPath,
};

export const ClipPathMappings: Record<CornerOrnamentType, Record<CornerOrnamentPosition, string>> = {
  badge: {
    bottom_end: BadgeBottomEndPath,
    top_end: BadgeTopEndPath,
  },
  icon: iconAvatarSharedPaths,
  avatar: iconAvatarSharedPaths,
};

export const OrnamentPositionStyleMappings: Record<
  CornerOrnamentType,
  Record<CornerOrnamentPosition, Partial<Record<IconSizeOptions, BoxStyleProps>>>
> = {
  badge: {
    bottom_end: {
      sizeIcon50: { left: "16px", top: "16px" },
      sizeIcon60: { left: "16px", top: "16px" },
      sizeIcon70: { left: "19px", top: "19px" },
      sizeIcon80: { left: "25px", top: "25px" },
      sizeIcon90: { left: "25px", top: "25px" },
      sizeIcon100: { left: "34px", top: "34px" },
      sizeIcon110: { left: "42px", top: "42px" },
    },
    top_end: {
      sizeIcon50: { left: "16px", bottom: "16px", top: "-8px" },
      sizeIcon60: { left: "16px", bottom: "16px", top: "-8px" },
      sizeIcon70: { left: "19px", bottom: "19px", top: "-7px" },
      sizeIcon80: { left: "25px", bottom: "25px", top: "-5px" },
      sizeIcon90: { left: "25px", bottom: "25px", top: "-5px" },
      sizeIcon100: { left: "34px", bottom: "34px", top: "-6px" },
      sizeIcon110: { left: "42px", bottom: "42px", top: "-2px" },
    },
  },
  avatar: {
    bottom_end: {
      sizeIcon20: { left: "10px", top: "10px" },
      sizeIcon30: { left: "10px", top: "10px" },
      sizeIcon40: { left: "13px", top: "13px" },
      sizeIcon50: { left: "16px", top: "16px" },
      sizeIcon60: { left: "16px", top: "16px" },
      sizeIcon70: { left: "19px", top: "19px" },
      sizeIcon80: { left: "24px", top: "24px" },
      sizeIcon90: { left: "24px", top: "24px" },
      sizeIcon100: { left: "30px", top: "30px" },
      sizeIcon110: { left: "38px", top: "38px" },
    },
    top_end: {
      sizeIcon20: { left: "10px", bottom: "10px", top: "-3px" },
      sizeIcon30: { left: "10px", bottom: "10px", top: "-3px" },
      sizeIcon40: { left: "13px", bottom: "13px", top: "-5px" },
      sizeIcon50: { left: "16px", bottom: "16px", top: "-4px" },
      sizeIcon60: { left: "16px", bottom: "16px", top: "-4px" },
      sizeIcon70: { left: "19px", bottom: "19px", top: "-3px" },
      sizeIcon80: { left: "24px", bottom: "24px", top: "-4px" },
      sizeIcon90: { left: "24px", bottom: "24px", top: "-4px" },
      sizeIcon100: { left: "30px", bottom: "30px", top: "-6px" },
      sizeIcon110: { left: "38px", bottom: "38px", top: "-6px" },
    },
  },
  icon: {
    bottom_end: {
      sizeIcon20: { left: "11px", top: "11px" },
      sizeIcon30: { left: "11px", top: "11px" },
      sizeIcon40: { left: "13px", top: "13px" },
      sizeIcon50: { left: "16px", top: "16px" },
      sizeIcon60: { left: "16px", top: "16px" },
      sizeIcon70: { left: "17px", top: "17px" },
      sizeIcon80: { left: "22px", top: "22px" },
      sizeIcon90: { left: "22px", top: "22px" },
      sizeIcon100: { left: "30px", top: "30px" },
      sizeIcon110: { left: "38px", top: "38px" },
    },
    top_end: {
      sizeIcon20: { left: "11px", bottom: "11px", top: "-3px" },
      sizeIcon30: { left: "11px", bottom: "11px", top: "-3px" },
      sizeIcon40: { left: "13px", bottom: "13px", top: "-5px" },
      sizeIcon50: { left: "16px", bottom: "16px", top: "-4px" },
      sizeIcon60: { left: "16px", bottom: "16px", top: "-4px" },
      sizeIcon70: { left: "17px", bottom: "17px", top: "-5px" },
      sizeIcon80: { left: "22px", bottom: "22px", top: "-6px" },
      sizeIcon90: { left: "22px", bottom: "22px", top: "-6px" },
      sizeIcon100: { left: "30px", bottom: "30px", top: "-6px" },
      sizeIcon110: { left: "38px", bottom: "38px", top: "-6px" },
    },
  },
};
