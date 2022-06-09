import * as React from 'react';

import {CalloutText, Callout, CalloutTitle} from '../../callout';

// @TODO add when we add category meta etc.
export const FontSizeCallout: React.FC = () => (
  <Callout>
    <CalloutTitle as="h4">Heads up about font sizes in Paste!</CalloutTitle>
    <CalloutText>
      Font-sizes in our Paste tokens use rem values. Unlike em values which are relative to their parent element, rem
      values are relative to the html element. If you aren&apos;t using the Theme.Provider component, you must set
      font-size: 100%; on your page&apos;s html tag for the font-sizes to be sized correctly as 1rem=16px.
    </CalloutText>
  </Callout>
);
