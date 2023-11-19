export function sortObjectByKey(unorderedObject: Record<string, string>): Record<string, string> {
  const orderedObject: Record<string, string> = {};

  // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
  Object.keys(unorderedObject)
    .sort()
    .forEach((key) => {
      orderedObject[key] = unorderedObject[key];
    });

  return orderedObject;
}
