import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {Label} from '@twilio-paste/label';

import {Meter} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Meter',
  component: Meter,
};

export const LowRangeOptimal = (): React.ReactNode => {
  return (
    <>
      <Label id="meter" as="legend" htmlFor="">
        Storage space used
      </Label>
      <Meter ariaLabelledby="meter" min={0} max={100} value={20} low={33} high={66}>
        60% used
      </Meter>
    </>
  );
};

export const MidRangeOptimal = (): React.ReactNode => {
  return (
    <>
      <Label id="meter" as="legend" htmlFor="">
        Storage space used
      </Label>
      <Meter ariaLabelledby="meter" min={0} max={100} value={50} low={33} high={66}>
        60% used
      </Meter>
    </>
  );
};

export const HighRangeOptimal = (): React.ReactNode => {
  return (
    <>
      <Label id="meter" as="legend" htmlFor="">
        Storage space used
      </Label>
      <Meter ariaLabelledby="meter" min={0} max={100} value={80} low={33} high={66}>
        60% used
      </Meter>
    </>
  );
};
