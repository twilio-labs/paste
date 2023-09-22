import * as React from 'react';
import { UnorderedList, ListItem } from '@twilio-paste/list';
import { Anchor } from '@twilio-paste/anchor';

import { Ingredients, Required, Related } from './Ingredients';

const ObjectsListIngredients: React.FC = () => {
  return (
    <Ingredients>
      <Required>
        <UnorderedList>
          <ListItem>
            <Anchor href="/components/breadcrumb">Breadcrumb</Anchor> and{' '}
            <Anchor href="/components/heading">Heading</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/data-grid">Data Grid</Anchor>
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
            <Anchor href="/components/paragraph">Paragraph</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/icon">Icons: Export, Filter, More, Search</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/patterns/filter-group">Filter group pattern</Anchor>
            <UnorderedList>
              <ListItem>
                <Anchor href="/components/select">Select</Anchor> and{' '}
                <Anchor href="/components/combobox">Combobox</Anchor>
              </ListItem>
              <ListItem>
                <Anchor href="/components/separator">Separator</Anchor>
              </ListItem>
              <ListItem>
                <Anchor href="/components/input">Input</Anchor>
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            <Anchor href="/patterns/data-export">Data export pattern</Anchor>
          </ListItem>
        </UnorderedList>
      </Related>
    </Ingredients>
  );
};

export { ObjectsListIngredients };
