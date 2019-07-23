import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Input} from '../src';

storiesOf('Components|Input', module).add('Default', () => <Input inputId="text_id_1" type="text" />);
