#!/usr/bin/env node

/**
 * Modified from https://github.com/chakra-ui/chakra-ui/blob/main/scripts/generate-type-docs.ts
 * Ultimately we should explore https://api-extractor.com/ as TsDcoc is maintained by the RushStack folks, So I'd rather use
 * an official API documentor later, but it looks pretty complex.
 */

import path from 'path';
import {readFile} from 'fs/promises';
import {writeFileSync} from 'fs';

import prettier from 'prettier';
import ts from 'typescript';

import {
  type ComponentTypeProperties,
  formatValue,
  getSourceFileName,
  log,
  shouldIgnoreProperty,
  sortByRequiredProperties,
  tryPrettier,
  extractTypeExports,
} from './utils';

function extractPropertiesOfTypeName(
  searchTerm: string | RegExp,
  sourceFile: ts.SourceFile,
  typeChecker: ts.TypeChecker
): null | Record<string, ComponentTypeProperties> {
  const regexSearchTerm = typeof searchTerm === 'string' ? `^${searchTerm}$` : searchTerm;
  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      (ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement)) &&
      new RegExp(regexSearchTerm).test(statement.name.getText())
  );

  const results: Record<string, ComponentTypeProperties> = {};

  for (const typeStatement of typeStatements) {
    const properties: ComponentTypeProperties = {};
    const type = typeChecker.getTypeAtLocation(typeStatement);

    for (const property of type.getProperties()) {
      const sourceFileName = getSourceFileName(property);

      if (shouldIgnoreProperty(property)) {
        continue;
      }

      const propertyName = property.getName();
      const propertyType = typeChecker.getTypeOfSymbolAtLocation(property, sourceFile);

      // There are things in tags that we can think about serfacing later like @example or @deprecated via tsDoc comments
      const docTags = property.getJsDocTags();

      const defaultValue =
        docTags
          .find((tag) => tag.name === 'default')
          ?.text?.map((doc) => doc.text)
          ?.join('\n') || undefined;

      const nonNullableType = propertyType.getNonNullableType();

      const typeName = typeChecker.typeToString(nonNullableType);
      const required = nonNullableType === propertyType && typeName !== 'any';
      const externalProp = sourceFileName ? sourceFileName.includes('node_modules') : false;

      const prettyType = tryPrettier(typeName);

      properties[propertyName] = {
        type: prettyType,
        defaultValue: formatValue(defaultValue),
        required,
        externalProp,
        description:
          property
            .getDocumentationComment(typeChecker)
            .map((comment) => comment.text)
            .join('\n') || undefined,
      };
    }

    let typeName = (typeStatement as any).name.getText() as string;

    if (typeName.endsWith('Props')) {
      typeName = typeName.replace(/Props$/, '');
      results[typeName] = sortByRequiredProperties(properties);
    } else {
      log('Omitting type', `\`${typeName}\``);
    }
  }

  return Object.keys(results).length > 0 ? results : null;
}

function createTypeSearch(
  tsConfigPath: string
): (searchTerm: Parameters<typeof extractPropertiesOfTypeName>[0]) => Record<string, ComponentTypeProperties> {
  const configFile = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
  const basePath = path.dirname(tsConfigPath);
  const {fileNames, options} = ts.parseJsonConfigFileContent(configFile.config, ts.sys, basePath);

  const program = ts.createProgram(fileNames, options);
  const sourceFiles = program.getSourceFiles();

  return (searchTerm: Parameters<typeof extractPropertiesOfTypeName>[0]) => {
    const results: Record<string, ComponentTypeProperties> = {};
    for (const sourceFile of sourceFiles) {
      const typeInfo = extractPropertiesOfTypeName(searchTerm, sourceFile, program.getTypeChecker());
      Object.assign(results, typeInfo);
    }
    return results;
  };
}

const main = async (): Promise<void> => {
  const fileContent = await readFile(path.join('src', 'index.tsx'), 'utf8');
  const searchType = createTypeSearch('tsconfig.json');

  const typeExports = extractTypeExports(fileContent)
    ?.map(searchType)
    .filter((value) => Object.keys(value).length > 0)
    .reduce((acc, value) => ({...acc, ...value}), {});

  const typeExportsWithThemeProps: Record<string, unknown> = {};

  for (const [name, values] of Object.entries(typeExports)) {
    typeExportsWithThemeProps[name] = sortByRequiredProperties({
      ...values,
    });
  }

  const isEmpty = Object.keys(typeExportsWithThemeProps).length === 0;

  if (!isEmpty) {
    writeFileSync(
      'type-docs.json',
      prettier.format(JSON.stringify(typeExportsWithThemeProps), {
        parser: 'json',
      })
    );
  }
};

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error.message);
  process.exit(1);
});
