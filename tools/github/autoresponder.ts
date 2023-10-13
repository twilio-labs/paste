/* eslint-disable no-console,import/no-unresolved,import/extensions */
// @ts-expect-error deno
import { Octokit } from "https://esm.sh/octokit?dts";
// @ts-expect-error deno
const API_SECRET = Deno.env.get("API_SECRET");
// @ts-expect-error deno
const GH_SERVICE_ACC_DISCUSSIONS_TOKEN = Deno.env.get("GH_SERVICE_ACC_DISCUSSIONS_TOKEN");
// @ts-expect-error deno
const DISCUSSION_NODE_ID = Deno.env.get("DISCUSSION_NODE_ID");
// @ts-expect-error deno
const DISCUSSION_BODY = Deno.env.get("DISCUSSION_BODY");

console.log("discussion body:", DISCUSSION_BODY);
console.log("discussion node_id:", DISCUSSION_NODE_ID);

const octokit = new Octokit({ auth: GH_SERVICE_ACC_DISCUSSIONS_TOKEN });

type Discussion = {
  path: string;
  content: string;
  similarity: number;
  source: string;
  type: string;
  meta: Record<string, unknown>;
  heading: string;
  slug: string;
};

const getSimilarDiscussions = async (secret: string, question: string): Promise<string> => {
  try {
    const response = await fetch("https://paste.twilio.design/api/discussions-search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,
        prompt: question,
      }),
    });
    const responseJson = JSON.parse(await response.text());

    return (
      // Get the top 3 results at most
      responseJson.data
        .slice(0, 3)
        // We only want results that are fairly similar, not guesses
        .filter((item: Discussion) => item.similarity > 0.78)
        // Convert to markdown
        .map(
          (item: Discussion) =>
            `- [${item.heading}](${item.path}) (updated: ${
              item.meta.updatedAt
            }, similarity score: ${item.similarity.toFixed(2)})`,
        )
        // Convert to string
        .join("\n")
    );
  } catch (error) {
    console.log("Error fetching similar discussions", error);
  }
  return "No similar discussions found.";
};

const getAnswerFromAi = async (secret: string, question: string): Promise<string> => {
  try {
    const response = await fetch("https://paste.twilio.design/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,
        prompt: question,
      }),
    });

    return response.text();
  } catch (error) {
    console.log("Error fetching answer from AI", error);
    throw error;
  }
};

const writeAnswerToDiscussion = async (discussionId: string, body: string): Promise<string> => {
  const mutation = `
    mutation comment($discussionId:ID!,$body:String!){
      addDiscussionComment(input: { discussionId:$discussionId,body:$body}) {
        comment {
          id
        }
      }
    }
  `;
  // console.log("\n\nThe graphQL query:", mutation);

  try {
    const { addDiscussionComment } = await octokit.graphql(mutation, {
      discussionId,
      body,
    });
    return addDiscussionComment.comment.id;
  } catch (error) {
    console.log("Error writing answer to discussion", error);
    throw error;
  }
};

const commentHeader = `
  **Disclaimer:** This is a very experimental bot using OpenAI's GPT-4. The answers may not be correct, a human will review the answer and update it if necessary.

  ---

`;
// @ts-expect-error deno
const similarDiscussions = await getSimilarDiscussions(API_SECRET, DISCUSSION_BODY);
console.log("similar discussions:", similarDiscussions);

// @ts-expect-error deno
const answerFromAi = await getAnswerFromAi(API_SECRET, DISCUSSION_BODY);
console.log("response from AI:", answerFromAi.trim().slice(0, 300));

const fullBody = `${commentHeader}${answerFromAi}\n\n---\n\nHere are some similar discussions:\n\n${similarDiscussions}`;

// @ts-expect-error deno
const commentId = await writeAnswerToDiscussion(DISCUSSION_NODE_ID, fullBody);
console.log(`Comment added with ID: ${commentId}`);

// @ts-expect-error deno
Deno.exit(0);
/* eslint-enable no-console,import/no-unresolved,import/extensions */
