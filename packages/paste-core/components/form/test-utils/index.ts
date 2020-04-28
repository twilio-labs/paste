export interface AttributesMap {
  class?: string;
  'data-testid'?: string;
  id?: string;
  'aria-invalid'?: string;
  disabled?: boolean;
  label?: string;
  'data-attr'?: string;
  selected?: string;
  title?: string;
  spellcheck?: string;
  hidden?: boolean;
  draggable?: boolean;
  accesskey?: boolean;
  autocomplete?: boolean;
  form?: string;
}

export const createAttributeMap = (element: HTMLElement): AttributesMap => {
  const attributesMap = {};
  const attributesNodeList: NamedNodeMap = element.attributes;
  // eslint-disable-next-line unicorn/no-for-loop
  for (let i = 0; i < attributesNodeList.length; i++) {
    const {name, value} = attributesNodeList[i];
    attributesMap[name] = value;
  }

  return attributesMap;
};
