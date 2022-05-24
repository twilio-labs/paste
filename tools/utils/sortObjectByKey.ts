export function sortObjectByKey(unorderedObject: Record<string, any>) {
  const orderedObject: Record<string, any> = {};

  Object.keys(unorderedObject)
    .sort()
    .forEach((key) => {
      orderedObject[key] = unorderedObject[key];
    });

  return orderedObject;
}
