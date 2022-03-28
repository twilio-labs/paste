const jsonTemplate = (iconList) => {
  return JSON.stringify(
    iconList.map((iconName) => ({
      name: iconName,
      svg: `/svg/${iconName}.svg`,
      cjs: `/cjs/${iconName}.js`,
      esm: `/esm/${iconName}.js`,
    }))
  );
};

module.exports = {
  jsonTemplate,
};
