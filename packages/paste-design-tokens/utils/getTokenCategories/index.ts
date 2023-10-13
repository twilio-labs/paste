import type { ImmutableStyleMap } from "theo";

export const getTokenCategories = (tokens: ImmutableStyleMap): any => {
  return tokens
    .get("props")
    .map((prop): string | number | null => {
      if (prop !== undefined) {
        return prop.get("category");
      }
      return null;
    })
    .toSet()
    .sort();
};
