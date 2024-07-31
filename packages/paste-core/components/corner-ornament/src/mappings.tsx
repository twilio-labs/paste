import { BoxStyleProps } from "@twilio-paste/box";
import { IconSizeOptions } from "@twilio-paste/style-props";

import { CornerOrnamentPosition, CornerOrnamentType } from "./types";

const BadgeBottomEndPath = "M1.015.6A.527.527 0 0 0 .5-.025a.525.525 0 1 0 .102 1.04A.367.367 0 0 1 .975.6h.04Z";
const BadgeTopEndPath = "M.975.4H.958a.367.367 0 0 1-.356-.415A.528.528 0 0 0-.025.5a.525.525 0 1 0 1.04-.1h-.04Z";
const DotBottomEndPath = "M1.021.623a.537.537 0 1 0-.398.398.286.286 0 0 1 .398-.398Z";
const DotTopEndPath = "M1.021.377a.286.286 0 0 1-.398-.398A.537.537 0 0 0-.036.5.536.536 0 1 0 1.021.377Z";
const IconTopEndPath =
  "M.606-.014A.527.527 0 0 0-.025.5a.525.525 0 1 0 1.04-.106A.352.352 0 0 1 .6.05C.6.028.602.007.606-.014Z";
const IconBottomEndPath =
  "M1.014.606A.527.527 0 0 0 .5-.025a.525.525 0 1 0 .106 1.04A.352.352 0 0 1 .95.6c.022 0 .043.002.064.006Z";
const AvatarBottomEndPath = "M1.023.546a.525.525 0 1 0-.477.477.35.35 0 0 1 .477-.477Z";
const AvatarTopEndPath = "M1.023.454a.35.35 0 0 1-.477-.477.525.525 0 1 0 .477.477Z";

export const ClipPathMappings: Record<CornerOrnamentType, Record<CornerOrnamentPosition, string>> = {
  badge: {
    bottom_end: BadgeBottomEndPath,
    top_end: BadgeTopEndPath,
  },
  dot: {
    bottom_end: DotBottomEndPath,
    top_end: DotTopEndPath,
  },
  icon: {
    bottom_end: IconBottomEndPath,
    top_end: IconTopEndPath,
  },
  avatar: {
    bottom_end: AvatarBottomEndPath,
    top_end: AvatarTopEndPath,
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
  dot: {
    bottom_end: {
      sizeIcon30: { left: "13px", top: "13px" },
      sizeIcon40: { left: "space50", top: "space50" },
      sizeIcon50: { left: "space60", top: "space60" },
    },
    top_end: {
      sizeIcon30: { left: "13px", top: "-1px" },
      sizeIcon40: { left: "space50", top: "-1px" },
      sizeIcon50: { left: "space60", top: "space0" },
    },
  },
};
