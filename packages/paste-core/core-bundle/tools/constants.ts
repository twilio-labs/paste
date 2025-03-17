import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import type { PackageShape } from "./types";

/*
 * Adding the website package for redundancy only, because
 * it's a private package and won't be included anyways
 */
const BLOCKLIST = ["@twilio-paste/core", "@twilio-paste/icons", "@twilio-paste/website", "@twilio-paste/codemods"];

const BASE_CODESANDBOX_CI = {
  buildCommand: "build",
  node: "16",
  packages: ["/packages/paste-icons", "/packages/paste-core/core-bundle"],
  sandboxes: ["/templates/paste-nextjs-template", "/packages/paste-token-contrast-checker"],
};

const PACKAGES_ROOT_PATH = join(__dirname, "../../../..");
const CODESANDBOX_CI_JSON_PATH = join(__dirname, "../../../../.codesandbox/ci.json");
const CORE_BUNDLE_PATH = join(__dirname, "../");
const CORE_BUNDLE_INDEX_PATH = join(CORE_BUNDLE_PATH, "src/index.tsx");
const CORE_BUNDLE_PACKAGE_PATH = join(CORE_BUNDLE_PATH, "package.json");
const CORE_BUNDLE_OUTPUT_PATH = join(CORE_BUNDLE_PATH, "dist/");

const getPackageName = (pkg: PackageShape): string => pkg.name.replace("@twilio-paste/", "");
const getUnbarreledFilePath = (pkg: PackageShape): string => `src/${getPackageName(pkg)}.tsx`;
const getUnbarreledFileFullPath = (pkg: PackageShape): string => join(CORE_BUNDLE_PATH, getUnbarreledFilePath(pkg));

export {
  BLOCKLIST,
  BASE_CODESANDBOX_CI,
  PACKAGES_ROOT_PATH,
  CODESANDBOX_CI_JSON_PATH,
  CORE_BUNDLE_PATH,
  CORE_BUNDLE_INDEX_PATH,
  CORE_BUNDLE_PACKAGE_PATH,
  CORE_BUNDLE_OUTPUT_PATH,
  getPackageName,
  getUnbarreledFilePath,
  getUnbarreledFileFullPath,
};
