import { GitHubDiscussionSource, fetchDiscussions } from "./github-discussions";
import { MarkdownSource } from "./markdown";
import { walk } from "./util";

const ignoredFiles = new Set(["pages/404.mdx"]);

export type SearchSource = MarkdownSource | GitHubDiscussionSource;

/**
 * Fetches all the sources we want to index for search
 */
export async function fetchSources(): Promise<SearchSource[]> {
  const docsSources = await walk("src/pages");
  const filteredDocsSources = docsSources
    .filter(({ path }) => /\.mdx?$/.test(path))
    .filter(({ path }) => !ignoredFiles.has(path))
    .map((entry) => new MarkdownSource("docs", entry.path));

  const githubDiscussionSources = await fetchDiscussions("twilio-labs", "paste");
  const filteredGithubDiscussionSources = githubDiscussionSources.map(
    (discussion) => new GitHubDiscussionSource("twilio-labs/paste", discussion),
  );

  const sources: SearchSource[] = [...filteredDocsSources, ...filteredGithubDiscussionSources];

  return sources;
}
