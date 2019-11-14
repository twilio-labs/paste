const {getRollupFileName} = require('../utils');

const rollupListTemplate = iconList => {
  const output = JSON.stringify(iconList.map(getRollupFileName));
  return `export const rollupIconList = ${output};`;
};

module.exports = {
  rollupListTemplate,
};
