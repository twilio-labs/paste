import * as React from "react";

import { Footnote } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Footnote",
  component: Footnote,
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <Footnote>12</Footnote>
    </>
  );
};

export const FootnoteWithTooltip = (): React.ReactNode => {
  return (
    <>
      <Footnote tooltipText="This is a footnote">12</Footnote>
    </>
  );
};
