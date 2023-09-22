import type { StoryFn } from "@storybook/react";
import * as React from "react";

import { PropsTable } from "../src/components/PropsTables";

const MockComponentAPI = {
  TBody: {
    externalProps: {
      about: {
        type: "string",
        defaultValue: null,
        required: false,
        externalProp: false,
      },
    },
  },
  TFoot: {
    internalProps: {
      about: {
        type: "string",
        defaultValue: "foo",
        required: true,
        description: "this is a function",
        externalProp: true,
      },
      accessKey: {
        type: "string",
        defaultValue: null,
        required: false,
        externalProp: true,
      },
    },
  },
  Table: {
    internalProps: {
      about: {
        type: "string",
        defaultValue: null,
        required: false,
        externalProp: false,
      },
    },
    externalProps: {
      accessKey: {
        type: "string",
        defaultValue: null,
        required: false,
        externalProp: true,
      },
    },
  },
};

export default {
  title: "Website/PropsTable",
};

export const PropsTableDefault: StoryFn = () => {
  return <PropsTable componentApi={MockComponentAPI} />;
};
