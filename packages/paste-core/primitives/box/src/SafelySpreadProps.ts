import {
  LAYOUT_PROPS,
  SPACE_PROPS,
  BACKGROUND_PROPS,
  BORDER_PROPS,
  SHADOW_PROPS,
  POSITION_PROPS,
  FLEXBOX_PROPS,
} from '@twilio-paste/style-props';
import {PseudoPropStyles} from './PseudoPropStyles';

const pseudoStyles = Object.keys(PseudoPropStyles);
export const BOX_PROPS_TO_BLOCK = [
  ...LAYOUT_PROPS,
  ...SPACE_PROPS,
  ...BACKGROUND_PROPS,
  ...BORDER_PROPS,
  ...SHADOW_PROPS,
  ...POSITION_PROPS,
  ...FLEXBOX_PROPS,
  ...pseudoStyles,
  'backgroundColor',
  'borderColor',
  'className',
  'style',
];

export const safelySpreadBoxProps = (props: {}): {} => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  const newList = Object.keys(props).reduce((newObj, key) => {
    if (!BOX_PROPS_TO_BLOCK.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      newObj[key] = props[key];
    }
    return newObj;
  }, {});
  return newList;
};
