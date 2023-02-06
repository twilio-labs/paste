interface Window {
  __Cypress__: boolean;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module '*.mdx' {
  export const meta: {
    title?: string
    description?: string
  }
}

declare module '@docsearch/react/modal';