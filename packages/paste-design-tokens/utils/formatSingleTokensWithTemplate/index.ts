import type { ImmutableStyleMap } from "theo";

import type { DesignToken } from "../../types";

export const formatSingleTokensWithTemplate = (
  tokens: ImmutableStyleMap,
  tokenTemplate: (prop: DesignToken) => string,
): string => {
  return (
    tokens
      .get("props")
      // eslint-disable-next-line consistent-return
      .sortBy((prop) => {
        if (prop !== undefined) {
          return prop.get("name");
        }
      })
      .map((prop): string | null => {
        if (prop !== undefined) {
          return tokenTemplate(prop.toJS());
        }
        return null;
      })
      .join("\n")
  );
};
