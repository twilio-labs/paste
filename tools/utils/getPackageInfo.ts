import { runCmdJson } from './runCmd';

const packagesInfo: Record<string, any> = {};

export async function getPackageInfo(packageName: string): Promise<Record<string, string>> {
  // Return cached value if available
  if (packagesInfo[packageName] != null) {
    return packagesInfo[packageName];
  }
  // Set to cache and return
  packagesInfo[packageName] = await runCmdJson('yarn', ['info', packageName, '--json']);
  return packagesInfo[packageName];
}
