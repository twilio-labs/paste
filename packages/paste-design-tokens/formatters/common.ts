import camelCase from "lodash/camelCase";
import type { ImmutableStyleMap } from "theo";

import type { DesignToken } from "../types";
import { formatGroupTokensWithTemplate } from "../utils/formatGroupTokensWithTemplate";
import { formatSingleTokensWithTemplate } from "../utils/formatSingleTokensWithTemplate";
import { getTokenCategories } from "../utils/getTokenCategories";

export const tokenTemplate = ({ name, value }: { name: string; value: string }): string =>
  `const ${camelCase(name)} = "${value.replace(/"/g, '\\"')}";`;

export const tokenExportTemplate = ({ name }: { name: string; value: string }): string => `${camelCase(name)},`;
export const categoryTemplate = (categoryName: string, props: DesignToken[]): string => `${camelCase(categoryName)}: {
${props.map((prop) => `${camelCase(prop.name)},`).join("\n")}
},`;

export const commonTokenFormat = (result: ImmutableStyleMap): string => {
  const singleTokens = formatSingleTokensWithTemplate(result, tokenTemplate);
  const singleTokensExport = formatSingleTokensWithTemplate(result, tokenExportTemplate);

  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return `${singleTokens}

  module.exports = {
    ${singleTokensExport}
    ${groupedTokens}
  }
`;
};
