export const PROPS_TO_BLOCK: string[] = ["className", "style", "size", "height", "width"];

type Props = { [key: string]: any };

export const safelySpreadFormControlProps = (props: Props): Props => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  return Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!PROPS_TO_BLOCK.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      newProps[key] = props[key];
    }
    return newProps;
  }, {});
};
