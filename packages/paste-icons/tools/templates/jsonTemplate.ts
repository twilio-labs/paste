export const jsonTemplate = (iconList: string[] | undefined): string => {
  return JSON.stringify(
    iconList?.map((iconName: string) => ({
      name: iconName,
      svg: `/svg/${iconName}.svg`,
      cjs: `/cjs/${iconName}.js`,
      esm: `/esm/${iconName}.js`,
    }))
  );
};
