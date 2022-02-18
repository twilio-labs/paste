import * as React from 'react';
import {Router} from '@reach/router';
import {ComponentHeader} from '../src/components/shortcodes/component-header';

export const BasicHeader = (): React.ReactNode => {
  return;
  <Router>
    <ComponentHeader name="Alert" categoryRoute="/components" />
  </Router>;
};

export const FullHeader = (): React.ReactNode => {
  return (
    <Router>
      <ComponentHeader
        name="Alert"
        categoryRoute="/components"
        description="This is an alert component."
        designCommitteeReview={null}
        engineerCommitteeReview={null}
        figmaStatus={null}
        githubUrl="https://google.com"
        packageName="@twilio-paste/alert"
        packageStatus="alpha"
        storybookUrl="https://google.com"
        version="1.0.0"
      />
    </Router>
  );
};

export default {
  title: 'Website/ComponentPageHeader',
  component: BasicHeader,
};
