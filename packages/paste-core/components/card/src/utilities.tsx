const marginProps = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
const paddingProps = ['padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
const spacingProps = [...marginProps, ...paddingProps];

const errorOnBadProps = (props: {[key: string]: any}, propWhitelist: string[]): void => {
  // Object.keys might be slow in the hot path
  const badProps = Object.keys(props).filter(
    prop => !propWhitelist.includes(prop) && !prop.startsWith('aria-') && !prop.startsWith('data-')
  );

  if (badProps.length > 0) {
    throw new Error(`${badProps.join(', ')} are invalid for the card component`);
  }
};

export {marginProps, paddingProps, spacingProps, errorOnBadProps};
