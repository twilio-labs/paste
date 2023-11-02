/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("https://paste.twilio.design/api/ai", () => {
    return HttpResponse.text("ai answer");
  }),
];
