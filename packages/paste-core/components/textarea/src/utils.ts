export const PROPS_TO_BLOCK: string[] = ['className', 'style', 'size', 'height', 'width'];

export const safelySpreadFormControlProps = (props: {}): {} => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  const newList = Object.keys(props).reduce((newObj, key) => {
    if (!PROPS_TO_BLOCK.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      newObj[key] = props[key];
    }
    return newObj;
  }, {});
  return newList;
};
