import * as React from 'react';
import {Grid, Column, GridProps} from '@twilio-paste/core/grid';

interface GetStartedCardLinksProps {
  children: NonNullable<React.ReactNode>;
  ref?: any;
  vertical: GridProps['vertical'];
}
export const GetStartedCardLinks = React.forwardRef<HTMLDivElement, GetStartedCardLinksProps>(
  ({children, vertical}, ref) => {
    const WrappedLinks = React.Children.map(children, child => {
      return <Column>{child}</Column>;
    });
    // Grid must have children, but Children.map is typed to possibly return null
    // or undefined, we have to do this to stop Grid types complaining
    if (WrappedLinks == null) return null;
    return (
      <Grid gutter="space40" ref={ref} vertical={vertical}>
        {WrappedLinks}
      </Grid>
    );
  }
);
