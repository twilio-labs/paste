function sortObjectByKey(unorderedObject) {
  const orderedObject = {};

  Object.keys(unorderedObject)
    .sort()
    .forEach(key => {
      orderedObject[key] = unorderedObject[key];
    });

  return orderedObject;
}

module.exports = {
  sortObjectByKey,
};
