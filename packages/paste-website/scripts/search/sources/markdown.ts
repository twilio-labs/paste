import { createHash } from "crypto";
import { readFile } from "fs/promises";

import GithubSlugger from "github-slugger";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxFromMarkdown } from "mdast-util-mdx";
import { toMarkdown } from "mdast-util-to-markdown";
import { toString } from "mdast-util-to-string";
import { mdxjs } from "micromark-extension-mdxjs";
import { u } from "unist-builder";
import { filter } from "unist-util-filter";

import { BaseSource, type Json, type Section } from "./base";

/**
 * Extracts ES literals from an `estree` `ObjectExpression`
 * into a plain JavaScript object.
 */
export function getObjectFromExpression(node: any): Record<string | number | symbol, unknown> {
  return node.properties.reduce((object, property) => {
    if (property.type !== "Property") {
      return object;
    }

    const key = (property.key.type === "Identifier" && property.key.name) || undefined;
    const value = (property.value.type === "Literal" && property.value.value) || undefined;

    if (!key) {
      return object;
    }

    return {
      ...object,
      [key]: value,
    };
  }, {});
}

/**
 * Extracts the `meta` ESM export from the MDX file.
 *
 * This info is akin to frontmatter.
 */
export function extractMetaExport(mdxTree: any): Record<string | number | symbol, unknown> | undefined {
  const metaExportNode = mdxTree.children.find((node) => {
    return (
      node.type === "mdxjsEsm" &&
      node.data?.estree?.body[0]?.type === "ExportNamedDeclaration" &&
      node.data.estree.body[0].declaration?.type === "VariableDeclaration" &&
      node.data.estree.body[0].declaration.declarations[0]?.id.type === "Identifier" &&
      node.data.estree.body[0].declaration.declarations[0].id.name === "meta"
    );
  });

  if (!metaExportNode) {
    return undefined;
  }

  const objectExpression =
    (metaExportNode.data?.estree?.body[0]?.type === "ExportNamedDeclaration" &&
      metaExportNode.data.estree.body[0].declaration?.type === "VariableDeclaration" &&
      metaExportNode.data.estree.body[0].declaration.declarations[0]?.id.type === "Identifier" &&
      metaExportNode.data.estree.body[0].declaration.declarations[0].id.name === "meta" &&
      metaExportNode.data.estree.body[0].declaration.declarations[0].init?.type === "ObjectExpression" &&
      metaExportNode.data.estree.body[0].declaration.declarations[0].init) ||
    undefined;

  if (!objectExpression) {
    return undefined;
  }

  return getObjectFromExpression(objectExpression);
}

/**
 * Splits a `mdast` tree into multiple trees based on
 * a predicate function. Will include the splitting node
 * at the beginning of each tree.
 *
 * Useful to split a markdown file into smaller sections.
 */
export function splitTreeBy(tree: any, predicate: (node: any) => boolean): [] {
  return tree.children.reduce((trees, node) => {
    const [lastTree] = trees.slice(-1);

    if (!lastTree || predicate(node)) {
      const newTree = u("root", [node]);
      return trees.concat(newTree);
    }

    lastTree.children.push(node);
    return trees;
  }, []);
}

/**
 * Parses a markdown heading which can optionally
 * contain a custom anchor in the format:
 *
 * ```markdown
 * ### My Heading [#my-custom-anchor]
 * ```
 */
export function parseHeading(mdHeading: string): { heading: string; customAnchor?: string } {
  const match = mdHeading.match(/(.*) *\[#(.*)]/);
  if (match) {
    const [, heading, customAnchor] = match;
    return { heading, customAnchor };
  }
  return { heading: mdHeading };
}

/**
 * Processes MDX content for search indexing.
 * It extracts metadata, strips it of all JSX,
 * and splits it into sub-sections based on criteria.
 */
export function processMdxForSearch(content: string): ProcessedMdx {
  const checksum = createHash("sha256").update(content).digest("base64");

  const unwrappedContent = content
    .replace(/<content>/g, "")
    .replace(/<\/content>/g, "")
    .replace(/<contentwrapper>/g, "")
    .replace(/<\/contentwrapper>/g, "");

  const mdxTree = fromMarkdown(unwrappedContent, "utf8", {
    // @ts-expect-error: mdast packages are all out of sync until we upgrade mdx so the types are junk
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown()],
  });

  const meta = extractMetaExport(mdxTree);

  const serializableMeta: Json = meta && JSON.parse(JSON.stringify(meta));

  // Remove all MDX elements from markdown
  const mdTree = filter(
    mdxTree,
    (node) =>
      !["mdxjsEsm", "mdxJsxFlowElement", "mdxJsxTextElement", "mdxFlowExpression", "mdxTextExpression"].includes(
        node.type,
      ),
  );

  if (!mdTree) {
    return {
      checksum,
      meta: serializableMeta,
      sections: [],
    };
  }

  const sectionTrees = splitTreeBy(mdTree, (node) => node.type === "heading");

  const slugger = new GithubSlugger();

  const sections = sectionTrees.map((tree) => {
    // @ts-expect-error: mdast packages are all out of sync until we upgrade mdx so the types are junk
    const [firstNode] = tree.children;
    const sectionContent = toMarkdown(tree);

    const rawHeading = firstNode.type === "heading" ? toString(firstNode) : undefined;

    if (!rawHeading) {
      return { content: sectionContent };
    }

    const { heading, customAnchor } = parseHeading(rawHeading);

    const slug = slugger.slug(customAnchor ?? heading);

    return {
      content: sectionContent,
      heading,
      slug,
    };
  });

  return {
    checksum,
    meta: serializableMeta,
    sections,
  };
}

export type ProcessedMdx = {
  checksum: string;
  meta: Json;
  sections: Section[];
};

export class MarkdownSource extends BaseSource {
  type = "markdown" as const;

  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  constructor(source: string, public filePath: string, public parentFilePath?: string) {
    const path = filePath.replace(/^pages/, "").replace(/\.mdx?$/, "");
    const parentPath = parentFilePath?.replace(/^pages/, "").replace(/\.mdx?$/, "");

    super(source, path, parentPath);
  }

  async load(): Promise<{
    checksum: string;
    meta: Json;
    sections: Section[];
  }> {
    const contents = await readFile(this.filePath, "utf8");

    const { checksum, meta, sections } = processMdxForSearch(contents);

    this.checksum = checksum;
    this.meta = meta;
    this.sections = sections;

    return {
      checksum,
      meta,
      sections,
    };
  }
}
