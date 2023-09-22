import { getTokenContrastPairs } from "../components/tokens-list/helpers";

describe("Color token pairing display", () => {
  describe("getTokenContrastPairs", () => {
    it("should only return an object of tokens with their accessbile pairings", () => {
      const mockTokens = {
        tokens: {
          "background-colors": [
            {
              type: "color",
              value: "rgb(244, 244, 246)",
              comment: "Default background color for any container.",
              name: "color-background",
              altValue: "#F4F4F6",
              category: "background-color",
            },
            {
              type: "color",
              value: "rgb(20, 176, 83)",
              comment: 'Background color used to represent an entity or person as "available".',
              name: "color-background-available",
              altValue: "#14B053",
              category: "background-color",
            },
          ],
          "text-colors": [
            {
              type: "color",
              value: "rgb(96, 107, 133)",
              comment: "Weak body text for visual hierarchy.",
              text_contrast_pairing: [
                "color-background",
                "color-background-body",
                "color-background-neutral-weakest",
                "color-background-warning-weakest",
                "color-background-error-weakest",
                "color-background-row-striped",
                "color-background-primary-weakest",
                "color-background-destructive-weakest",
              ],
              name: "color-text-weak",
              altValue: "#606B85",
              category: "text-color",
            },
            {
              type: "color",
              value: "rgb(96, 107, 133)",
              name: "color-text",
              altValue: "#606B85",
              category: "text-color",
            },
            {
              type: "color",
              value: "rgb(96, 107, 133)",
              text_contrast_pairing: ["color-background", "color-background-body"],
              name: "color-text-strong",
              altValue: "#606B85",
              category: "text-color",
            },
          ],
        },
      };
      expect(getTokenContrastPairs(mockTokens)).toEqual({
        "color-text-weak": [
          "color-background",
          "color-background-body",
          "color-background-neutral-weakest",
          "color-background-warning-weakest",
          "color-background-error-weakest",
          "color-background-row-striped",
          "color-background-primary-weakest",
          "color-background-destructive-weakest",
        ],
        "color-text-strong": ["color-background", "color-background-body"],
      });
    });
  });
});
