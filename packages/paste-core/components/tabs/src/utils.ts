export const getElementName = (
  orientation: 'horizontal' | 'vertical',
  fallback: string,
  elementName?: string | undefined,
): string => (elementName != null ? elementName : `${orientation.toUpperCase()}_${fallback}`);
