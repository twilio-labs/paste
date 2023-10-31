#!/usr/bin/env node

/* eslint-disable no-console */
import { Octokit } from "@octokit/core";
import { type AddDiscussionCommentPayload } from "@octokit/graphql-schema";

const { API_SECRET } = process.env;
const { GH_SERVICE_ACC_DISCUSSIONS_TOKEN } = process.env;
const { DISCUSSION_NODE_ID } = process.env;
const { DISCUSSION_BODY } = process.env;

console.log("discussion body:", DISCUSSION_BODY);
console.log("discussion node_id:", DISCUSSION_NODE_ID);

if (!API_SECRET) {
  console.error("API_SECRET is required");
  process.exit(1);
}

if (!GH_SERVICE_ACC_DISCUSSIONS_TOKEN) {
  console.error("GH_SERVICE_ACC_DISCUSSIONS_TOKEN is required");
  process.exit(1);
}

if (!DISCUSSION_NODE_ID) {
  console.error("DISCUSSION_NODE_ID is required");
  process.exit(1);
}

if (!DISCUSSION_BODY) {
  console.error("DISCUSSION_BODY is required");
  process.exit(1);
}

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

export const getSimilarDiscussions = async (secret: string, question: string): Promise<string> => {
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

export const getAnswerFromAi = async (secret: string, question: string): Promise<string> => {
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

  try {
    const { addDiscussionComment } = await octokit.graphql<{ addDiscussionComment: AddDiscussionCommentPayload }>(
      mutation,
      {
        discussionId,
        body,
      },
    );
    return addDiscussionComment.comment?.id ?? "";
  } catch (error) {
    console.log("Error writing answer to discussion", error);
    throw error;
  }
};

export const checkAiAndDiscussionResponses = (
  answerFromAi: string,
  similarDiscussions: string,
): { hasAnswerFromAi: boolean; hasSimilarDiscussions: boolean } => {
  const hasAnswerFromAi = !answerFromAi.includes("Sorry, I don't know how to help with that.");
  const hasSimilarDiscussions = similarDiscussions.length > 0 && similarDiscussions !== "No similar discussions found.";

  return { hasAnswerFromAi, hasSimilarDiscussions };
};

export const createCommentBody = (
  answerFromAi: string,
  hasAnswerFromAi: boolean,
  similarDiscussions: string,
  hasSimilarDiscussions: string,
): string => {
  const commentSeparator = "\n\n---\n\n";
  const commentHeader = `**Disclaimer:** This is a very experimental bot using OpenAI's GPT-4. The answers may not be correct, a human will review the answer and update it if necessary.`;

  let fullBody = `${commentHeader}`;

  // answer and similar discussions
  if (hasAnswerFromAi && hasSimilarDiscussions) {
    const similarDiscussionPrefix =
      "\n\nI also did a search, and I managed to find these other Discussions that might be similar or related to your question. Give them a read to see if they answer your question. If they do, head back here and update this discussion and mark it as answered, pointing others to the related discussion:\n\n";

    fullBody = `${fullBody}${commentSeparator}${answerFromAi}${similarDiscussionPrefix}${similarDiscussions}`;
  }

  // No answer, but similar discussions.
  if (!hasAnswerFromAi && hasSimilarDiscussions) {
    const similarDiscussionPrefix =
      "\n\nI did do a search though, and I managed to find these other Discussions that might be similar or related to your question. Give them a read to see if they answer your question. If they do, head back here and update this discussion and mark it as answered, pointing others to the related discussion:\n\n";

    fullBody = `${fullBody}${commentSeparator}${answerFromAi}${similarDiscussionPrefix}${similarDiscussions}`;
  }
  return fullBody;
};

const similarDiscussions = await getSimilarDiscussions(API_SECRET, DISCUSSION_BODY);
console.log("similar discussions:", similarDiscussions);

const answerFromAi = await getAnswerFromAi(API_SECRET, DISCUSSION_BODY);
console.log("response from AI:", answerFromAi.trim().slice(0, 300));

const { hasAnswerFromAi, hasSimilarDiscussions } = checkAiAndDiscussionResponses(answerFromAi, similarDiscussions);

// if you don't have an answer from AI AND you don't have similar discussions, don't bother commenting
if (!hasSimilarDiscussions && !hasAnswerFromAi) {
  process.exit(0);
}

const fullBody = createCommentBody(answerFromAi, hasAnswerFromAi, similarDiscussions, hasSimilarDiscussions);

const commentId = await writeAnswerToDiscussion(DISCUSSION_NODE_ID, fullBody);
console.log(`Comment added with ID: ${commentId}`);

process.exit(0);
/* eslint-enable no-console */
