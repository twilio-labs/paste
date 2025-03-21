import RawJSON from "@twilio-paste/design-tokens/dist/tokens.raw.json" assert { type: "json" };
import camelCase from "lodash/camelCase";

export const DEPRECATE_TOKENS = Object.values(RawJSON.props)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore deprecated most definitely exists
  .filter((token) => token.deprecated)
  .map((deprecatedToken) => camelCase(deprecatedToken.name));
