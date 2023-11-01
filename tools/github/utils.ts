#!/usr/bin/env node

/* eslint-disable no-console */

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
    const responseJson = await response.json();

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const similarDiscussions = responseJson.data
      // We only want results that are fairly similar, not guesses
      .filter((item: Discussion) => item.similarity > 0.78);

    if (similarDiscussions.length === 0) {
      return "No similar discussions found.";
    }

    return (
      similarDiscussions
        // Get the top 3 results at most
        .slice(0, 3)
        // Convert to markdown
        .map(
          (item: Discussion) =>
            `- [${item.heading}](${item.path}) (updated: ${dateFormatter.format(
              new Date(item.meta.updatedAt as string),
            )}, similarity score: ${Math.round(item.similarity * 100)}%)`,
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

export const checkAiAndDiscussionResponses = (
  answerFromAi: string,
  similarDiscussions: string,
): { hasAnswerFromAi: boolean; hasSimilarDiscussions: boolean } => {
  const hasAnswerFromAi = !answerFromAi.includes("Sorry, I don't know how to help with that.");
  const hasSimilarDiscussions = similarDiscussions.length > 0 && similarDiscussions !== "No similar discussions found.";

  return { hasAnswerFromAi, hasSimilarDiscussions };
};

export const commentSeparator = "\n\n---\n\n";
export const commentHeader = `**Disclaimer:** This is a very experimental bot using OpenAI's GPT-4. The answers may not be correct, a human will review the answer and update it if necessary.`;
export const similarDiscussionPrefix =
  "\n\nI also did a search, and I managed to find these other Discussions that might be similar or related to your question. Give them a read to see if they answer your question. If they do, head back here and update this discussion and mark it as answered, pointing others to the related discussion:\n\n";
export const similarDiscussionPrefixNoAi =
  "\n\nI did do a search though, and I managed to find these other Discussions that might be similar or related to your question. Give them a read to see if they answer your question. If they do, head back here and update this discussion and mark it as answered, pointing others to the related discussion:\n\n";

export const createCommentBody = (
  answerFromAi: string,
  hasAnswerFromAi: boolean,
  similarDiscussions: string,
  hasSimilarDiscussions: boolean,
): string => {
  let fullBody = `${commentHeader}`;

  // answer and similar discussions
  if (hasAnswerFromAi && hasSimilarDiscussions) {
    fullBody = `${fullBody}${commentSeparator}${answerFromAi}${similarDiscussionPrefix}${similarDiscussions}`;
  }

  // No answer, but similar discussions.
  if (!hasAnswerFromAi && hasSimilarDiscussions) {
    fullBody = `${fullBody}${commentSeparator}${answerFromAi}${similarDiscussionPrefixNoAi}${similarDiscussions}`;
  }

  // answer, but no similar discussions.
  if (hasAnswerFromAi && !hasSimilarDiscussions) {
    fullBody = `${fullBody}${commentSeparator}${answerFromAi}`;
  }
  return fullBody;
};
/* eslint-enable no-console */
