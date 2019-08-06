import * as lodash from 'lodash';
import {ImmutableStyleMap} from 'theo';
import {Token} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {formatSingleTokensWithTemplate} from '../utils/formatSingleTokensWithTemplate';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

export const tokenTemplate = ({name, value}: {name: string; value: string}): string =>
  `const ${lodash.camelCase(name)} = "${value.replace(/"/g, '\\"')}";`;

export const tokenExportTemplate = ({name}: {name: string; value: string}): string => `${lodash.camelCase(name)},`;
export const categoryTemplate = (categoryName: string, props: Token[]): string => `${lodash.camelCase(categoryName)}: {
${props.map(prop => `${lodash.camelCase(prop.name)},`).join('\n')}
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
