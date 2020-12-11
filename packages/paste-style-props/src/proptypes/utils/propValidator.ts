type PropFunctionSignature = (props: {[key: string]: any}, propName: string, componentName: string) => Error | null;

export const propValidator = (optionsList: string[]): PropFunctionSignature => {
  return (props: {[key: string]: any}, propName: string, componentName: string): Error | null => {
    const suppliedValue = props[propName];
    const propError = new Error(
      `[${componentName}]: invalid prop supplied "${propName}=${suppliedValue}", expected a token value. See https://paste.twilio.design/tokens for available options.`
    );

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const isInvalidToken = (value: string): boolean => !optionsList.includes(value);

    if (suppliedValue != null) {
      // If it's an array of tokens, loop through each and check if all values are tokens
      if (Array.isArray(suppliedValue)) {
        // eslint-disable-next-line unicorn/no-for-loop
        for (let i = 0; i < suppliedValue.length; i++) {
          if (isInvalidToken(suppliedValue[i])) {
            return propError;
          }
        }
      } else if (isInvalidToken(suppliedValue)) {
        return propError;
      }
    }
    return null;
  };
};
