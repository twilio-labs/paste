import * as React from 'react';
import { UnorderedList, ListItem } from '@twilio-paste/list';
import { Anchor } from '@twilio-paste/anchor';

import { Ingredients, Required, Related } from './Ingredients';

const ObjectDetailsIngredients: React.FC = () => {
  return (
    <Ingredients>
      <Required>
        <UnorderedList>
          <ListItem>
            <Anchor href="/components/breadcrumb">Breadcrumb</Anchor> and{' '}
            <Anchor href="/components/heading">Heading</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/description-list">Description List</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/stack">Stack</Anchor> and <Anchor href="/components/grid">Grid</Anchor>
          </ListItem>
        </UnorderedList>
      </Required>
      <Related>
        <UnorderedList>
          <ListItem>
            <Anchor href="/components/anchor">Anchor</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/button">Button</Anchor> and{' '}
            <Anchor href="components/button-group">Button Group</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/in-page-navigation">In Page Navigation</Anchor> and{' '}
            <Anchor href="/components/tabs">Tabs</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/icon">Icon: Information</Anchor>
          </ListItem>
        </UnorderedList>
      </Related>
    </Ingredients>
  );
};

export { ObjectDetailsIngredients };
