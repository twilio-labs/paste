import { BoxStyleProps } from "@twilio-paste/box";
import { IconSizeOptions } from "@twilio-paste/style-props";

import { CornerOrnamentPosition, CornerOrnamentType } from "./types";

const BadgeBottomEndPath =
  "M 1.023 0.499 C 1.032 0.147 0.844 -0.031 0.497 -0.029 S -0.02 0.185 -0.021 0.497 s 0.179 0.525 0.504 0.527 c 0.0121 0 0.024 -0.0004 0.045 0 A 0.3436 0.3436 0 0 1 0.5 0.8452 C 0.5 0.6546 0.6546 0.5 0.8452 0.5 H 1.024 Z";
const BadgeTopEndPath =
  "M0.875006 0.599588C0.869357 0.599866 0.863675 0.600006 0.857961 0.600006C0.660268 0.600006 0.500006 0.432113 0.500006 0.225006C0.500006 0.13226 0.532145 0.0473771 0.585393 -0.0180851C0.557604 -0.0226304 0.529081 -0.0249939 0.500006 -0.0249939C0.210057 -0.0249939 -0.0249939 0.210057 -0.0249939 0.500006C-0.0249939 0.789956 0.210057 1.02501 0.500006 1.02501C0.75576 1.02501 0.968801 0.842128 1.01549 0.600006H0.875006V0.599588Z";
const DotBottomEndPath =
  "M1.02143 0.623373C1.03077 0.583767 1.03571 0.542465 1.03571 0.500009C1.03571 0.204142 0.79586 -0.0357056 0.499993 -0.0357056C0.204127 -0.0357056 -0.0357208 0.204142 -0.0357208 0.500009C-0.0357208 0.795875 0.204127 1.03572 0.499993 1.03572C0.542449 1.03572 0.583752 1.03078 0.623358 1.02145C0.590636 0.974976 0.571422 0.918308 0.571422 0.857152C0.571422 0.699356 0.699341 0.571437 0.857136 0.571437C0.918293 0.571437 0.974961 0.590652 1.02143 0.623373Z";
const DotTopEndPath =
  "M1.00357 0.316824C0.960747 0.342434 0.91066 0.357152 0.857136 0.357152C0.699341 0.357152 0.571422 0.229233 0.571422 0.0714373C0.571422 0.0363582 0.577744 0.0027556 0.58931 -0.0282933C0.560264 -0.0331681 0.530425 -0.0357056 0.499993 -0.0357056C0.204127 -0.0357056 -0.0357208 0.204142 -0.0357208 0.500009C-0.0357208 0.795875 0.204127 1.03572 0.499993 1.03572C0.79586 1.03572 1.03571 0.795875 1.03571 0.500009C1.03571 0.435668 1.02436 0.373976 1.00357 0.316824Z";
const IconTopEndPath =
  "M1.01907 0.579234C0.981902 0.592677 0.94181 0.600006 0.900006 0.600006C0.706706 0.600006 0.550006 0.443306 0.550006 0.250006C0.550006 0.151396 0.590786 0.0623111 0.656402 -0.00130474C0.607003 -0.0166994 0.554473 -0.0249939 0.500006 -0.0249939C0.210057 -0.0249939 -0.0249939 0.210057 -0.0249939 0.500006C-0.0249939 0.789956 0.210057 1.02501 0.500006 1.02501C0.763025 1.02501 0.980869 0.831592 1.01907 0.579234Z";
const IconBottomEndPath =
  "M1.02022 0.571197C1.02338 0.547917 1.02501 0.524152 1.02501 0.500006C1.02501 0.210057 0.789956 -0.0249939 0.500006 -0.0249939C0.210057 -0.0249939 -0.0249939 0.210057 -0.0249939 0.500006C-0.0249939 0.789956 0.210057 1.02501 0.500006 1.02501C0.524152 1.02501 0.547917 1.02338 0.571197 1.02022C0.557488 0.982731 0.550006 0.942242 0.550006 0.900006C0.550006 0.706706 0.706706 0.550006 0.900006 0.550006C0.942242 0.550006 0.982731 0.557488 1.02022 0.571197Z";
const AvatarBottomEndPath =
  "M1.02304 0.545704C1.02434 0.530644 1.02501 0.515402 1.02501 0.500006C1.02501 0.210057 0.789956 -0.0249939 0.500006 -0.0249939C0.210057 -0.0249939 -0.0249939 0.210057 -0.0249939 0.500006C-0.0249939 0.789956 0.210057 1.02501 0.500006 1.02501C0.515402 1.02501 0.530644 1.02434 0.545704 1.02304C0.516621 0.97201 0.500006 0.912948 0.500006 0.850006C0.500006 0.656706 0.656706 0.500006 0.850006 0.500006C0.912948 0.500006 0.97201 0.516621 1.02304 0.545704Z";
const AvatarTopEndPath =
  "M1.025 0.503188C0.973518 0.532964 0.913752 0.550006 0.850006 0.550006C0.656706 0.550006 0.500006 0.393306 0.500006 0.200006C0.500006 0.116956 0.528932 0.0406626 0.577258 -0.0193501C0.552046 -0.0230681 0.526251 -0.0249939 0.500006 -0.0249939C0.210057 -0.0249939 -0.0249939 0.210057 -0.0249939 0.500006C-0.0249939 0.789956 0.210057 1.02501 0.500006 1.02501C0.788894 1.02501 1.02328 0.791673 1.025 0.503188Z";

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
      sizeIcon80: { left: "space70", top: "space70" },
    },
    top_end: {
      sizeIcon80: { left: "space70", top: "spaceNegative10" },
    },
  },
  avatar: {
    bottom_end: {
      sizeIcon70: { left: "space60", top: "space60" },
      sizeIcon80: { left: "space70", top: "space70" },
    },
    top_end: {
      sizeIcon70: { left: "space60", top: "spaceNegative10" },
      sizeIcon80: { left: "space70", top: "spaceNegative10" },
    },
  },
  icon: {
    bottom_end: {
      sizeIcon30: { left: "space40", top: "space40" },
      sizeIcon40: { left: "space50", top: "space50" },
      sizeIcon50: { left: "18px", top: "18px" },
      sizeIcon70: { left: "space60", top: "space60" },
      sizeIcon80: { left: "space70", top: "space70" },
    },
    top_end: {
      sizeIcon30: { left: "13.7px", top: "spaceNegative10" },
      sizeIcon40: { left: "16px", top: "0px" },
      sizeIcon50: { left: "18px", top: "spaceNegative10" },
      sizeIcon70: { left: "space60", top: "spaceNegative10" },
      sizeIcon80: { left: "space70", top: "spaceNegative10" },
    },
  },
  dot: {
    bottom_end: {
      sizeIcon30: { left: "14px", top: "14px" },
      sizeIcon40: { left: "space50", top: "space50" },
      sizeIcon50: { left: "space60", top: "space60" },
    },
    top_end: {
      sizeIcon30: { left: "14px", top: "-3px" },
      sizeIcon40: { left: "space50", top: "spaceNegative10" },
      sizeIcon50: { left: "space60", top: "spaceNegative10" },
    },
  },
};
