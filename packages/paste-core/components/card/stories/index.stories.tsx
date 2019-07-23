import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Card, CardTitle, CardBody} from '../src';

storiesOf('Components|Card', module).add('Default', () => (
  <Card onClick={action('clicked')}>
    <CardTitle>Title</CardTitle>
    <CardBody>Body</CardBody>
  </Card>
));
