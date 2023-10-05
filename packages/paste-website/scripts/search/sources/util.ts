import { basename, dirname, join } from "path";
import { readdir, stat } from "fs/promises";

export type WalkEntry = {
  path: string;
  parentPath?: string;
};

export async function walk(dir: string, parentPath?: string): Promise<WalkEntry[]> {
  const immediateFiles = await readdir(dir);

  const recursiveFiles = await Promise.all(
    immediateFiles.map(async (file) => {
      const path = join(dir, file);
      const stats = await stat(path);
      if (stats.isDirectory()) {
        // Keep track of document hierarchy (if this dir has corresponding doc file)
        const docPath = `${basename(path)}.mdx`;

        return walk(path, immediateFiles.includes(docPath) ? join(dirname(path), docPath) : parentPath);
      } else if (stats.isFile()) {
        return [
          {
            path,
            parentPath,
          },
        ];
      }
      return [];
    }),
  );

  const flattenedFiles = recursiveFiles.flat();

  return flattenedFiles.sort((a, b) => a.path.localeCompare(b.path));
}
