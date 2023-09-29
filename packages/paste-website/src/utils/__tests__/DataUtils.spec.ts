import { getNormalizedNavigationData } from "../DataUtils";

const mockNavData = [
  {
    Feature: "Account Switcher",
    status: "production",
    Figma: "yes",
    "Design committee review": "yes",
    "Engineer committee review": "yes",
    Documentation: true,
    "Component Category": "component",
    Code: "yes",
  },
  {
    Feature: "Alert",
    status: "production",
    Figma: "yes",
    "Design committee review": "yes",
    "Engineer committee review": "yes",
    Documentation: true,
    "Component Category": "component",
    Code: "yes",
  },
  {
    Feature: "Button vs Anchor",
    status: "production",
    Figma: "yes",
    "Design committee review": "yes",
    "Engineer committee review": "yes",
    Documentation: true,
    "Component Category": "pattern",
    Code: "not applicable",
    "Product suitability": ["Console", "Flex", "SendGrid"],
  },
  {
    Feature: "Charting guidelines",
    status: "production",
    Documentation: true,
    "Component Category": "Foundation",
    Code: "yes",
  },
  {
    Feature: "Combobox Primitive",
    status: "production",
    Figma: "not applicable",
    "Design committee review": "not applicable",
    "Engineer committee review": "not applicable",
    Documentation: true,
    "Component Category": "primitive",
    Code: "yes",
  },
  {
    Feature: "Complex filters",
    status: "in development",
    "Component Category": "pattern",
  },
  {
    Feature: "Grid",
    status: "production",
    Figma: "yes",
    "Design committee review": "not applicable",
    "Engineer committee review": "not applicable",
    Documentation: true,
    "Component Category": "layout",
    Code: "yes",
  },
  {
    Feature: "Meter",
    status: "in development",
    "Component Category": "component",
    Code: "yes",
  },
  {
    Feature: "Settings",
    status: "production",
    Figma: "yes",
    "Design committee review": "no",
    "Engineer committee review": "no",
    Documentation: true,
    "Component Category": "page template",
    Code: "not applicable",
    "Product suitability": ["Console", "Flex", "SendGrid"],
  },
];

describe("getNormalizedNavigationData", () => {
  test("should return an empty object if the input data is empty", () => {
    const data: [] = [];
    const result = getNormalizedNavigationData(data);
    expect(result).toEqual({
      allPasteComponent: [],
      allPasteLayout: [],
      allPastePrimitive: [],
      allPastePattern: [],
      allPastePageTemplate: [],
    });
  });

  test("should flatten and mutate the input data correctly for allPasteComponent", () => {
    const result = getNormalizedNavigationData(mockNavData);
    expect(result).toEqual({
      allPasteComponent: [
        {
          name: "Account Switcher",
          packageName: "@twilio-paste/account-switcher",
          packageStatus: "production",
          slug: "account-switcher",
        },
        { name: "Alert", packageName: "@twilio-paste/alert", packageStatus: "production", slug: "alert" },
      ],
      allPasteLayout: [
        {
          name: "Grid",
          packageName: "@twilio-paste/grid",
          packageStatus: "production",
          slug: "grid",
        },
      ],
      allPastePattern: [
        {
          name: "Button vs Anchor",
          packageStatus: "production",
          slug: "button-vs-anchor",
        },
      ],
      allPastePrimitive: [
        {
          name: "Combobox Primitive",
          packageName: "@twilio-paste/combobox-primitive",
          packageStatus: "production",
          slug: "combobox-primitive",
        },
      ],
      allPastePageTemplate: [
        {
          name: "Settings",
          packageName: "@twilio-paste/settings",
          packageStatus: "production",
          slug: "settings",
        },
      ],
    });
  });

  test("should not mutate the input data for other component categories", () => {
    const data = [
      {
        Feature: "Account Switcher",
        status: "production",
        Figma: "yes",
        "Design committee review": "yes",
        "Engineer committee review": "yes",
        Documentation: true,
        "Component Category": "foo",
        Code: "yes",
      },
    ];
    const result = getNormalizedNavigationData(data);
    expect(result).toEqual({
      allPasteComponent: [],
      allPasteLayout: [],
      allPastePrimitive: [],
      allPastePattern: [],
      allPastePageTemplate: [],
    });
  });
});
