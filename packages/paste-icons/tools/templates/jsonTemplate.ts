import { DEPRECATED_ICONS } from '../constants';

type IconFiles = {
  name: string;
  svg: string;
  cjs: string;
  esm: string;
};

export const createIconsFilesObject = (icons: string[] | undefined): IconFiles[] | undefined =>
  icons?.map((iconName: string) => ({
    name: iconName,
    svg: `/svg/${iconName}.svg`,
    cjs: `/cjs/${iconName}.js`,
    esm: `/esm/${iconName}.js`,
  }));

export const jsonTemplate = (iconList: string[] | undefined): string => {
  const supportedIcons = iconList?.filter((fileName: string) => !DEPRECATED_ICONS.includes(fileName));
  const deprecatedIcons = iconList?.filter((fileName: string) => DEPRECATED_ICONS.includes(fileName));
  // Write the icons list to JSON
  return JSON.stringify({
    icons: createIconsFilesObject(supportedIcons),
    deprecatedIcons: createIconsFilesObject(deprecatedIcons),
  });
};
