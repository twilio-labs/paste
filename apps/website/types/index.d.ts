declare module '@mdx-js/react';
declare module 'gatsby-mdx';
declare module 'prism-react-renderer';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
