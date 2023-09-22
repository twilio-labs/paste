import prettier from "prettier";

export type ComponentTypeInfo = {
  type: string;
  defaultValue?: string | boolean | null;
  required: boolean;
  externalProp: boolean;
  description?: string;
};

export type ComponentTypeProperties = {
  [component: string]: ComponentTypeInfo;
};

export function log(...args: any[]): void {
  // eslint-disable-next-line no-console
  console.log("[props-docs]:", ...args);
}

export function tryPrettier(typeName: string): string {
  try {
    const prefix = "type ONLY_FOR_FORMAT =";
    const prettyType = prettier.format(prefix + typeName, {
      parser: "typescript",
      semi: false,
    });
    return prettyType.replace(prefix, "").trim();
  } catch {
    log("prettier failed", typeName);
    return typeName;
  }
}

export function formatValue(value: string | undefined): null | string | boolean {
  if (!value) return null;
  // convert "\"column\"", to "column"
  const x = value.replace(/^"(.*)"$/, "$1");
  if (x === "true") {
    return true;
  } else if (x === "false") {
    return false;
  }
  return x;
}

export function sortByRequiredProperties(properties: ComponentTypeProperties): { [key: string]: ComponentTypeInfo } {
  return Object.fromEntries(
    Object.entries(properties)
      .sort(([aName], [bName]) => aName.localeCompare(bName))
      .sort(([, a], [, b]) => {
        if (a.required === b.required) {
          return 0;
        } else if (a.required) {
          return -1;
        }
        return 1;
      }),
  );
}

export function getSourceFileName(symbol: ts.Symbol): string | undefined {
  const declarations = symbol.getDeclarations();
  if (!declarations || declarations.length === 0) {
    return undefined;
  }
  const sourceFile = declarations[0].getSourceFile();
  return sourceFile ? sourceFile.fileName : undefined;
}

export function shouldIgnoreProperty(property: ts.Symbol): boolean {
  const sourceFileName = getSourceFileName(property);
  const isExternal = /(styled-system)/.test(sourceFileName ?? "");
  const isExcludedByName = ["children"].includes(property.getName());
  return isExternal || isExcludedByName;
}

/**
 *  ASSUMPTION: All files use a type-only export (and it can't be inline)
 *
 *  @example
 *  export type { ButtonProps } from 'module'
 *
 *  NOT
 *
 *  export { type ButtonProps } from 'module'
 */
export function extractTypeExports(code: string): string[] {
  type ExportedType = {
    [typeName: string]: any;
  };

  const exported: ExportedType = {};

  /**
   * NOTE: This regex is pretty naive and will fail on more complex structures, it requires us to explicitly export named types from our index files.
   * This is not necessarily a bad thing, but requires a significant refactor of our packages to move away from any export * statements.
   * A work around might be to change this and the file lookup to all files in src and we modify the regex to match export type {}, export type and export interface
   * const exportedTypeRegex = /export (?:type|interface)\s+([^ ;]+)/g;
   * This will include a lot of internal components and contexts that we would then need to filter out for the consumer facing docs. I feel being explicit
   * how ever annoying the refactor is, is a safer and more repeatable approach.
   */
  const exportedTypeRegex = /export type\s*{([^}]+)}/g;
  let match = exportedTypeRegex.exec(code);

  while (match != null) {
    const types = match[1].split(",").map((s) => s.trim());
    types.forEach((type) => {
      const [typeName] = type.split(" ") ?? [];
      exported[typeName] = true;
    });
    match = exportedTypeRegex.exec(code);
  }

  const exportedTypes = Object.keys(exported).filter(Boolean);

  log({ exportedTypes });

  return exportedTypes;
}
