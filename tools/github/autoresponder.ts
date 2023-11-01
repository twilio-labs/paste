#!/usr/bin/env node

/* eslint-disable no-console */
import { Octokit } from "@octokit/core";
import { type AddDiscussionCommentPayload } from "@octokit/graphql-schema";

import { checkAiAndDiscussionResponses, createCommentBody, getAnswerFromAi, getSimilarDiscussions } from "./utils";

const { OPENAI_API_SECRET } = process.env;
const { GH_SERVICE_ACC_DISCUSSIONS_TOKEN } = process.env;
const { DISCUSSION_NODE_ID } = process.env;
const { DISCUSSION_BODY } = process.env;

console.log("discussion body:", DISCUSSION_BODY);
console.log("discussion node_id:", DISCUSSION_NODE_ID);

const octokit = new Octokit({ auth: GH_SERVICE_ACC_DISCUSSIONS_TOKEN });

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

async function autoRespond(): Promise<void> {
  if (!OPENAI_API_SECRET) {
    console.error("OPENAI_API_SECRET is required");
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

  const similarDiscussions = await getSimilarDiscussions(OPENAI_API_SECRET, DISCUSSION_BODY);
  console.log("similar discussions:", similarDiscussions);

  const answerFromAi = await getAnswerFromAi(OPENAI_API_SECRET, DISCUSSION_BODY);
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
}

async function main(): Promise<void> {
  await autoRespond();
}

main().catch((error) => {
  console.error(error);

  // Exit with non-zero code
  process.exit(1);
});
/* eslint-enable no-console */
