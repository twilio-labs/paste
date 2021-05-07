import * as RawJSON from '@twilio-paste/design-tokens/dist/tokens.raw.json';

const camelCase = require('lodash.camelcase');

export const DEPRECATE_TOKENS = Object.values(RawJSON.props)
  // @ts-ignore deprecated most definitely exists
  .filter((token) => token.deprecated)
  .map((deprecatedToken) => camelCase(deprecatedToken.name));
