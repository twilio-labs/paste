export interface AttributesMap {
  class?: string;
  "data-testid"?: string;
  id?: string;
  "aria-invalid"?: string;
  disabled?: boolean;
  label?: string;
  "data-attr"?: string;
  selected?: string;
  title?: string;
  spellcheck?: string;
  hidden?: boolean;
  draggable?: boolean;
  accesskey?: boolean;
  autocomplete?: boolean;
  form?: string;
  width?: string;
  height?: string;
  size?: number;
  className?: string;
  style?: unknown;
  multiple?: boolean;
}

export const createAttributeMap = (element: HTMLElement): AttributesMap => {
  const attributesNodeList: NamedNodeMap = element.attributes;

  return Object.keys(attributesNodeList).reduce((attributesMap, key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore implicit any on key
    const { name, value } = attributesNodeList[key];
    return { ...attributesMap, [name]: value };
  }, {});
};
