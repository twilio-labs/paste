/* eslint-disable unicorn/prefer-json-parse-buffer */
import fs from "fs";
import path from "path";

import { globby } from "globby-esm";
import groupBy from "lodash/groupBy";

import { roadmapTable } from "./airtable.mjs";
import {
  type GroupedComponentApi,
  getPathFromPackageName,
  getTocDataFromComponentApi,
  groupPropsByExternal,
} from "./componentApiUtils";

export type Package = {
  name: string;
  version: string;
  status: string;
  description: string;
};

export type PastePackages = {
  allPasteComponent: Package[];
  allPastePrimitive: Package[];
  allPasteLayout: Package[];
  allPasteLibraries: Package[];
  allPasteThemePackage: Package[];
  allPasteDesignTokensPackage: Package[];
  allPastePattern: {
    Feature: string;
    status: string;
  }[];
  allPastePageTemplate: {
    Feature: string;
    status: string;
  }[];
  allPasteExperience: {
    Feature: string;
    status: string;
  };
};

export type Feature = {
  Feature: string;
  status: string;
  Figma?: string;
  "Design committee review"?: string;
  "Engineer committee review"?: string;
  Documentation?: boolean;
  "Component Category": string;
  Code?: string;
  "Product suitability"?: string[];
};

export type Release = {
  "Public Description (from System)": string[];
  "Release Description": string;
  "Release feature name": string;
  Release: string;
  Status: string;
};

export type ArticleData = {
  author: string;
  avatar: string;
  date: string;
  description: string;
  /**
   * Use this to manually create an article excerpt, when the article is an external linked source.
   *
   * @type {string}
   * @memberof ArticleData
   */
  excerpt?: string;
  /**
   * Set an external link when the article is an external linked source.s
   *
   * @type {string}
   * @memberof ArticleData
   */
  external_link?: string;
  machineDate: string;
  slug: string;
  status: "published" | "draft";
  title: string;
};

export const getAllComponents = async (categories: string[]): Promise<Feature[]> => {
  const data = fs.readFileSync(path.resolve(process.cwd(), "data/feature-data.json"), "utf8");
  return JSON.parse(data).filter((item: Feature) => categories.includes(item["Component Category"] || ""));
};

export const getNavigationData = async (): Promise<Feature[]> => {
  return getAllComponents(["component", "layout", "pattern", "primitive", "page template", "experience"]);
};

export const getFeature = async (feature: string): Promise<Feature> => {
  const data = fs.readFileSync(path.resolve(process.cwd(), "data/feature-data.json"), "utf8");

  return JSON.parse(data).find((item: Feature) => item.Feature === feature);
};

export const getAllFeatures = async (): Promise<Feature[]> => {
  const data = fs.readFileSync(path.resolve(process.cwd(), "data/feature-data.json"), "utf8");

  return JSON.parse(data);
};

export const getAllPackages = async (): Promise<PastePackages> => {
  const data = fs.readFileSync(path.resolve(process.cwd(), "data/package-data.json"), "utf8");

  return JSON.parse(data);
};

export const getRoadmap = async (): Promise<{ [release: string]: Release[] }> => {
  const roadmap = await roadmapTable
    .select({
      filterByFormula: "IS_AFTER({Release date}, TODAY())",
      sort: [{ field: "Release" }, { field: "Status" }, { field: "Release feature name" }],
      fields: ["Release feature name", "Release", "Release Description", "Public Description (from System)", "Status"],
    })
    .all();
  const items = roadmap.map(({ fields }) => fields) as Release[];
  const releases = groupBy<Release[]>(items, "Release") as { [release: string]: Release[] };

  Object.values(releases).forEach((val) =>
    val.sort((a, b) => a["Release feature name"].localeCompare(b["Release feature name"])),
  );

  return releases;
};

export const getComponentApi = (
  packageName: string,
): { componentApi: GroupedComponentApi; componentApiTocData: { value: string; depth: number }[] } => {
  const pathToPackage = getPathFromPackageName(packageName);
  const data = fs.readFileSync(path.resolve(pathToPackage, "type-docs.json"), "utf8");
  const JSONData = JSON.parse(data);
  return { componentApi: groupPropsByExternal(JSONData), componentApiTocData: getTocDataFromComponentApi(JSONData) };
};

export const getArticles = async (): Promise<ArticleData[]> => {
  const root = path.resolve(process.cwd(), "./src/pages/blog/");
  const posts = await globby(["*.mdx", "!index.mdx"], {
    cwd: root,
  });

  const mdxFiles = posts.map(async (file) => {
    const filename = file.replace(".mdx", "");

    // eslint-disable-next-line no-unsanitized/method
    const meta = await import(`src/pages/blog/${filename}.mdx`).then((mod) => mod.meta);
    const date = new Date(meta.date);
    const formattedDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()).toLocaleString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    );

    return {
      ...meta,
      date: formattedDate,
      machineDate: meta.date,
    };
  });
  const articles = await Promise.all(mdxFiles);
  return articles.reverse().filter((entry) => entry.status !== "draft");
};
/* eslint-enable unicorn/prefer-json-parse-buffer */
