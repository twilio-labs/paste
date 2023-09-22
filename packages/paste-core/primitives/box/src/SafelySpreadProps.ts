import {
  BACKGROUND_PROPS,
  BORDER_PROPS,
  FLEXBOX_PROPS,
  GRID_PROPS,
  LAYOUT_PROPS,
  POSITION_PROPS,
  SHADOW_PROPS,
  SPACE_PROPS,
  TYPOGRAPHY_PROPS,
} from "@twilio-paste/style-props";

import { PseudoPropStyles } from "./PseudoPropStyles";

export const BOX_PROPS_TO_BLOCK = [
  ...LAYOUT_PROPS,
  ...SPACE_PROPS,
  ...BACKGROUND_PROPS,
  ...BORDER_PROPS,
  ...SHADOW_PROPS,
  ...POSITION_PROPS,
  ...FLEXBOX_PROPS,
  ...GRID_PROPS,
  ...TYPOGRAPHY_PROPS,
  ...Object.keys(PseudoPropStyles),
  "className",
  "style",
];

type Props = { [key: string]: any };

export const safelySpreadBoxProps = (props: Props): Props => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  return Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!BOX_PROPS_TO_BLOCK.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      newProps[key] = props[key];
    }
    return newProps;
  }, {});
};
