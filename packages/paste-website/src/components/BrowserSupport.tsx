import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';

export const BrowserSupport: React.FC = () => (
  <span>
    Paste is designed to support newer and older browsers through{' '}
    <Anchor href="https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement#Graceful_degradation_and_progressive_enhancement_in_a_nutshell">
      graceful degradation
    </Anchor>
    . Currently, this means that the newest versions of Chrome, Firefox, Safari, Edge, and IE 11 and up are supported.
  </span>
);
