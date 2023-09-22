import { SHADOW_PROPS, SPACE_PROPS, TYPOGRAPHY_PROPS, OVERFLOW_PROPS } from '@twilio-paste/style-props';

import { PseudoPropStyles } from './PseudoPropStyles';

export const TEXT_PROPS_TO_BLOCK = [
  ...SHADOW_PROPS,
  ...SPACE_PROPS,
  ...TYPOGRAPHY_PROPS,
  ...OVERFLOW_PROPS,
  ...Object.keys(PseudoPropStyles),
  'display',
  'verticalAlign',
  'className',
  'style',
];

type Props = { [key: string]: any };

export const safelySpreadTextProps = (props: Props): Props => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  return Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!TEXT_PROPS_TO_BLOCK.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      newProps[key] = props[key];
    }
    return newProps;
  }, {});
};
