import { runCmdJson } from "./runCmd";

const LERNA_INDEX_PATH = require.resolve("lerna");
const LERNA_CLI_PATH = LERNA_INDEX_PATH.replace("index.js", "cli.js");

export interface PackageShape {
  name: string;
  version: string;
  private: boolean;
  location: string;
}

let repoPackages: PackageShape[] | null = null;

/*
 * Returned Shape
 * [{
 *    name: '@twilio-paste/icons',
 *    version: '0.2.0',
 *    private: false,
 *    location: '/.../paste/packages/paste-icons'
 * }, ...]
 */
export async function getRepoPackages(): Promise<PackageShape[] | null> {
  // Return cached value if available
  if (repoPackages != null) {
    return repoPackages;
  }

  repoPackages = (await runCmdJson(LERNA_CLI_PATH, ["la", "--json"])) as unknown as PackageShape[];
  return repoPackages;
}
