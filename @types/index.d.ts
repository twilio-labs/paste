declare module '*.md' {
  const value: string;
  export default value;
}
declare module '*.png';
declare module "*.svg" {
  const content: any;
  export default content;
}

export {};

declare global {
  namespace jest {

    interface AsymmetricMatcher {
      $$typeof: Symbol;
      sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
      media?: string;
      modifier?: string;
      supports?: string;
    }

    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
  }
}
