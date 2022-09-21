interface Window {
  Cypress: Record<string, string>;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
