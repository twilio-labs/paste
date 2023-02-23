import * as React from 'react';
import {Combobox} from '@twilio-paste/core/combobox';

const authors = [
  'James Baldwin',
  'Adrienne Maree Brown',
  'Octavia Butler',
  'Ta-Nehisi Coates',
  'Audre Lorde',
  'Nnedi Okorafor',
];

export const BasicCombobox = (): JSX.Element => {
  return <Combobox items={authors} labelText="Select an author" required />;
};

BasicCombobox.displayName = 'BasicCombobox';
