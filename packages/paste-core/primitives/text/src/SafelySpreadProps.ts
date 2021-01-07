import {SHADOW_PROPS, SPACE_PROPS, TYPOGRAPHY_PROPS, OVERFLOW_PROPS} from '@twilio-paste/style-props';
import {PseudoPropStyles} from './PseudoPropStyles';

export const TEXT_PROPS_TO_BLOCK = [
  ...SHADOW_PROPS,
  ...SPACE_PROPS,
  ...TYPOGRAPHY_PROPS,
  ...OVERFLOW_PROPS,
  ...Object.keys(PseudoPropStyles),
  'display',
  'color',
  'verticalAlign',
  'className',
  'style',
];

export const safelySpreadTextProps = (props: {[key: string]: any}): {[key: string]: any} => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  const newList = Object.keys(props).reduce((newObj, key) => {
    if (!TEXT_PROPS_TO_BLOCK.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      newObj[key] = props[key];
    }
    return newObj;
  }, {});
  return newList;
};
