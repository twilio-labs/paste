const {getBuildFileName} = require('../utils');

const buildListTemplate = (iconList) => {
  const output = JSON.stringify(iconList.map(getBuildFileName));
  return `module.exports = ${output};`;
};

module.exports = {
  buildListTemplate,
};
