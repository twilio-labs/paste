import * as React from "react";

import { Timeline } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Timeline",
  component: Timeline,
};

export const Default = (): React.ReactNode => {
  return <Timeline>Initial story</Timeline>;
};
