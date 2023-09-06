export interface ComponentNode {
  name: string;
  packageName?: string;
  version?: string;
  packageStatus?: string;
}

export const alphabetizeComponents = (a: ComponentNode, b: ComponentNode): number => {
  if (a.name < b.name) return -1;
  return a.name > b.name ? 1 : 0;
};
