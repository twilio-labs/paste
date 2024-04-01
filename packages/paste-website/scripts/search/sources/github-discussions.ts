import { createHash } from "crypto";

import { Octokit } from "@octokit/core";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";

import { BaseSource } from "./base";

export const ExtendedOctokit = Octokit.plugin(paginateGraphql);
export type ExtendedOctokit = InstanceType<typeof ExtendedOctokit>;

export type Discussion = {
  id: string;
  updatedAt: string;
  url: string;
  title: string;
  body: string;
  databaseId: number;
  answer: {
    body: string;
  };
};

export type DiscussionsResponse = {
  repository: {
    discussions: {
      totalCount: number;
      nodes: Discussion[];
    };
  };
};

/**
 * Fetches GitHub discussions for a repository + category
 */
export async function fetchDiscussions(owner: string, repo: string): Promise<Discussion[]> {
  const octokit = new ExtendedOctokit({
    auth: process.env.GH_SERVICE_ACC_DISCUSSIONS_TOKEN,
  });

  const {
    repository: {
      discussions: { nodes: discussions },
    },
  } = await octokit.graphql.paginate<DiscussionsResponse>(
    `
      query troubleshootDiscussions($cursor: String, $owner: String!, $repo: String!) {
        repository(owner: $owner, name: $repo) {
          discussions(first: 100, after: $cursor) {
            totalCount
            nodes {
              id
              updatedAt
              url
              title
              body
              databaseId
              answer { body }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    `,
    {
      owner,
      repo,
    },
  );

  return discussions;
}

export class GitHubDiscussionSource extends BaseSource {
  type = "github-discussions" as const;

  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  constructor(
    source: string,
    public discussion: Discussion,
  ) {
    super(source, discussion.url);
  }

  async load(): Promise<{
    checksum: string;
    meta: {
      id: string;
      title: string;
      updatedAt: string;
    };
    sections: {
      heading: string;
      slug: string;
      content: string;
    }[];
  }> {
    const { id, title, updatedAt, body, databaseId, answer } = this.discussion;

    const checksum = createHash("sha256").update(updatedAt).digest("base64");

    const meta = { id, title, updatedAt };

    const hasAnswer = Boolean(answer?.body);

    /*
     * We treat the initial discussion post as a section, and the answer as a section
     */
    const sections = [
      {
        heading: title,
        slug: `discussion-${databaseId}`,
        // Format the discussion title + body as markdown for better embeddings + LLM response
        content: `# ${title}\n${body}`,
      },
      ...(hasAnswer
        ? [
            {
              heading: `${title} - Answer`,
              slug: `discussion-answer-${databaseId}`,
              // Format the discussion title - Answer + answer body as markdown for better embeddings + LLM response
              content: `# ${title} - Answer\n${answer.body}`,
            },
          ]
        : []),
    ];

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
