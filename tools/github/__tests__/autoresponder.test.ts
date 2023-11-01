/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import {
  checkAiAndDiscussionResponses,
  commentHeader,
  commentSeparator,
  createCommentBody,
  getAnswerFromAi,
  getSimilarDiscussions,
  similarDiscussionPrefix,
  similarDiscussionPrefixNoAi,
} from "../utils";
import { handlers } from "./mocks/AiHandler";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("createCommentBody", () => {
  it("should create a comment body from ai and discussion responses", () => {
    const answerFromAi = "ai answer";
    const hasAnswerFromAi = true;
    const similarDiscussions = "similar discussions";
    const hasSimilarDiscussions = true;

    const commentBody = createCommentBody(answerFromAi, hasAnswerFromAi, similarDiscussions, hasSimilarDiscussions);

    expect(commentBody).toEqual(
      `${commentHeader}${commentSeparator}${answerFromAi}${similarDiscussionPrefix}${similarDiscussions}`,
    );
  });

  it("should create a comment body from ai response only", () => {
    const answerFromAi = "ai answer";
    const hasAnswerFromAi = true;
    const similarDiscussions = "";
    const hasSimilarDiscussions = false;

    const commentBody = createCommentBody(answerFromAi, hasAnswerFromAi, similarDiscussions, hasSimilarDiscussions);

    expect(commentBody).toEqual(`${commentHeader}${commentSeparator}${answerFromAi}`);
  });

  it("should create a comment body from discussion responses only", () => {
    const answerFromAi = "";
    const hasAnswerFromAi = false;
    const similarDiscussions = "similar discussions";
    const hasSimilarDiscussions = true;

    const commentBody = createCommentBody(answerFromAi, hasAnswerFromAi, similarDiscussions, hasSimilarDiscussions);

    expect(commentBody).toEqual(
      `${commentHeader}${commentSeparator}${answerFromAi}${similarDiscussionPrefixNoAi}${similarDiscussions}`,
    );
  });
});

describe("checkAiAndDiscussionResponses", () => {
  it("should return true for hasAnswerFromAi when the AI provides a valid answer", () => {
    const result = checkAiAndDiscussionResponses("Here is your answer.", "No similar discussions found.");
    expect(result.hasAnswerFromAi).toBe(true);
  });

  it("should return false for hasAnswerFromAi when the AI does not provide a valid answer", () => {
    const result = checkAiAndDiscussionResponses(
      "Sorry, I don't know how to help with that.",
      "No similar discussions found.",
    );
    expect(result.hasAnswerFromAi).toBe(false);
  });

  it("should return true for hasSimilarDiscussions when there are similar discussions", () => {
    const result = checkAiAndDiscussionResponses("Here is your answer.", "Here are some similar discussions.");
    expect(result.hasSimilarDiscussions).toBe(true);
  });

  it("should return false for hasSimilarDiscussions when there are no similar discussions", () => {
    const result = checkAiAndDiscussionResponses("Here is your answer.", "No similar discussions found.");
    expect(result.hasSimilarDiscussions).toBe(false);
  });

  it("should return false for hasSimilarDiscussions when the similar discussions string is empty", () => {
    const result = checkAiAndDiscussionResponses("Here is your answer.", "");
    expect(result.hasSimilarDiscussions).toBe(false);
  });
});

describe("getAnswerFromAi", () => {
  it("should return the answer from the AI", async () => {
    const secret = "test_secret";
    const question = "test_question";
    const answer = await getAnswerFromAi(secret, question);

    expect(answer).toEqual("ai answer");
  });

  it("should throw an error if the API call fails", async () => {
    server.use(
      http.post("https://paste.twilio.design/api/ai", () => {
        return HttpResponse.error();
      }),
    );

    try {
      await getAnswerFromAi("test_secret", "test_question");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("getSimilarDiscussions", () => {
  it("should return top 3 similar discussions when API call is successful", async () => {
    const mockData = [
      { heading: "Discussion 1", path: "/path1", meta: { updatedAt: "2022-06-23T01:50:22Z" }, similarity: 0.8 },
      { heading: "Discussion 2", path: "/path2", meta: { updatedAt: "2022-11-23T18:03:33Z" }, similarity: 0.9 },
      { heading: "Discussion 3", path: "/path3", meta: { updatedAt: "2022-06-22T22:17:04Z" }, similarity: 0.85 },
      { heading: "Discussion 4", path: "/path4", meta: { updatedAt: "2022-12-09T23:06:46Z" }, similarity: 0.79 },
    ];

    server.use(
      http.post("https://paste.twilio.design/api/discussions-search", () => {
        return HttpResponse.json({ data: mockData });
      }),
    );

    const result = await getSimilarDiscussions("secret", "question");

    expect(result).toContain("Discussion 1");
    expect(result).toContain("Discussion 2");
    expect(result).toContain("Discussion 3");
    expect(result).not.toContain("Discussion 4"); // Discussion 4 is removed because it is the 4th result
  });

  it("should return 'No similar discussions found.' when API call fails", async () => {
    server.use(
      http.post("https://paste.twilio.design/api/discussions-search", () => {
        return HttpResponse.error();
      }),
    );

    const result = await getSimilarDiscussions("secret", "question");
    expect(result).toBe("No similar discussions found.");
  });

  it("should return 'No similar discussions found.' when no discussions have similarity > 0.78", async () => {
    const mockData = [
      { heading: "Discussion 1", path: "/path1", meta: { updatedAt: "2022-01-01" }, similarity: 0.7 },
      { heading: "Discussion 2", path: "/path2", meta: { updatedAt: "2022-01-02" }, similarity: 0.6 },
    ];

    server.use(
      http.post("https://paste.twilio.design/api/discussions-search", () => {
        return HttpResponse.json({ data: mockData });
      }),
    );

    const result = await getSimilarDiscussions("secret", "question");
    expect(result).toBe("No similar discussions found.");
  });

  it("should return only discussions that have similarity > 0.78", async () => {
    const mockData = [
      { heading: "Discussion 1", path: "/path1", meta: { updatedAt: "2022-06-23T01:50:22Z" }, similarity: 0.8 },
      { heading: "Discussion 2", path: "/path2", meta: { updatedAt: "2022-11-23T18:03:33Z" }, similarity: 0.9 },
      { heading: "Discussion 3", path: "/path3", meta: { updatedAt: "2022-06-22T22:17:04Z" }, similarity: 0.85 },
      { heading: "Discussion 4", path: "/path1", meta: { updatedAt: "2022-01-01" }, similarity: 0.7 },
      { heading: "Discussion 5", path: "/path2", meta: { updatedAt: "2022-01-02" }, similarity: 0.6 },
    ];

    server.use(
      http.post("https://paste.twilio.design/api/discussions-search", () => {
        return HttpResponse.json({ data: mockData });
      }),
    );

    const result = await getSimilarDiscussions("secret", "question");
    expect(result).toContain("Discussion 1");
    expect(result).toContain("Discussion 2");
    expect(result).toContain("Discussion 3");
    expect(result).not.toContain("Discussion 4");
    expect(result).not.toContain("Discussion 5");
  });
});
