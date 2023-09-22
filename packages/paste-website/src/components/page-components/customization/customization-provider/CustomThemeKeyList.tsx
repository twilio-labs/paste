import { Grid, Column } from '@twilio-paste/grid';
import { UnorderedList, ListItem } from '@twilio-paste/list';

export const CustomThemeKeyList = (): JSX.Element => {
  return (
    <Grid>
      <Column>
        <UnorderedList>
          <ListItem>backgroundColors</ListItem>
          <ListItem>borderColors</ListItem>
          <ListItem>borderWidths</ListItem>
          <ListItem>breakpoints</ListItem>
          <ListItem>fontSizes</ListItem>
          <ListItem>fontWeights</ListItem>
          <ListItem>fonts</ListItem>
        </UnorderedList>
      </Column>
      <Column>
        <UnorderedList>
          <ListItem>heights</ListItem>
          <ListItem>iconSizes</ListItem>
          <ListItem>lineHeights</ListItem>
          <ListItem>maxHeights</ListItem>
          <ListItem>maxWidths</ListItem>
          <ListItem>minHeights</ListItem>
          <ListItem>minWidths</ListItem>
        </UnorderedList>
      </Column>
      <Column>
        <UnorderedList>
          <ListItem>radii</ListItem>
          <ListItem>shadows</ListItem>
          <ListItem>sizes</ListItem>
          <ListItem>space</ListItem>
          <ListItem>textColors</ListItem>
          <ListItem>widths</ListItem>
          <ListItem>zIndices</ListItem>
        </UnorderedList>
      </Column>
    </Grid>
  );
};
