import * as React from "react";

import { GenericHeader } from "../src/components/shortcodes/generic-header";

export const BasicHeader = (): React.ReactNode => {
  return <GenericHeader name="Alert" categoryRoute="/components" />;
};

export const FullHeader = (): React.ReactNode => {
  return (
    <GenericHeader
      name="Alert"
      categoryRoute="/components"
      description="This is an alert component."
      githubUrl="https://google.com"
      packageName="@twilio-paste/alert"
      packageStatus="Alpha"
      storybookUrl="https://google.com"
      version="1.0.0"
    />
  );
};

export default {
  title: "Website/GenericPageHeader",
  component: BasicHeader,
};
