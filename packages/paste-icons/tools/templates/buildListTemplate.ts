import { getBuildFileName } from "../utils";

export const buildListTemplate = (iconList: string[] | undefined): string => {
  const output = JSON.stringify(iconList?.map(getBuildFileName));
  return `module.exports = ${output};`;
};
