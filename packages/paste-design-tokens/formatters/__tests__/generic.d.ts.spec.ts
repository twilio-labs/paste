import { resolve } from "path";

import * as theo from "theo";

import { genericDTsTemplate } from "../generic.d.ts";

theo.registerFormat("generic.d.ts", genericDTsTemplate);

describe("generic declaration file formatter", () => {
  it("should return typescript definitions formatted tokens", async () => {
    return theo
      .convert({
        transform: {
          type: "web",
          file: resolve(__dirname, "../__fixtures__/index.yml"),
        },
        format: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore Theo isn't typed for custom format types
          type: "generic.d.ts",
        },
      })
      .then((dTS: string) => {
        return expect(dTS).toMatchSnapshot();
      })
      .catch((error: string) => {
        // eslint-disable-next-line no-console
        console.log(`Something  went wrong: ${error}`);
        throw new Error("[dTSFormatter test]: should return typescript definitions formatted tokens threw");
      });
  });
});
