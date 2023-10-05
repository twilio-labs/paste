/* eslint-disable no-console,import/no-unresolved,import/extensions */
// @ts-expect-error deno
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Load .env file
const env = config();
const { API_SECRET, GH_SERVICE_ACC_DISCUSSIONS_TOKEN } = env;

// @ts-expect-error deno
const discussionBody = Deno.args[0];
// @ts-expect-error deno
const discussionNodeId = Deno.args[1];

console.log("discussion body:", discussionBody);
console.log("discussion node_id:", discussionNodeId);


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
type DiscussionsResponse = {
  data: Discussion[];
};
interface SimilarDiscussion {
  title: string;
  url: string;
  similarity: number;
  updatedAt: string;
}

const getSimilarDiscussions = async (secret: string, question: string): Promise<SimilarDiscussion[]> => {
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
  const responseJson = await response.json();

  return (
    // Get the top 3 results at most
    responseJson.data
      .slice(0, 3)
      // Remove unnecessary data from the response
      .map((item: Discussion) => ({
        title: item.heading,
        url: item.path,
        similarity: item.similarity,
        updatedAt: item.meta.updatedAt,
      }))
      // We only want results that are fairly similar, not guesses
      .filter((item: SimilarDiscussion) => item.similarity > 0.78)
      // Convert to markdown
      .map((item: SimilarDiscussion) => `[${item.title}](${item.url}) (updated: ${item.updatedAt}, similarity score: ${item.similarity.toFixed(2)})`)
      // Convert to string
      .join("\n - ")
  );
};

const getAnswerFromAi = async (secret: string, question: string): Promise<string> => {
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
};

// @ts-expect-error deno
const similarDiscussions = await getSimilarDiscussions(API_SECRET, discussionBody);

console.log("Similar discussions:", similarDiscussions);

// @ts-expect-error deno
const answerFromAi = await getAnswerFromAi(API_SECRET, discussionBody);

console.log("AI answer:", answerFromAi);


const writeAnswerToDiscussion = async (discussionId: string, body: string): Promise<any> => {

  const mutation = `
    mutation {
      addDiscussionComment(input: { discussionId:${discussionId},body:${body}}) {
        comment {
          id
        }
      }
    }
  `;

  const response = await fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GH_SERVICE_ACC_DISCUSSIONS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: mutation }),
  });

  return response.json();
};


const commentHeader = `
  This is a very experimental bot that uses OpenAI's GPT-4 to respond to discussions. The answers are not guaranteed to be correct.

  We hope it provides a quicker way to get or find answers to your questions. Please wait for a member of the Design System team to confirm the answer.

  ---

`;
const fullBody = `${commentHeader}${answerFromAi}\n\n---\n\n${similarDiscussions}`;

// Call the fetchGraphQL function and log the response
writeAnswerToDiscussion(discussionNodeId, fullBody)
  .then((result) => console.log("Write to discussion:", result))
  .catch((error) => console.log(error));

/* eslint-enable no-console,import/no-unresolved,import/extensions */
