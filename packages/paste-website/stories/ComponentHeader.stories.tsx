import * as React from 'react';
import {ComponentHeader} from '../src/components/shortcodes/component-header';

export const BasicHeader = (): React.ReactNode => {
  return <ComponentHeader name="Alert" categoryRoute="/components" />;
};

export const FullHeader = (): React.ReactNode => {
  return (
    <ComponentHeader
      name="Alert"
      categoryRoute="/components"
      description="This is an alert component."
      designCommitteeStatus={null}
      engineerCommitteeStatus={null}
      figmaStatus={null}
      githubUrl="https://google.com"
      packageName="@twilio-paste/alert"
      status="alpha"
      storybookUrl="https://google.com"
      version="1.0.0"
    />
  );
};

export default {
  title: 'Website/ComponentHeader',
  component: BasicHeader,
};
