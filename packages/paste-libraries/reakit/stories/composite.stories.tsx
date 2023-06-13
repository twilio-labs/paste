import * as React from 'react';

import {useCompositeState, Composite, CompositeGroup, CompositeItem} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/Reakit/Composite',
  component: Composite,
  subcomponents: {Composite, CompositeItem},
};

const onClick =
  (num: number): (() => void) =>
  () =>
    // eslint-disable-next-line no-console
    console.log(`clicked ${num}`);

export const BasicUsage = (): React.ReactNode => {
  const composite = useCompositeState();

  return (
    <Composite {...composite} role="listbox" aria-label="My toolbar">
      <CompositeItem {...composite} role="option" onClick={onClick(1)}>
        Item 1
      </CompositeItem>
      <CompositeItem {...composite} role="option" onClick={onClick(2)}>
        Item 2
      </CompositeItem>
      <CompositeItem {...composite} role="option" onClick={onClick(3)}>
        Item 3
      </CompositeItem>
    </Composite>
  );
};

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant
export const AriaActivedescendant = (): React.ReactNode => {
  const composite = useCompositeState({unstable_virtual: true});
  return (
    <Composite {...composite} role="listbox" aria-label="My toolbar">
      <CompositeItem {...composite} role="option" onClick={onClick(1)}>
        Item 1
      </CompositeItem>
      <CompositeItem {...composite} role="option" onClick={onClick(2)}>
        Item 2
      </CompositeItem>
      <CompositeItem {...composite} role="option" onClick={onClick(3)}>
        Item 3
      </CompositeItem>
    </Composite>
  );
};

const Grid: React.FC<any> = (props) => {
  return <Composite role="grid" {...props} />;
};

const GridRow: React.FC<any> = (props) => {
  return <CompositeGroup role="row" {...props} style={{display: 'flex', columnGap: '10px'}} />;
};

const GridCell: React.FC<any> = (props) => {
  return <CompositeItem as="div" role="gridcell" {...props} onClick={onClick(props.currentId)} />;
};

export const TwoDimensional = (): React.ReactNode => {
  const composite = useCompositeState({wrap: true});
  return (
    <Grid {...composite} aria-label="My grid">
      <GridRow {...composite}>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
      </GridRow>
      <GridRow {...composite}>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
      </GridRow>
      <GridRow {...composite}>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
        <GridCell {...composite}>Item</GridCell>
      </GridRow>
    </Grid>
  );
};
